import { options } from "@/app/api/auth/[...nextauth]/options"
import { getSession } from "next-auth/react"
import Home from '@/components/admin/dashboard/home'

export default async function Dashboard() {
  const session = await getSession(options)

  return (
    <>
      {session ? (
        <Home userName={session?.user?.name} />
      ) : (
        <h1 className="text-5xl">User not sign in</h1>
      )}
    </>
  )
}
