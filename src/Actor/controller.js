import { ObjectId } from 'mongodb';
import client from '../common/dbconn.js';
import {Actor} from './actor.js'; 
const actorCollection = client.db('cine-db').collection('actores');

async function handleInsertActorRequest(req, res) {
  let data = req.body
  let actor = Actor 

  actor._id = data._id 
  actor.idPelicula =  data.idPelicula
  actor.nombre = data.nombre
  actor.edad = data.edad
  actor.estaRetirado = data.estaRetirado
  actor.premios = data.premios

  
    await actorCollection.insertOne(actor)
    .then((data) => {
      if(data === null) return res.status(400).send('Error al guardar registro')

        return res.status(201).send(data)
    })
    .catch((e) => {return res.status(500).send({error: e}) })    
}

async function handleGetActoresRequest(req, res) {
  try {
    const data = await actorCollection.find({}).toArray();
    return res.status(200).send(data);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
}

async function handleGetActorByIdRequest(req, res) {
  let id = req.params.id;

  try {
    let oid = ObjectId.createFromHexString(id);
    const data = await actorCollection.findOne({ _id: oid });
    if (data === null) return res.status(404).send('Actor no encontrado');
    return res.status(200).send(data);
  } catch (e) {
    return res.status(400).send('Id mal formado');
  }
}

async function handleGetActoresByPeliculaIdRequest(req, res) {
  let pelicula = req.params.pelicula;

  try {
    const data = await actorCollection.find({ idPelicula: pelicula }).toArray();
    return res.status(200).send(data);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
}

export default {
  handleInsertActorRequest,
  handleGetActoresRequest,
  handleGetActorByIdRequest,
  handleGetActoresByPeliculaIdRequest
};
