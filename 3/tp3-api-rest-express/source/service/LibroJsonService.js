import { Libro } from "../model/Libro.js"
import { agregarLibro, borrarLibro, obtenerPorId } from "../models/libroModel.js";
//import { obtenerTodos } from "../models/libroModel.js"
import { JsonRepository } from "../repository/JsonRepository.js"

const libroJsonRep = new JsonRepository(Libro)

export const LibroJsonService = {

    async obtenerTodos(){
        const libros  = await libroJsonRep.obtenerTodos();
        console.log(libros);
        
        return libros
    },

    async obtenerPorId(id){
        const libroHallado = await libroJsonRep.obtenerPorId(id)
        return libroHallado
    },

    async agregarLibro(libro){

        const libroAAgregar = {
            ...libro
        }

        const modeloLibro = new Libro(libroAAgregar.id, libroAAgregar.titulo, libro.autor, libroAAgregar.año)

        await libroJsonRep.agregarLibro(modeloLibro)

        return modeloLibro
    },

    async actualizarLibro(id, titulo, autor) {
        const libroActualizado = await libroJsonRep.actualizarLibro(id, titulo, autor)
        return libroActualizado
    },

    async borrarLibro(idLibroABorrar){
        const libroEliminado = await libroJsonRep.borrarLibro(idLibroABorrar)
        
        return libroEliminado
    }

}