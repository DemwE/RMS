'use client';
import Header from "@/components/admin/header";
import Create_Player from "@/components/admin/dashboard/create/player";
import Footer from "@/components/footer";

export default function Page() {
    return (
        <main className="min-h-dvh space-y-14">
            <Header/>
            <Create_Player/>
            <Footer/>
        </main>
    );
}