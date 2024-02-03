"use client"

import React from 'react';
import Image from 'next/image'



export default function Page() {
      


    return (
      <main className="flex min-h-screen flex-col  justify-normal">
        <div className="mx-6">
    <h1 className="text-6xl font-bold mb-11 mt-48 text-center">Meet how users <br /> experience Stelio.</h1>
            <p className="text-2xl text-gray-500 font-regular mt-0 text-center">
                Building a cleaner world through the all-purpose site <br/> of energy initiatives, one step at a time.
            </p>
        <div className="text-center mt-10 mb-16">
            <a href="/careers/open-roles"
            className="inline-block text-white bg-black px-4 py-2 mx-2 rounded-lg"
        >
            View open roles
        </a>
        <a href="#"
           className="inline-block border border-black text-black px-4 py-2 mx-2 rounded-lg"
        >
            Learn more
        </a>
        </div>        
        
        </div>
        
    </main>
    )
}