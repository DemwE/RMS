'use client'

import Header from "@/components/admin/header";
import Link from 'next/link';
import { PlayIcon, PlusIcon } from '@heroicons/react/24/solid';
import { GetPlayers } from "@/components/admin/dashboard/get/players";
import { useState, useEffect } from "react";

export function BlockPlayer({name, id}: {name: string, id: string}) {
    return (
        <Link href={`/rms-admin/player/${id}`}>
            <div className="border-slate-500 border-2 p-4 flex items-center rounded-lg max-h-20 hover:bg-gray-100 cursor-pointer">
                <h1 className="flex">
                    {id === "create" ? <PlusIcon className='h-6 w-6 mr-2'/> : <PlayIcon className='h-6 w-6 mr-2'/>}
                    {name}
                </h1>
            </div>
        </Link>
    );
}

export default function AdminPlayers() {
    const [players, setPlayers] = useState<{
        [x: string]: string; name: string; id: string 
}[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const playersData = await GetPlayers();
            // console.log(tournamentsData.tournaments)
            setPlayers(playersData.players);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <div className="h-[calc(90dvh-3rem)]">
                <h1 className="text-center">Players</h1>
                <div className="flex flex-col border-slate-500 border-2 p-4 rounded-lg h-full overflow-auto">
                    <div className="flex items-center justify-center mb-3 space-x-2">
                        <input
                            type="text"
                            placeholder="Search players..."
                            className="border border-gray-300 rounded-lg py-2 px-4 w-10/12"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                            <Link href="/rms-admin/player/create">Add New Player</Link>
                        </button>
                    </div>
                    <div className="flex space-x-4">
                        {players.map((player) => (
                            <BlockPlayer name={player.name} id={player._id} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
