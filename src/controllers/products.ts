// import Product from "../models/Product";
// import User from "../models/User";
// import { Request, Response } from "express";

// export const getProducts = async (_req: Request, res: Response) => {
//   try {
//     const product = await Product.find({}).populate("user", {
//       userName: 1,
//       email: 1,
//     });

//     if (!product.length)
//       return res.json({ msj: "La base de datos se ecuentra vacia" });

//     return res.json(product);
//   } catch (error) {
//     console.log(error);
//     res.status(404).end();
//   }
// };

// export const getProductsByIdUser = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const product = await Product.find();

//     const filterProducts = product.filter((element) => {
//       return element.user.toJSON() === id;
//     });

//     if (!filterProducts.length)
//       return res.json({ msj: "El usuario no cuenta con datos aun" });

//     return res.json(filterProducts);
//   } catch (error) {
//     console.log(error);
//     res.status(404).end();
//   }
// };

// export const getProductsByName = async (req: Request, res: Response) => {
//   const { name } = req.params;
//   try {
//     const product = await Product.find({ nameProduct: name.toLowerCase() });

//     if (!product.length)
//       res.status(404).send({
//         error: "El nombre de el producto introducido es incorrecto",
//       });

//     return res.json(product);
//   } catch (error) {
//     console.log(error);
//     res.status(404).end();
//   }
// };

// export const createProduct = async (req: Request, res: Response) => {
//   const { nameProduct, stock, price, userId } = req.body;
//   const user = await User.findById(userId);

//   const product = new Product({
//     nameProduct: nameProduct,
//     stock: stock,
//     price: price,
//     user: user?._id,
//   });

//   try {
//     const savedProduct = await product.save();

//     if (user !== null) {
//       user.products = user.products.concat(savedProduct._id);
//       await user.save();
//       res.send("El producto se creo correctamente");
//     } else {
//       res.status(404).send({ error: "Usuario nulo" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(404).end();
//   }
// };

// export const updataProduct = (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { name, stock, price } = req.body;
//   const newProductInfo = {
//     nameProduct: name,
//     stock: stock,
//     price: price,
//   };
//   try {
//     const product = Product.findByIdAndUpdate(id, newProductInfo, {
//       new: true,
//     });

//     res.json(product);
//   } catch (error) {
//     console.log(error);
//     res.status(404).end();
//   }
// };

// export const deleteProduct = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     await Product.findByIdAndDelete(id);
//     res.send(`El producto con la id ${id} fue eliminado correctamente`);
//   } catch (error) {
//     console.log(error);
//     res.status(404).end();
//   }
// };
