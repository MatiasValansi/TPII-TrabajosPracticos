import express from "express";
import { config } from "./config/config.js";
import pkg from 'cors';
const cors = pkg;
import { router } from "./routes/librosRoutes.js";
import { statusRouter } from './routes/statusRoutes.js';


const app = express();

//Añado la capa Routes:
app.use('/status', statusRouter);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/libros', router);

app.listen(config.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${config.PORT}`);
});

/**
 * Prueba de que funcionan el servidor y el puerto
 */
app.get('/ping', (req, res) => {
    res.send('pong');
  });
  

/**
 NOTA:
 Añadir Persistencia en archivo usando fs para guardar libros en libros.json.

 Ya creé la carpeta DB, me falta crear el libros.json.
 Tengo que modificar para que los métodos HTTP guarden los cambios en el libros.json.
 Entiendo que para que esto funcione, debo crear la capa Repository con el JsonRepository para que se encargue de traer la info, escribirla y editarla en el .JSON.
 También podría delegar la lectura y escritura del JSON creando el JsonHandler.js en la carpeta Utils.
 */