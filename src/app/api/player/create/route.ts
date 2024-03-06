import {createPlayer} from "@/libs/databaseUtils";
import {Player} from "@/libs/databaseUtils";

export async function POST(req: Request) {
    console.log("Request received at /api/player/create");
    const player = await req.json() as Player;
    try {
        await createPlayer(player);
        console.log("Creating new player with the following data: ", player);
        return Response.json({message: 'Player created successfully with id: ' + player._id});
    } catch (error) {
        return Response.json({message: 'An error occurred while creating the player'});
    }
}