import User from "../../models/User";
import Cart from "../../models/Cart";
import connectDb from "../../utils/connectDb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";

connectDb();

export default async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!isLength(password, { min: 6 })) {
      return res
        .status(422)
        .send("Password must be a minimum of six characters");
    } else if (!isEmail(email)) {
      return res.status(422).send("Invalid email");
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).send("User does not exist.");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      const cart = await Cart.findOne({ user: user._id });

      res.status(200).json({ token, cart });
    } else {
      res.status(401).send("Invalid login information");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error signing up user");
  }
};
