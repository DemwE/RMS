'use client';
import { Tournament } from "@/libs/databaseUtils";
import { generateUUID } from "@/libs/uuid";

export default function Create_Tournament() {
    return (
        <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" id="name"
                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       placeholder="Tournament" required/>
            </div>
            <div className="mb-5">
                <label htmlFor="location"
                       className="block mb-2 text-sm font-medium text-gray-900">Location</label>
                <input type="text" id="location"
                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       required/>
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                <input type="date" id="date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
            </div>
            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={handleSubmit}
            >Add new tournament
            </button>
        </form>
    );
}

import axios from 'axios';

function handleSubmit() {
    let tournament = {
        _id: generateUUID(),
        name: (document.getElementById("name") as HTMLInputElement).value,
        location: (document.getElementById("location") as HTMLInputElement).value,
        date: (document.getElementById("date") as HTMLInputElement).value
    }
    axios.post('/api/tournament/create', tournament)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
}