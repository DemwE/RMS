import "@/app/main.css";

import LoginForm from "@/components/admin/login-form";
import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
  } from "next"
  import { getCsrfToken } from "next-auth/react"
  
  export default function SignIn({
    csrfToken,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log()
    return (
        <main className='flex items-center justify-center md:h-screen'>
          <div className='relative mx-auto flex w-full max-w[400px] flex-coll space-y-2.5 p-4 md:h-[500px] md:-mt-32'>
            <div className='flex h-20 w-full justify-center items-center rounded-lg bg-blue-500 p-3 md:h-full'>
              <LoginForm token={csrfToken} />
            </div>
          </div>
        </main>
      )
  }
  
  export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
      props: {
        csrfToken: await getCsrfToken(context),
      },
    }
  }