import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User";

export async function register(req, res) {

  const hash = await bcrypt.hash(

    req.body.password,

    10

  );

  const user = await User.create({

    email: req.body.email,

    password: hash

  });

  res.json(user);

}

export async function login(req, res) {

  const user = await User.findOne({

    email: req.body.email

  });

  if (!user)

    return res.status(400).send("not found");

  const valid = await bcrypt.compare(

    req.body.password,

    user.password

  );

  if (!valid)

    return res.status(400).send("wrong");

  const token = jwt.sign(

    { id: user._id },

    process.env.JWT_SECRET!

  );

  res.json({

    token

  });

}