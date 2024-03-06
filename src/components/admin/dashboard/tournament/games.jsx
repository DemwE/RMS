import Header from "@/components/admin/header";
import Link from 'next/link';
import { PlayIcon, PlusIcon } from '@heroicons/react/24/solid'; // Correct import statement

function BlockGame({name, id}) {
    return (
        <Link href={`/rms-admin/game/${id}`}>
            <div className="border-slate-500 border-2 p-4 flex items-center rounded-lg max-h-20 hover:bg-gray-100 cursor-pointer">
                <h1 className="flex">
                    {id === "create" ? <PlusIcon className='h-6 w-6 ml-1'/> : <PlayIcon className='h-6 w-6 ml-1'/>}
                    {name}
                </h1>
            </div>
        </Link>
    );
}

export default function AdminGames({id}) {
    return (
        <div>
            <Header />
            <div className="h-[calc(90dvh-3rem)]">
                <h1 className="text-center">Games on Tournament ({id})</h1>
                <div className="flex border-slate-500 border-2 p-4 rounded-lg h-full space-x-4 overflow-auto">
                    <BlockGame name="Game 1" id="game-1"/>
                    <BlockGame name="Game 2" id="game-2"/>
                    <BlockGame name="Game 3" id="game-3"/>
                    <BlockGame name="Game 4" id="game-4"/>
                    <BlockGame name="Add" id="create"/>
                </div>
            </div>
        </div>
    );
}
