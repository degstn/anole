"use client"

import Image from 'next/image'
import { useRef } from 'react';

export default function Page() {
    const overviewRef = useRef<HTMLDivElement>(null);

    const scrollToOverview = () => {
        overviewRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="flex min-h-screen flex-col items-stretch justify-between">
            <div className="bg-white py-40 lg:py-28">
                <div className='flex justify-end px-6 lg:px-0'>

            <picture className="border border-zinc-400 rounded-md">
                            <Image
                                src="/g1f.png"
                                alt="Stelio Logo"
                                width={600}
                                height={600}
                            />
                        </picture>
                        </div>
                <div className="mx-6">
                    <div className="flex gap-5">
                    
                    <h1 className="text-5xl font-medium text-black mb-3">Stelio Enterprise</h1>
                    </div>
                    <div>
                        <p className="text-2xl text-black font-medium mt-0">
                            Stelio Enterprise is on a first come first serve basis. <br/> Get notified when it's available.
                        </p>
                    </div>

                    <a
                        href="/enterprise/getnotified"
                        className="inline-block border border-black text-black px-4 py-2 mt-4 rounded-lg"
                    >
                        Get notified
                    </a>

                    <a
                        href="#"
                        onClick={scrollToOverview}
                        className="hover:underline text-black ml-4"
                    >
                        Overview
                        <span className="no-underline" style={{ textDecoration: 'none' }}>&#8595;</span>
                    </a>
                </div>
            </div>

            <div ref={overviewRef} id="overview" className="bg-lime-50 lg:py-28">
                <div className="mx-6">
                    <div className="text-5xl font-regular mb-6 mt-96">
                        <picture>
                            <Image
                                src="/sp.svg"
                                alt="Stelio Logo"
                                width={250}
                                height={100}
                            />
                        </picture>
                    </div>
                    <p className="text-2xl font-semibold mt-2">
                        Coming soon.
                    </p>
                </div>
            </div>   
            <div className="bg-white lg:py-10">
                <div className="mx-6 mt-14 flex flex-col items-center justify-center">
                    <div className="text-5xl font-semibold mt-2 mb-4">
                        Get started with Stelio.
                    </div>
                    {/* <div className="text-2xl font-semibold mt-2">
                        Coming soon.
                    </div> */}
                    <div className="w-40"> {/* Set the width of the container */}
                        <a
                            href="/getstarted"
                            className="inline-block border border-black text-black px-4 py-2 mt-10 mb-14 rounded-lg"
                        >
                            Get started
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}