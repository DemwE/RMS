import {createTournament} from "@/libs/databaseUtils";
import {ObjectId} from "mongodb";

interface Tournament {
    _id: ObjectId,
    name: string,
    date: string,
    location: string,
}

export async function POST(req: Request) {
    console.log("Request received at /api/tournament/create");
    const tournament = await req.json() as Tournament;
    try {
        await createTournament(tournament);
        console.log("Creating new tournament with the following data: ", tournament);
        return Response.json({message: 'Tournament created successfully with id: ' + tournament._id});
    } catch (error) {
        return Response.json({message: 'An error occurred while creating the tournament'});
    }
}