"use client"

import { useRef } from 'react';

export default function Page() {

    return (
        <main className="flex flex-col min-h-screen items-center justify-center">
                <div className='flex flex-col px-6 lg:px-0'>
                <p className="text-md font-medium text-neutral-600">Enter Email</p>
                  <input className=" h-10 pl-5 bg-neutral-100 shadow-none focus:border-green-500 rounded-sm">
                </input>
                </div>
        </main>
    )
}