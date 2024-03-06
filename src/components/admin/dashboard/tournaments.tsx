'use client'

import Header from "@/components/admin/header";
import Link from 'next/link';
import { ChartBarSquareIcon, PlusIcon } from '@heroicons/react/24/solid';
import { GetTournaments } from "@/components/admin/dashboard/get/tournaments";
import { useState, useEffect } from "react";

export function BlockTournament({name, id}: {name: string, id: string}) {
    return (
        <Link href={`/rms-admin/tournament/${id}`}>
            <div className="border-slate-500 border-2 p-4 flex items-center rounded-lg max-h-20 hover:bg-gray-100 cursor-pointer">
                <h1 className="flex">
                    {id === "create" ? <PlusIcon className='h-6 w-6 mr-2'/> : <ChartBarSquareIcon className='h-6 w-6 mr-2'/>}
                    {name}
                </h1>
            </div>
        </Link>
    );
}


export default function AdminTournaments() {
    const [tournaments, setTournaments] = useState<{
        [x: string]: string; name: string; id: string 
}[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const tournamentsData = await GetTournaments();
            // console.log(tournamentsData.tournaments)
            setTournaments(tournamentsData.tournaments);
        };

        fetchData();
    }, []);
  
    return (
        <div>
            <Header />
            <div className="h-[calc(90dvh-3rem)]">
                <h1 className="text-center">Tournaments</h1>
                <div className="flex border-slate-500 border-2 p-4 rounded-lg h-full space-x-4 overflow-auto">
                    {tournaments.map((tournament) => (
                        <BlockTournament name={tournament.name} id={tournament._id} />
                    ))}
                    <BlockTournament name="Add" id="create" />
                </div>
            </div>
        </div>
    );

  }
