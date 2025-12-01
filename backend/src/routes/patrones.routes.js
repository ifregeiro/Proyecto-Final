import { Router } from "express";
import controller from "../controllers/patrones.controller.js";

const router = Router();

router.post("/", controller.crear);
router.get("/", controller.listar);
router.get("/:id", controller.obtener);
// router.put("/:id", controller.actualizar);
// router.delete("/:id", controller.eliminar);

export default router;
