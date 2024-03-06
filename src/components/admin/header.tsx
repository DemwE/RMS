import Link from 'next/link'
import {
    HomeIcon,
    UsersIcon,
    TableCellsIcon,
    WrenchScrewdriverIcon,
    ArrowLeftEndOnRectangleIcon
} from "@heroicons/react/24/solid";
import React, {useState} from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white w-fullborder-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/circle.png" className="h-8" alt="Flowbite Logo"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">RMS</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button"
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center">
                        Sign Out<ArrowLeftEndOnRectangleIcon className='h-6 w-6 ml-1'/>
                    </button>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center z-10 justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? '' : 'hidden'}`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white max-md:absolute max-md:right-0 max-md:w-full">
                        <SubPageLink link="/rms-admin" icon={<HomeIcon className="h-6 w-6 mr-1"/>} name="Home"/>
                        <SubPageLink link="/rms-admin/players" icon={<UsersIcon className='h-6 w-6 mr-1'/>} name="Players"/>
                        <SubPageLink link="/rms-admin/tournaments" icon={<TableCellsIcon className='h-6 w-6 mr-1'/>} name="Tournaments"/>
                        <SubPageLink link="/rms-admin/settings" icon={<WrenchScrewdriverIcon className='h-6 w-6 mr-1'/>} name="Settings"/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

interface SubPageLinkProps {
    link: string;
    icon: JSX.Element;
    name: string;
}

function SubPageLink({link, icon, name}: SubPageLinkProps) {
    return (
        <li>
            <Link href={link}
                  className="flex py-2 px-3 text-black bg-black rounded font-normal md:bg-transparent md:text-black md:p-0"
                  aria-current="page">{icon}{name}</Link>
        </li>
    )
}