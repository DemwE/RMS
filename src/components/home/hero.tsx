import Image from 'next/image'

export default function hero() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 mx-4">
            <div className="flex justify-center items-center max-md:order-last">
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
                <Image src="/home/stars.png" alt="stars" width="500" height="500" priority={true}/>
            </div>
        </section>
    )
}