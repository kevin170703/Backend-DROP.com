import { Response, Request } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

// export const login = async (req: Request, res: Response) => {
//   const { userName, password } = req.body;
//   const user = await User.findAll({
//     where: {
//       name: userName,
//     },
//   });
//   res.json(user);

// const passwordCorrect =
//   user === null ? false : await bcrypt.compare(password, user.password);

// if (!passwordCorrect || user === null)
//   return res
//     .status(401)
//     .send({ error: "El usuario o contraseña incorrecto" });

// res.json({
//   id: user.id,
//   userName: user.userName,
//   email: user.email,
//   products: user.products,
// });
// };
