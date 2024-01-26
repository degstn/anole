"use client"

import React from 'react';
import Image from 'next/image'
import Link from 'next/link';



export default function Page() {
      const logos = ['fpl.svg', 'tesla.svg', 'sunpower.svg', 'nxte.svg', 'vestas.svg'];
      


    return (
      <main className="flex min-h-screen flex-col justify-center">
        <div className="mx-6">
    <h1 className="text-6xl font-bold mb-11 mt-48 text-center">Open for you. <br /> Open for all.</h1>
            <p className="text-2xl text-gray-500 font-regular mt-0 text-center">
                Making the world a better place <br/> throhgb oss idfk i need help lmao
            </p>
            <div className="flex flex-col justify-start">
            <h2 className="text-3xl text-black font-semibold mt-10 mb-5 text-center">Our Purpose</h2>
            <h2 className="text-2xl mx-72 text-center">As energy is a touchy subject, Stelio is comitted to making energy provision as easy and accomplishable all with the click of a button.</h2>
            </div>
            <div className="flex justify-center">
              <picture>
                <Image
                    src="/oss1.png"
                    alt="Stelio Logo"
                    width={750}
                    height={750}
                />
              </picture>
            </div>
        </div>
        
        
    </main>
    )
}