import Header from "@/components/admin/header";
import Link from 'next/link';
import { ChartBarSquareIcon, PlusIcon } from '@heroicons/react/24/solid'; // Correct import statement

function BlockTournament({name, id}) {
    return (
        <Link href={`/rms-admin/tournament/${id}`}>
            <div className="border-slate-500 border-2 p-4 flex items-center rounded-lg max-h-20 hover:bg-gray-100 cursor-pointer">
                <h1 className="flex">
                    {id === "create" ? <PlusIcon className='h-6 w-6 ml-1'/> : <ChartBarSquareIcon className='h-6 w-6 ml-1'/>}
                    {name}
                </h1>
            </div>
        </Link>
    );
}

export default function AdminTournaments() {
    return (
        <div>
            <Header />
            <div className="h-[calc(90dvh-3rem)]">
                <h1 className="text-center">Tournaments</h1>
                <div className="flex border-slate-500 border-2 p-4 rounded-lg h-full space-x-4 overflow-auto">
                    <BlockTournament name="Tournament 1" id="tournament-1"/>
                    <BlockTournament name="Tournament 2" id="tournament-2"/>
                    <BlockTournament name="Tournament 3" id="tournament-3"/>
                    <BlockTournament name="Tournament 4" id="tournament-4"/>
                    <BlockTournament name="Add" id="create"/>
                </div>
            </div>
        </div>
    );
}
