'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import AdminSettings from '@/components/admin/dashboard/settings'

export default function ClientPage() {
  const { data: session, status } = useSession({
      required: true,
      onUnauthenticated() {
          redirect('/api/auth/signin?callbackUrl=/rms-admin/')
      }
  })
  if (status === "authenticated") {
    return (
      <AdminSettings user={session?.user?.name} />
    ) 
  }


}