'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import AdminSettings from "../../../components/admin/dashboard/settings";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/rms-admin/login")
    }, [user])

    if(user != null){
        return (
            <AdminSettings/>
        )
    }



}

export default Page;