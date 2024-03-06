'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import AdminTournaments from '@/components/admin/dashboard/tournaments'

export default function ClientPage() {
  const { data: session, status } = useSession({
      required: true,
      onUnauthenticated() {
          redirect('/api/auth/signin?callbackUrl=/rms-admin/')
      }
  })
  if (status === "authenticated") {
    return (
      <AdminTournaments user={session?.user?.name} />
    ) 
  }


}