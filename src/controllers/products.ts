import { Product } from "../models/Product";
import { User } from "../models/User";
import { Request, Response } from "express";

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const product = await Product.findAll();

    if (!product.length)
      return res.json({ msj: "La base de datos se ecuentra vacia" });

    return res.json(product);
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
};

export const getProductsByIdUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await Product.findAll({
      where: {
        user: id,
      },
    });

    if (!product.length)
      return res.json({ msj: "El usuario no cuenta con datos aun" });

    return res.json(product);
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
};

export const getProductsByName = async (req: Request, res: Response) => {
  const { name } = req.params;
  try {
    const product = await Product.findOne({
      where: {
        nameProduct: name.toLowerCase(),
      },
    });

    if (!product)
      res.status(404).send({
        error: "El nombre de el producto introducido es incorrecto",
      });

    return res.json(product);
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { nameProduct, stock, price, userId } = req.body;
    const user = await User.findByPk(userId);

    if (!user) return res.status(404).send({ error: "El usuario no existe" });

    await Product.create({
      nameProduct,
      stock,
      price,
      user: user.id,
    });

    res.send("El producto se creo correctamente");
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
};

export const updataProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, stock, price } = req.body;
  const newProductInfo = {
    nameProduct: name,
    stock: stock,
    price: price,
  };
  try {
    const product = Product.update(newProductInfo, {
      where: {
        id: id,
      },
    });

    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Product.destroy({
      where: {
        id: id,
      },
    });
    res.send(`El producto con la id ${id} fue eliminado correctamente`);
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
};
