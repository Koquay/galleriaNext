import User from "../../models/User";
import Cart from "../../models/Cart";
import connectDb from "../../utils/connectDb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";

connectDb();

export default async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!isLength(name, { min: 3, max: 10 })) {
      return res.status(422).send("Name must be 3 to 10 characters");
    } else if (!isLength(password, { min: 6 })) {
      return res
        .status(422)
        .send("Password must be a minimum of six characters");
    } else if (!isEmail(email)) {
      return res.status(422).send("Invalid email");
    }

    const user = await User.findOne({ email });

    console.log("user", user);

    if (user) {
      res.status(422).send(`User with this email already exists:  ${email}`);
    }

    const hash = await bcrypt.hash(password, 8);

    const newUser = await User({
      name,
      email,
      password: hash,
    }).save();

    const cart = await new Cart({ user: newUser._id }).save();
    console.log("new cart", cart);

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token, cart });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error signing up user");
  }
};
