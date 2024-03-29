'use client';
import {useAuthContext} from "@/context/AuthContext";
import {useRouter} from "next/navigation";
import Header from "@/components/admin/header";
import Create_Player from "@/components/admin/dashboard/create/player";
import Footer from "@/components/footer";
import React from "react";

export default function Page() {
    const {user} = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/rms-admin/login")
    }, [user])

    if (user != null) {
        return (
            <main className="min-h-dvh space-y-14">
                <Header/>
                <Create_Player/>
                <Footer/>
            </main>
        );
    }
}