import { Libro } from "../model/Libro.js"
import { JsonHandler } from "../utils/JsonHandler.js"

export class JsonRepository{
    
    async obtenerTodos(){
        return await JsonHandler.read()
    }

    async obtenerPorId(id){
        const libros = await JsonHandler.read()
       
        if (!libros) return null

        const libroHallado = libros.find((cadaLibro) => cadaLibro.id === id)
        
        if(!libroHallado) return null

        return libroHallado
    }

    async agregarLibro(libroAAgregar){
        const libros = await JsonHandler.read()

        if (!libros) return null

        //Verifico si el libro a agregar ya existe
        const libroYaExiste = libros.find((cadaLibro) => cadaLibro.id === libroAAgregar.id)

        if(!libroYaExiste){
            libros.push(libroAAgregar)

            try {
                await JsonHandler.write(libros)
            } catch (error) {
                console.error({message: e.message});
                
            }
        }


    }

    async actualizarLibro(id, titulo, autor){
        const libros = await JsonHandler.read()

        if (!libros) return null

        //Busco que exista el libro a actualizar, es como el Ticket Response
        const existeLibroAActualizar = libros.filter(
            (cadaLibro) => cadaLibro.id == id
        )

        if(!existeLibroAActualizar) return null

        const librosSinActualizar = libros.filter((cadaLibro) => cadaLibro.id != id);
        
        //Actualizo los datos del libro buscado usando MAP
        const libroActualizado  = existeLibroAActualizar.map((cadaLibro) => ({
            ...cadaLibro,
            titulo: titulo,
            autor: autor
        }))
        
        try {
            await JsonHandler.write([...librosSinActualizar, ...libroActualizado])
            return libroActualizado
        } catch (error) {
            return null
        }
        
    }

    async borrarLibro(idLibroABorrar){
        const libros = await JsonHandler.read()

        if (!libros) return null

        //Verifico si existe el id del libro a borrar
        const existeLibroABorrar = libros.find( (cadaLibro) => cadaLibro.id === idLibroABorrar)
        
        

        if(!existeLibroABorrar) return;

        //Filtraré una lista de libros con aquellos libros que tienen ID diferente al que voy a eliminar. De esta manera, me aseguro de tener una nueva lista en la que estarán todos los libros excepto el libro con el ID que será eliminado.
        const librosSinElEliminado = libros.filter( (cadaLibro) => cadaLibro.id !== idLibroABorrar)

        try {
            await JsonHandler.write(librosSinElEliminado)
            
            return existeLibroABorrar
        } catch (error) {
            return null
        }


    }
}