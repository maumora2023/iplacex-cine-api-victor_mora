import { MongoClient, ServerApiVersion } from "mongodb"

const url = 'mongodb+srv://ev3_express:yfyhVodZjSeNaGpa@cluster-express.04bjj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-express'


const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
   
});

export default client
