/**
 Creo este status para realizar preubas, a pesar de que el proyecto no lo pida
 */

import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ mensaje: 'API funcionando correctamente' });
});
  
export { router as statusRouter };