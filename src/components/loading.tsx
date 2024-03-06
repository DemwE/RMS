// 'use client';
import Image from 'next/image';

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Image src="/circle.png" alt="logo" width={100} height={100} className="animate-spin animate-infinite"/>
        </div>
    )
}