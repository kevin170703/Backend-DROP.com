import "dotenv/config";
import "./db";
import cors from "cors";
import express from "express";
const app = express();
import routes from "./routes/routes";
import notFound from "./middleware/notFound";

const PORT = process.env.PORT || 3001;

// middlwwares
app.use(express.json());
app.use(cors());

// rutas
app.use(routes);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
