import {fetchAllPlayers} from "@/libs/databaseUtils";

export async function POST() {
    console.log("Request received at /api/player/fetch_all");
    try {
        const players = await fetchAllPlayers();
        return Response.json({players: players});
    } catch (error) {
        return Response.json({message: 'An error occurred while fetching the players'});
    }
}