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
            <div className="bg-green-900 py-28 lg:py-28">
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
                <div className="mx-6 mb-10">
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

            <div ref={overviewRef} id="overview">
        <h1 className="text-3xl lg:text-5xl tracking-tight max-w-3xl text-green-800 font-medium mb-2 mt-20 mx-6">
        <span>Facilitate Personal Energy </span>
        </h1>
        <p className="text-2xl lg:text-3xl tracking-tight max-w-3xl text-neutral-800 font-medium mb-5 mx-6">
        <span>Find popular energy incentives near you simply with your address. </span>
        </p>
        <div className='flex'>
        <picture>
          <Image
            src="/s1.png"
            alt=""
            width={700}
            height={400}
          />
        </picture>
        
        <p className="text-xl lg:text-3xl tracking-tight max-w-sm text-neutral-800 font-medium mt-32 mx-6">
        <span>After a quick location check, a dynamic list of local and popular <span className="font-semibold text-green-900">incentivized base configurations</span> will be provided to start your journey.</span>
        </p>
        </div>
        

        <div>
        <h1 className="text-3xl lg:text-5xl tracking-tight text-teal-800 font-medium mb-2 mt-20 mx-6 text-end">
        <span>Maximize Value of Energy</span>
        </h1>
        <p className="text-2xl lg:text-3xl tracking-tight lg:ml-60 text-neutral-800 font-medium mb-5 mx-6 text-end">
        <span>Stelio will give you an estimate on your energy bill, setup cost, and yearly energy bill. </span>
        </p>
        <div className='flex justify-end'>
        <p className="text-xl lg:text-3xl tracking-tight max-w-sm text-neutral-800 font-medium mt-32 mx-6 text-end">
        <span>Help <span className="font-semibold text-teal-900">visualize future costs</span> and changes in your bills, keeping you in the know about your expenses and what you can save.</span>
        </p>
        <picture>
          <Image
            src="/g1f.png"
            alt="gs1"
            width={800}
            height={500}
          />
        </picture>
        
        
        </div>
          
        <div>
        <h1 className="text-3xl lg:text-5xl tracking-tight max-w-3xl text-fuchsia-800 font-medium mb-2 mt-20 mx-6">
        <span>Prepare for the future</span>
        </h1>
        <p className="text-2xl lg:text-3xl tracking-tight max-w-3xl font-medium mb-5 mx-6">
        <span>Find incentives for your home today to retrofit, or prepare for the future.</span>
        </p>
        <div className='flex'>
        <picture>
          <Image
            src="/g0f.png"
            alt="gs0"
            width={800}
            height={500}
          />
        </picture>
        <p className="text-xl lg:text-3xl tracking-tight max-w-sm text-neutral-800 font-medium mt-32 mx-6">
        <span>Discover the saving and benefits of retrofitting and upgrading to <span className="font-semibold text-fuchsia-900">increase the efficiency</span> of electricity in your household.</span>
        </p>
        </div>
        </div>
        </div>

        <div className="lg:py-10">
                <div className="mx-6 mt-20 mb-40 flex flex-col text-center items-center justify-center">
                    <div className="text-6xl lg:text-8xl font-semibold mt-2 mb-4">
                        Join the future <br/> of energy
                    </div>
                    
                    <div className="flex flex-col"> {/* Set the width of the container */}
                        <a
                            href="/careers/open-roles"
                            className="inline-block border text-white border-green-800 bg-green-700 px-4 py-2 mt-4 rounded-md"
                        >
                            Get started
                        </a>
                        <a
                            href="/careers/open-roles"
                            className="hover:underline inline-block text-black px-4 py-1 mt-4"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        
        {/* <a
          href="/"
          className="inline-block bg-black border border-black text-white px-10 py-2 mt-10 mb-20 rounded-lg mx-6"
        >
          Button
        </a> */}
      </div> 
        </main>
    )
}