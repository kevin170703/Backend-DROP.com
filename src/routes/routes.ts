import { Router } from "express";
const router = Router();
import {
  getProducts,
  createProduct,
  getProductsByName,
  deleteProduct,
  getProductsByIdUser,
} from "../controllers/products";
import { newUser, getUsers } from "../controllers/users";
import { login } from "../controllers/login";

// rutas de productos
router.get("/products", getProducts);
router.get("/products/:name", getProductsByName);
router.get("/productsByIdUser/:id", getProductsByIdUser);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);

// rutas de usuarios
router.get("/users", getUsers);
router.post("/users/create", newUser);

// rutas de inicio de sesion
router.post("/login", login);

export default router;
