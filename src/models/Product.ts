import { Schema, model } from "mongoose";

const productSchema: Schema = new Schema({
  nameProduct: String,
  stock: Number,
  price: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

productSchema.set("toJSON", {
  transform: (document, returnendObject) => {
    returnendObject.id = returnendObject._id;
    delete returnendObject._id;
    delete returnendObject.__v;
  },
});

const Product = model("Product", productSchema);

export default Product;

// Product.find({}).then((result) => {
//   console.log(result);
//   mongoose.connection.close();
// });

// const product = new Product({
//   nameProduct: "pan",
//   stock: 2,
//   price: 200,
//   important: true,
// });

// product
//   .save()
//   .then((result) => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log(err);
//   });
