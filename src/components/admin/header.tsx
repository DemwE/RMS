import Link from 'next/link'
import {HomeIcon, UsersIcon, TableCellsIcon, WrenchScrewdriverIcon, ArrowLeftEndOnRectangleIcon} from "@heroicons/react/24/solid";

export default function Header({user}: string){
    return(
        <header>
            <nav className="p-8 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/rms-admin">RMS GAME</Link>
                </div>
                <div className='flex space-x-5'>
                    <Link href="/rms-admin/"className='flex'><HomeIcon className='h-6 w-6 mr-1'/>Home</Link>
                    <Link href="/rms-admin/players" className='flex'><UsersIcon className='h-6 w-6 mr-1'/>Players</Link>
                    <Link href="/rms-admin/tournaments" className='flex'><TableCellsIcon className='h-6 w-6 mr-1'/>Tournaments</Link>
                    <Link href="/rms-admin/settings" className='flex'><WrenchScrewdriverIcon className='h-6 w-6 mr-1'/>Settings</Link>
                </div>
                <div className='flex items-center space-x-2'>
                    <h3>{user}</h3>
                    <Link href="/api/auth/signout" className='flex bg-red-500 text-white p-3 px-6 rounded-md'>Sign Out<ArrowLeftEndOnRectangleIcon className='h-6 w-6 ml-1'/></Link>
                </div>
            </nav>
        </header>
    )
}