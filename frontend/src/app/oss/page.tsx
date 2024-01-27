"use client"

import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

export default function Page() {
          
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
            <h2 className="text-3xl text-black font-semibold mt-10 text-start">Featured Research</h2>
            <div className="mt-2 mb-20">
                <Link href={`/careers/open-roles`}>
                    <span className="underline">View all research</span>
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-10 justify-center text-center pb-10">
            <p className="border-2 border-black py-60">featuredContent_01</p>
            <p className="border-2 border-black py-60">featuredContent_02</p>
            <p className="border-2 border-black py-60">featuredContent_03</p>
            <p className="border-2 border-black py-60">featuredContent_04</p>
            </div>
            <hr className="border-black"/>
            <div className="lg:py-10">
                <div className="mx-6 flex flex-col items-center justify-center">
                    <div className="text-5xl font-semibold mt-2 mb-4">
                        Join us in making energy easier.
                    </div>
                    {/* <div className="text-2xl font-semibold mt-2">
                        Coming soon.
                    </div> */}
                    <div className="w-40"> {/* Set the width of the container */}
                        <a
                            href="/careers/open-roles"
                            className="inline-block border border-black text-black px-4 py-2 mt-4 rounded-lg"
                        >
                            Apply now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}