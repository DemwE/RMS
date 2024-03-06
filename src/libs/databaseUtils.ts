import {MongoClient, ServerApiVersion} from "mongodb";

const MongoDB_Credentials = process.env.MONGODB_CREDENTIALS || "none";

function client() {
    return new MongoClient(MongoDB_Credentials, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
}

interface player {
    id: string,
    name: string,
    surname: string,
    email: string,
}

export async function createPlayer(player: player) {
    const clientInstance = client();
    try {
        await clientInstance.connect();
        const collection = clientInstance.db("rms").collection("players");
        const result = await collection.insertOne(player);
        console.log(`New player created with the following id: ${result.insertedId}`);
    } catch (error) {
        console.error(`Error occurred while inserting player: ${error}`);
    } finally {
        await clientInstance.close();
    }
}