"use client"

import { useRef } from 'react';

export default function Page() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
                <div className='flex justify-end px-6 lg:px-0'>
                <p className="text-md font-medium text-neutral-600">Enter Email</p>
                  <input className="min-w-full h-10 pl-5 bg-neutral-100 shadow-none focus:border-green-500 rounded-sm">
                    </input>
                </div>
        </main>
    )
}