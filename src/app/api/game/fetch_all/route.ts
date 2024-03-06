import {fetchAllGames} from "@/libs/databaseUtils";

export async function POST() {
    console.log("Request received at /api/game/fetch_all");
    try {
        const games = await fetchAllGames();
        return Response.json({games: games});
    } catch (error) {
        return Response.json({message: 'An error occurred while fetching the games'});
    }
}