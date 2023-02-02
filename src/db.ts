import mongoose from "mongoose";
const conectionString = process.env.DB_DATA;

// conexion a mongo
if (conectionString) {
  mongoose
    .connect(conectionString)
    .then(() => {
      console.log("Base de datos conectada correctamente");
    })
    .catch((err) => {
      console.log(err);
    });
} else console.log("conectionString invalido");
