import express from 'express';
import controller from './controller.js';

const Routes = express.Router();

// Ruta para insertar un actor
Routes.post('/actor', controller.handleInsertActorRequest);

// Ruta para obtener todos los actores
Routes.get('/actores', controller.handleGetActoresRequest);

// Ruta para obtener un actor por su _id
Routes.get('/actor/:id', controller.handleGetActorByIdRequest);

// Ruta para obtener actores por el id de la película
Routes.get('/actores/pelicula/:pelicula', controller.handleGetActoresByPeliculaIdRequest);

export default Routes
