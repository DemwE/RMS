'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import AdminTournaments from "@/components/admin/dashboard/tournaments";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/rms-admin/login")
    }, [user])

    if(user != null){
        return (
            <AdminTournaments />
        )
    }



}

export default Page;