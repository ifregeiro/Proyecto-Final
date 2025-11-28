import { Router } from "express";
import * as controller from "../controllers/patrones.controller.js";

const router = Router();

router.post("/", controller.crearPatron);
router.get("/", controller.listarPatrones);
router.get("/:id", controller.obtenerPatron);
router.put("/:id", controller.actualizarPatron);
router.delete("/:id", controller.eliminarPatron);

export default router;
