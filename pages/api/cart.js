import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Cart from "../../models/Cart";
import Product from "../../models/Product";
import connectDb from "../../utils/connectDb";
import chalk from "chalk";
import isLength from "validator/lib/isLength";

connectDb();

const { ObjectId } = mongoose.Types;

export default async (req, res) => {
  switch (req.method) {
    case "PUT": {
      await handlePutRequest(req, res);
      break;
    }
    case "GET": {
      await handleGetRequest(req, res);
      break;
    }

    case "DELETE": {
      await handleDeleteRequest(req, res);
      break;
    }

    default: {
      res.send("Invalid Request");
    }
  }
};

const handleDeleteRequest = async (req, res) => {
  console.log("HANDLE DELETE REQUEST");
  if (!("authorization" in req.headers)) {
    return res.status(402).json("No access token");
  }

  const { productId } = req.query;
  console.log(chalk.blue("productId", productId));
  console.log(
    chalk.blue("req.headers.authorization", req.headers.authorization)
  );
  console.log(chalk.blue("req.query", JSON.stringify(req.query)));

  const { userId } = await jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET
  );

  console.log(chalk.blue("userId", userId));

  try {
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $pull: { products: { product: productId } } },
      { new: true }
    ).populate({
      path: "products.product",
      model: "Product",
    });
    res.status(201).json(cart.products);
  } catch (error) {
    console.log(error);
    res.status(500).send("ERROR DELETING ITEM");
  }
};

const handleGetRequest = async (req, res) => {
  console.log("HANDLEGETREQUEST");

  if (!("authorization" in req.headers)) {
    res.status(401).send("No access token present");
  }

  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    console.log("userId", userId);

    const cart = await Cart.findOne({ user: userId }).populate({
      path: "products.product",
      model: "Product",
    });

    return res.status(200).json(cart);
  } catch (error) {}
};

const handlePutRequest = async (req, res) => {
  console.log("HANDLEPUTREQUEST");

  if (!("authorization" in req.headers)) {
    return res.status(401).send("No access token");
  }

  const { productId, size, quantity } = req.body;

  if (!isLength(size, { min: 1 })) {
    console.log("size required");
    return res.status(401).send("Please select a size");
  }
  if (!quantity) {
    console.log("quantity required");
    return res.status(401).send("Please select a size");
  }

  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    const cart = await Cart.findOne({ user: userId });

    const productExists = cart.products.some(
      (doc) => ObjectId(productId).equals(doc.product) && size === doc.size
    );

    let updatedCart;

    if (productExists) {
      updatedCart = await Cart.findOneAndUpdate(
        { _id: cart._id, "products.product": productId },
        { $inc: { "products.$.quantity": quantity } },
        { new: true }
      );
    } else {
      const newProduct = { product: productId, quantity, size };
      updatedCart = await Cart.findByIdAndUpdate(
        { _id: cart._id },
        { $addToSet: { products: newProduct } },
        { new: true }
      );
    }

    return res.status(200).json(updatedCart);
  } catch (error) {
    console.error(error);
    return res.status(403).send("Problem adding item to cart");
  }
};
