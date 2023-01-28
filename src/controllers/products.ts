import Product from "../models/Product";
import { Request, Response } from "express";

export const getProducts = (_req: Request, res: Response) => {
  Product.find({})
    .then((result) => {
      if (!result)
        return res.json({ msj: "La base de datos se ecuentra vacia" });
      return res.json(result);
    })
    .catch((err) => console.log(err));
};

export const getProductsByName = (req: Request, res: Response) => {
  const { name } = req.params;
  Product.find({ nameProduct: name.toLowerCase() })
    .then((product) => {
      if (product) return res.json(product);
      else res.status(404).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(400).end();
    });
};

export const createProduct = (req: Request, res: Response) => {
  const { nameProduct, stock, price } = req.body;
  const product = new Product({
    nameProduct: nameProduct,
    stock: stock,
    price: price,
  });

  product
    .save()
    .then(() => {
      res.send("El producto se creo correctamente");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updataProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const product = req.body;
  const newProductInfo = {
    nameProduct: product.name,
    stock: product.stock,
    price: product.price,
  };
  Product.findByIdAndUpdate(id, newProductInfo, { new: true })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
};

export const deleteProduct = (req: Request, res: Response) => {
  const { id } = req.body;
  Product.findByIdAndDelete(id)
    .then(() => {
      res.send(`El producto con la id ${id} fue eliminado`);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).end;
    });
};
