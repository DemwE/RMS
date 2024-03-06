'use client';
import Header from "@/components/admin/header";
import {GetDevTournaments} from "@/components/admin/dashboard/get/tournaments";
import Footer from "@/components/footer";
import { ReactNode } from 'react';

export default function Page() {
    return (
        <main className="min-h-dvh space-y-14">
            <Header/>
            {GetDevTournaments() as ReactNode}
            <Footer/>
        </main>
    );
}