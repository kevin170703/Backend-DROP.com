import "dotenv/config";
import "./db";
import express from "express";
const app = express();
import routes from "./routes/routes";
import notFound from "./middleware/notFound";

const PORT = process.env.PORT || 3000;

// middlwwares
app.use(express.json());

// rutas
app.use(routes);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
