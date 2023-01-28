import { Router } from "express";

const router = Router();
import {
  getProducts,
  createProduct,
  getProductsByName,
  deleteProduct,
} from "../controllers/products";

router.get("/products", getProducts);
router.get("/products/:name", getProductsByName);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);

export default router;
