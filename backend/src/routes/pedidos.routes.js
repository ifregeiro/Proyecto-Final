import { Router } from "express";
import * as controller from "../controllers/pedidos.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import verifyRole from "../middlewares/verifyRole.js";

const router = Router();

// Crear pedido — usuario autenticado
router.post("/", authMiddleware, controller.crearPedido);

// Listar pedidos — solo admin
router.get("/", authMiddleware, verifyRole("admin"), controller.listarPedidos);

// Obtener pedido por id — usuario autenticado (se recomienda validar dueño en el controller)
router.get("/:id", authMiddleware, controller.obtenerPedido);

// Actualizar estado — solo admin
router.put("/:id", authMiddleware, verifyRole("admin"), controller.actualizarEstado);

// Eliminar pedido — solo admin
router.delete("/:id", authMiddleware, verifyRole("admin"), controller.eliminarPedido);

export default router;
