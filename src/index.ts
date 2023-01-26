import "./db";
import express from "express";
const app = express();
import routes from "./routes/routes";

const PORT = 3000;

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
