'use client';
import Header from "@/components/admin/header";
import Create_Tournament from "@/components/admin/dashboard/create/tournament";
import Footer from "@/components/footer";

export default function Page() {
    return (
        <main className="min-h-dvh space-y-14">
            <Header/>
            <Create_Tournament/>
            <Footer/>
        </main>
    );
}