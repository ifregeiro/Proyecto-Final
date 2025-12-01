import { Router } from "express";
import controller from "../controllers/colecciones.controller.js";

const router = Router();

router.post("/", controller.crear);
router.get("/", controller.listar);
// OPCIONAL → agregar después
// router.get("/:id", controller.obtener);
// router.put("/:id", controller.actualizar);
// router.delete("/:id", controller.eliminar);

export default router;
