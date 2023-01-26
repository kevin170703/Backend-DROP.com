import mongoose from "mongoose";
import { db } from "./datadb";
const conectionString = db;

// conexion a mongo
mongoose
  .connect(conectionString)
  .then(() => {
    console.log("databse ok");
  })
  .catch((err) => {
    console.log(err);
  });
