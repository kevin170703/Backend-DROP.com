import { Router } from "express";
const router = Router();

import { newUser, getUsers } from "../controllers/users";
import { login } from "../controllers/login";
import { postFile, getFile } from "../controllers/images";

// rutas de imagenes
router.get("/files/:id", getFile);
router.post("/upload", postFile);

// // rutas de usuarios
router.get("/users", getUsers);
router.post("/users/create", newUser);

// rutas de inicio de sesion
router.post("/login", login);

export default router;
