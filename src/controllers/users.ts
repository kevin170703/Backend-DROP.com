import User from "../models/User";
import bcrypt from "bcrypt";
import { Response, Request } from "express";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({}).populate("products", {
      nameProduct: 1,
      stock: 1,
      price: 1,
    });
    if (!users.length) res.json({ msj: "la base de datos se encuentra vacia" });
    res.status(202).json(users);
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
};

export const newUser = async (req: Request, res: Response) => {
  const { userName, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const user = new User({
    userName,
    email,
    password: passwordHash,
  });

  const savedUser = await user.save();
  res.json(savedUser);
};
