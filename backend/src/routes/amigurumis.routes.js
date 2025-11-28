import { Router } from "express";
import * as controller from "../controllers/amigurumis.controller.js";

const router = Router();

router.post("/", controller.crearAmigurumi);
router.get("/", controller.listarAmigurumis);
router.get("/:id", controller.obtenerAmigurumi);
router.put("/:id", controller.actualizarAmigurumi);
router.delete("/:id", controller.eliminarAmigurumi);

export default router;
