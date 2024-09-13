import express from 'express'
import controller from './controller.js'


const Routes = express.Router()

Routes.post('/pelicula', controller.handleInsertPeliculaRequest)

Routes.get('/peliculas', controller.handleGetPeliculasRequest)

Routes.get('/pelicula/:id', controller.handleGetPeliculaRequest)

Routes.put('/pelicula/:id', controller.handleUpdatePeliculaRequest)

Routes.delete('/pelicula/:id', controller.handleDeletePeliculaRequest)

Routes.post('/pelicula/search', controller.handleSearchPeliculaRequest)

export default Routes

