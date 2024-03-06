import Header from "@/components/admin/header";
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/solid'; // Correct import statement

function BlockPlayer({name, id}) {
    return (
        <Link href={`/rms-admin/player/${id}`}>
            <div className="border-slate-500 border-2 p-4 flex items-center rounded-lg max-h-20 hover:bg-gray-100 cursor-pointer">
                <h1 className="flex">
                    <UserIcon className='h-6 w-6 ml-1'/>
                    {name}
                </h1>
            </div>
        </Link>
    );
}

export default function AdminPlayers() {
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
                            Add New Player
                        </button>
                    </div>
                    <div className="flex space-x-4">
                        <BlockPlayer name="Player 1" id="player-1" />
                        <BlockPlayer name="Player 2" id="player-2" />
                        <BlockPlayer name="Player 3" id="player-3" />
                        <BlockPlayer name="Player 4" id="player-4" />
                    </div>

                </div>
            </div>
        </div>
    );
}
