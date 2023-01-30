import { Router } from "express";

const router = Router();
import {
  getProducts,
  createProduct,
  getProductsByName,
  deleteProduct,
} from "../controllers/products";

import { newUser, getUsers } from "../controllers/users";

router.get("/products", getProducts);
router.get("/products/:name", getProductsByName);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);

router.get("/users", getUsers);
router.post("/users/create", newUser);

export default router;
