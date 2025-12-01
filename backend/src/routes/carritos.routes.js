import { Router } from "express";
import {
  obtenerCarrito,
  agregarItem,
  quitarItem
} from "../controllers/carritos.controller.js";

const router = Router();

router.get("/", obtenerCarrito);        // GET /api/carrito
router.post("/item", agregarItem);      // POST /api/carrito/item
router.delete("/item/:itemId", quitarItem);

export default router;
