import "dotenv/config";
import sequelize from "./db";
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
  sequelize.sync({ force: false });
  console.log("DB correctamente conectada");
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
