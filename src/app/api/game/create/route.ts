import {createGame} from "@/libs/databaseUtils";
import {ObjectId} from "mongodb";

interface Game {
    _id: ObjectId,
    tournament_id: string,
    players_ids: string[],
    winner_id: string,
}

export async function POST(req: Request) {
    console.log("Request received at /api/game/create");
    const game = await req.json() as Game;
    try {
        await createGame(game);
        console.log("Creating new game with the following data: ", game);
        return Response.json({message: 'Game created successfully with id: ' + game._id});
    } catch (error) {
        return Response.json({message: 'An error occurred while creating the game'});
    }
}