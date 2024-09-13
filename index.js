import express, { urlencoded } from 'express'
import cors from 'cors'
import client from './src/common/dbconn.js'
import peliculaRoutes from './src/Pelicula/peliculaRoutes.js';
import actorRoutes from './src/Actor/actorRoutes.js'; // Importar las rutas de actores

const PORT = 3000 || 3001
const app = express()

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors())

app.all('/', (_req, res) => { return res.status(200).send('Bienvenido al Registro de Peliculas iplacex!') })

app.use('/api', peliculaRoutes);
app.use('/api', actorRoutes); // Rutas de actores

await client.connect()
.then(() =>{
    console.log(' Conectado al cluster ')
    app.listen(PORT, () => { console.log(`servidor corriendo en http:localhost:${PORT}`) })

})
.catch(() => {
    console.log(' Ha ocurrido un error al conectar al cluster de Atlas')
    

})

