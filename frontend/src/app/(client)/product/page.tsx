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
            <div className="bg-green-900 py-40 lg:py-28">
                <div className='flex justify-end px-6 lg:px-0'>

            <picture>
                            <Image
                                src="/g1f.png"
                                alt="Stelio Logo"
                                width={600}
                                height={600}
                            />
                        </picture>
                        </div>
                <div className="mx-6">
                    <div className="text-5xl font-regular mt-40 lg:mt-0 mb-6 min-h-fit">
                        <picture>
                            <Image
                                src="/spd.svg"
                                alt="Stelio Logo"
                                width={250}
                                height={100}
                            />
                        </picture>
                    </div>
                    <div>
                        <p className="text-2xl text-white font-medium mt-2">
                            The all-purpose site of energy initiatives.
                        </p>
                    </div>

                    <a
                        href="/getstarted"
                        className="inline-block border border-white text-white px-4 py-2 mt-4 rounded-lg"
                    >
                        Get started
                    </a>

                    <a
                        href="#"
                        onClick={scrollToOverview}
                        className="hover:underline text-white ml-4"
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