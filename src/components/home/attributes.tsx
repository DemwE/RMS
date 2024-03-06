import Image from 'next/image'
import money from './icons/money.svg'
import bulb from './icons/bulb.svg'
import bolt from './icons/bolt.svg'

export default function Attributes() {
    return (
        <section className="my-16 space-y-14">
            <h2 className="text-5xl text-center tracking-wide">Our Attributes</h2>
            <div className="grid md:grid-cols-3 items-center justify-items-center max-md:space-y-8">
                <Attribute image={money} title="Free"
                           description="No cost involved. This service is completely free and accessible to everyone."/>
                <Attribute image={bulb} title="Easy"
                           description="Simple to use. Our user-friendly interface ensures a smooth experience."/>
                <Attribute image={bolt} title="Fast"
                           description="Quick response times. We guarantee fast and efficient service."/>
            </div>
        </section>
    )
}

function Attribute({image, title, description}: { image: string, title: string, description: string }) {
    return (
        <div className="max-w-64 mx-4 max-md:text-center space-y-3">
            <div className="flex flex-row items-center space-x-3 max-md:justify-center">
                <Image src={image} alt={title} height={28} priority={true}/>
                <h2 className="text-3xl">{title}</h2>
            </div>
            <p>{description}</p>
        </div>
    )
}