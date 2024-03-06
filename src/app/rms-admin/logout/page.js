'use client'
import signOutUser from "@/fireauthdb/auth/signout";
import {useRouter} from "next/navigation";

function Page() {
    const router = useRouter()
    const handleForm = async () => {

        const { result, error } = await signOutUser();

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/")
    }
    handleForm().then(r => console.log(r))
}
export default Page;