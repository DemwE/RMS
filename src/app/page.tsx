import Hero from "@/components/home/hero"
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Attributes from "@/components/home/attributes";

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
