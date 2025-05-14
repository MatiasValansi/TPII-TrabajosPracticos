/**
 Modifico el requiere(...) por el import y el exports. por el export{} para que no me dé errores
 */

import { ok } from "node:assert";
import * as model from "../models/libroModel.js";
import { LibroJsonService } from "../service/LibroJsonService.js"

const obtenerTodos = async (req, res) => {
	try {
        const libros = await LibroJsonService.obtenerTodos(); // Espera a que la promesa se resuelva
        res.json(libros); // Devuelve el JSON con los libros
    } catch (error) {
        console.error("Error al obtener los libros:", error);
        res.status(500).json({ error: "Hubo un problema al obtener los libros" });
    }
}

const obtenerPorId = async (req, res) => {
	try {
		const libro = await LibroJsonService.obtenerPorId(Number.parseInt(req.params.id));
		res.json(libro)
			
	} catch (error) {
		res.status(404).json({ error: "Libro no encontrado" });
	}
	
};

const agregarLibro = async (req, res) => {
	try {
		const nuevoLibro = { ...req.body };
		console.log(nuevoLibro);
		
		const libroAgregado = await LibroJsonService.agregarLibro(nuevoLibro);

		console.log(libroAgregado);
		
		res.status(201).json(libroAgregado);		
	} catch (error) {
		res.status(404).json({ error: "No se pudo añadir el libro" });
	}
	
};

const actualizarLibro = async (req, res) => {
	
	const libroActualizado = await LibroJsonService.actualizarLibro(Number.parseInt(req.params.id), req.body.titulo, req.body.autor);
	
	if (!libroActualizado){
		res.status(404).json({
			payload: null,
			message: "No se pudo actualizar el libro",
			ok: false
		})
		return
	} 

	
	const nuevoLibroActualizado = libroActualizado.map((cadaLibro) => ({
		id: cadaLibro.id,
		titulo: cadaLibro.titulo
	}))
	
	res.status(200).json({
		message: "Libro Modificado",
		payload: nuevoLibroActualizado,
		ok: true
	})
	return
	
};

const borrarLibro = async(req, res) => {
	try {
		const libroEliminado = await LibroJsonService.borrarLibro(Number.parseInt(req.params.id));
		console.log(libroEliminado);

		res.json(libroEliminado);	
	} catch (error) {
		
	}	
};

export {
	obtenerTodos,
	obtenerPorId,
	agregarLibro,
	actualizarLibro,
	borrarLibro,
};
