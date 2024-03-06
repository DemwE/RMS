'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Home from '@/components/admin/dashboard/home'

export default function ClientPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/rms-admin/dashboard')
        }
    })

    return (
        <section className="flex flex-col gap-6">
            <Home user={session?.user?.name} />
            <li><Link href="/api/auth/signout">Sign Out</Link></li>
        </section>
    )
}