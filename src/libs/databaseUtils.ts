import {MongoClient, ServerApiVersion, Document} from "mongodb";

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

interface Player {
    id: string,
    name: string,
    surname: string,
    email?: string,
    tournament_id: string,
}

export async function createPlayer(player: Player) {
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

export async function fetchAllPlayers(): Promise<Document[]> {
    const clientInstance = client();
    try {
        await clientInstance.connect();
        const collection = clientInstance.db("rms").collection("players");
        return await collection.find({}).toArray();
    } catch (error) {
        console.error(`Error occurred while fetching players: ${error}`);
        return Promise.reject(error);
    } finally {
        await clientInstance.close();
    }
}

interface Tournament {
    id: string,
    players_ids: string[],
    games_ids: string[],
    name: string,
    date: string,
    location: string,
}

export async function createTournament(tournament: Tournament) {
    const clientInstance = client();
    try {
        await clientInstance.connect();
        const collection = clientInstance.db("rms").collection("tournaments");
        const result = await collection.insertOne(tournament);
        console.log(`New tournament created with the following id: ${result.insertedId}`);
    } catch (error) {
        console.error(`Error occurred while inserting tournament: ${error}`);
    } finally {
        await clientInstance.close();
    }
}

export async function fetchAllTournaments(): Promise<Document[]> {
    const clientInstance = client();
    try {
        await clientInstance.connect();
        const collection = clientInstance.db("rms").collection("tournaments");
        return await collection.find({}).toArray();
    } catch (error) {
        console.error(`Error occurred while fetching tournaments: ${error}`);
        return Promise.reject(error);
    } finally {
        await clientInstance.close();
    }
}

interface Game {
    id: string,
    tournament_id: string,
    players_ids: string[],
    winner_id: string,
}

export async function createGame(game: Game) {
    const clientInstance = client();
    try {
        await clientInstance.connect();
        const collection = clientInstance.db("rms").collection("games");
        const result = await collection.insertOne(game);
        console.log(`New game created with the following id: ${result.insertedId}`);
    } catch (error) {
        console.error(`Error occurred while inserting game: ${error}`);
    } finally {
        await clientInstance.close();
    }
}

export async function fetchAllGames(): Promise<Document[]> {
    const clientInstance = client();
    try {
        await clientInstance.connect();
        const collection = clientInstance.db("rms").collection("games");
        return await collection.find({}).toArray();
    } catch (error) {
        console.error(`Error occurred while fetching games: ${error}`);
        return Promise.reject(error);
    } finally {
        await clientInstance.close();
    }
}