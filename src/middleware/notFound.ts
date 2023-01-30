import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ error: "La ruta ingresada no es valida" });
};

// app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
//   console.error(error);
//   if (error.name === "TypeError") res.status(400).end();
//   else res.status(500).end();
// });
