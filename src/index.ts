import "./db";
import express, { Request, Response, NextFunction } from "express";
const app = express();
import routes from "./routes/routes";
import notFound from "./middleware/notFound";

const PORT = 3000;

app.use(express.json());

app.use(routes);

app.use(notFound);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
