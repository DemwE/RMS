import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div
                className="w-full mx-auto max-w-screen-xl p-4 flex max-md:flex-col items-center justify-between max-md:space-y-2">
                <span className="text-sm text-gray-500 sm:text-center">&copy; 2024 RMS. All Rights Reserved
                </span>
                <ul className="flex flex-wrap justify-center items-center text-sm font-medium text-gray-500 space-x-4">
                    <li>
                        <a href="https://youtu.be/dQw4w9WgXcQ?si=JobY9R2YdxV592vF" target="_blank"
                           className="text-gray-400 hover:text-gray-500">
                            <Image src="/icons/youtube.svg" alt="youtube" width="24" height="24"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/DemwE/RMS" target="_blank"
                           className="text-gray-400 hover:text-gray-500">
                            <Image src="/icons/github.svg" alt="github" width="24" height="24"/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}