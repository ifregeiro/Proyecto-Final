import { Router } from "express";
import * as controller from "../controllers/colecciones.controller.js";

const router = Router();

router.post("/", controller.crearColeccion);
router.get("/", controller.listarColecciones);
router.get("/:id", controller.obtenerColeccion);
router.put("/:id", controller.actualizarColeccion);
router.delete("/:id", controller.eliminarColeccion);

export default router;
