import Hero from "@/components/home/hero"
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Attributes from "@/components/home/attributes";
import Image from "next/image";

export default function Home() {
    return (
        <main className="">
            <Navigation/>
            <Hero/>
            <Attributes/>
            <Footer/>
        </main>
    );
}
