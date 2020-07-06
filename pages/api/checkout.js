import Stripe from "stripe";
import uuidv4 from "uuid/v4";
import jwt from "jsonwebtoken";
import Cart from "../../models/Cart";
import Order from "../../models/Order";
import calculateCartTotal from "../../utils/calculateCartTotal";

export default async (req, res) => {
  console.log("req.body", req.body);
  const { checkoutData } = req.body;

  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    const cart = await Cart.findOne({ user: userId }).populate({
      path: "products.product",
      model: "Product",
    });

    console.log("cart", cart);

    const { cartTotal, stripeTotal } = calculateCartTotal(cart.products);

    console.log("cartTotal, stripeTotal", cartTotal, stripeTotal);

    const order = await new Order({
      user: userId,
      email: checkoutData.email,
      total: cartTotal,
      products: cart.products,
    }).save();

    // await Cart.findOneAndUpdate({ _id: cart._id }, { $set: { products: [] } });

    res.status(200).send("Your order was successfully placed.");
  } catch (error) {
    console.log("xxxerror", error);
    res.status(500).send("Error processing checkout");
  }
};
