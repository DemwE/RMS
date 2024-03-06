'use client'
import React from "react";
import signIn from "@/fireauthdb/auth/signin";
// import LoginForm from "@/components/admin/login-form";
import { useRouter } from 'next/navigation'
import {AtSymbolIcon, KeyIcon} from "@heroicons/react/24/outline";
import {ArrowRightIcon} from "@heroicons/react/20/solid";

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/rms-admin")
    }
    return (
        <main className='flex items-center justify-center md:h-screen'>
            <div className='relative mx-auto flex w-full max-w[400px] flex-coll space-y-2.5 p-4 md:h-[500px] md:-mt-32'>
                <div className='flex h-20 w-full justify-center items-center rounded-lg bg-blue-500 p-3 md:h-full'>
                    <form className="space-y-3" onSubmit={handleForm}>
                        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                            <h1 className={`mb-3 text-2xl`}>
                                Please log in to continue
                            </h1>
                            <div className="w-full">
                                <div>
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="username"
                                            type="email"
                                            name="username"
                                            placeholder="Enter your email address"
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <AtSymbolIcon
                                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="password"
                                            type="password"
                                            name="password"
                                            placeholder="Enter password"
                                            required
                                            minLength={6}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <KeyIcon
                                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-4 w-full">
                                <p className='inline-block'>Log in&nbsp;</p>
                                <ArrowRightIcon className="inline-block ml-auto h-5 w-5 text-black"/>
                            </button>
                            <div
                                className="flex h-8 items-end space-x-1"
                                aria-live="polite"
                                aria-atomic="true"
                            >
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Page;