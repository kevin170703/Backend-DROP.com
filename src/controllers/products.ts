import Product from "../models/Product";
import { Request, Response } from "express";

export const getProducts = (req: Request, res: Response) => {
  Product.find({}).then((result) => res.json(result));
};
