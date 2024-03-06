import {fetchAllTournaments} from "@/libs/databaseUtils";

export async function POST() {
    console.log("Request received at /api/tournament/fetch_all");
    try {
        const tournaments = await fetchAllTournaments();
        return Response.json({tournaments: tournaments});
    } catch (error) {
        return Response.json({message: 'An error occurred while fetching the tournaments'});
    }
}