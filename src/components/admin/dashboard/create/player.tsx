'use client';
import {generateUUID} from "@/libs/uuid";
import axios from 'axios';

export default function Create_Tournament() {
    return (
        <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" id="name"
                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       required/>
            </div>
            <div className="mb-5">
                <label htmlFor="surname"
                       className="block mb-2 text-sm font-medium text-gray-900">Surname</label>
                <input type="text" id="surname"
                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       required/>
            </div>
            <div className="mb-5">
                <label htmlFor="email"
                       className="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
                <input type="email" id="email"
                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       required/>
            </div>
            <div className="mb-5">
                <label htmlFor="tournament_id" className="block mb-2 text-sm font-medium text-gray-900">Tournament
                    ID</label>
                <input type="text" id="tournament_id"
                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       required/>
            </div>
            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={handleSubmit}
            >Add new player
            </button>
        </form>
    );
}

function handleSubmit() {
    let player = {
        _id: generateUUID(),
        name: (document.getElementById("name") as HTMLInputElement).value,
        surname: (document.getElementById("surname") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        tournament_id: (document.getElementById("tournament_id") as HTMLInputElement).value
    }
    axios.post('/api/player/create', player)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
}