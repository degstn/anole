"use client"

import React from 'react';
import Image from 'next/image'
import Link from 'next/link';



export default function Page() {
      const logos = ['fpl.svg', 'tesla.svg', 'sunpower.svg', 'nxte.svg', 'vestas.svg'];
      


    return (
      <main className="flex min-h-screen flex-col justify-center">
        <div className="mx-6">
    <h1 className="text-6xl font-bold mb-0 mt-48 text-center">Open for you. <br /> Open for all.</h1>
            
            <div className="flex flex-col justify-start">
            <h2 className="text-3xl text-black font-semibold mt-10 mb-5 text-center">OSS</h2>
            <h2 className="text-2xl mx-72 text-center">Stelio was built around the idea that clean, renewable energy should be as accessible to users as for developers. Therefore, the source of Stelio is fully open source for contribution and reference.</h2>
            </div>
            <div className="flex justify-center">
              <picture>
                <Image
                    src="/oss1.png"
                    alt="Stelio Logo"
                    width={800}
                    height={800}
                />
              </picture>
            </div>
        </div>
    </main>
    )
}