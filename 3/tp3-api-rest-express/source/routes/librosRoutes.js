import express from "express";
import * as controller from "../controllers/librosController.js";

const router = express.Router();

router.get("/", controller.obtenerTodos);
router.get("/:id", controller.obtenerPorId);
router.post("/", controller.agregarLibro);
router.put("/:id", controller.actualizarLibro);
router.delete("/:id", controller.borrarLibro);

export { router };
