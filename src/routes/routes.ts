import { Router } from "express";

const router = Router();
import { getProducts } from "../controllers/products";

router.get("/products", getProducts);

export default router;
