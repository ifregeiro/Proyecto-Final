import { Router } from "express";
import controller from "../controllers/pedidos.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import verifyRole from "../middlewares/verifyRole.js";

const router = Router();

// Crear pedido (usuario autenticado)
router.post("/", authMiddleware, controller.crear);

// Listar pedidos (admin ve todos, usuario ve solo los suyos)
router.get("/", authMiddleware, controller.listar);

// Obtener pedido por ID (validación de dueño dentro del controller)
router.get("/:id", authMiddleware, controller.obtener);

// Cambiar estado del pedido (solo admin)
router.put("/:id", authMiddleware, verifyRole("admin"), controller.actualizarEstado);

// Eliminar pedido (solo admin)
router.delete("/:id", authMiddleware, verifyRole("admin"), controller.eliminar);

export default router;
