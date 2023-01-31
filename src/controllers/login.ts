import { Response, Request } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName });

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.password);

  if (!passwordCorrect)
    return res
      .status(401)
      .send({ error: "El usuario o contraseña incorrecto" });

  if (user !== null)
    return res.json({
      userName: user.userName,
      email: user.email,
      products: user.products,
    });
};
