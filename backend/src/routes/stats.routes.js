import express from "express";
import statsController from "../controllers/stats.controller.js";

const router = express.Router();

router.get("/usuarios", statsController.usuariosTotales);
router.get("/ventas", statsController.totalVentas);
router.get("/top", statsController.topProductos);

export default router;
