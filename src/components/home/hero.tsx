import Image from 'next/image'

export default function hero() {
    return (
        <section className="h-dvh grid grid-cols-2">
            <div className="flex justify-center items-center">
                <div className="space-y-4 max-w-72">
                    <h1 className="text-6xl">RMS</h1>
                    <p>Your system for management rankings and players for tournaments</p>
                    <div>
                        <a href="">
                            <button
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Check
                                More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="animate-fade-left animate-once">
                    <Image src="/home/stars.png" alt="stars" width="500" height="500"/>
                </div>
            </div>
        </section>
    )
}