import mongoose from "mongoose";
import { passwors } from "./password";
const conectionString = `mongodb+srv://kevin03:${passwors}@cluster0.f2mukz7.mongodb.net/porducts?retryWrites=true&w=majority`;

// conexion a mongo
mongoose
  .connect(conectionString)
  .then(() => {
    console.log("databse ok");
  })
  .catch((err) => {
    console.log(err);
  });
