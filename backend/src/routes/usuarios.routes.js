import { Router } from "express";
import * as controller from "../controllers/usuarios.controller.js";

const router = Router();

// CRUD usuarios
router.post("/", controller.crearUsuario);
router.get("/", controller.listarUsuarios);
router.get("/:id", controller.obtenerUsuario);
router.put("/:id", controller.actualizarUsuario);
router.delete("/:id", controller.eliminarUsuario);

export default router;
