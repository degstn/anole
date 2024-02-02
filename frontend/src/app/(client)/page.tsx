"use client"

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [countdownText, setCountdownText] = useState('the future');
  const countdownTextsRef = useRef(['the future', 'innovation', 'you', 'the home']);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % countdownTextsRef.current.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCountdownText(countdownTextsRef.current[currentIndex]);
  }, [currentIndex]);


    

  const overviewRef = useRef<HTMLDivElement>(null);

  const otherRef = useRef<HTMLDivElement>(null);

  const otherRef1 = useRef<HTMLDivElement>(null);


    const scrollToOverview = () => {
        overviewRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToRef = () => {
      otherRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToRef1 = () => {
      otherRef1.current?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div 
        className="flex flex-col items-start min-h-[calc(100vh-44px)] justify-start"
        style={{
          backgroundImage: `url(/steliogradientv1.svg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <h1 className="text-6xl lg:text-8xl tracking-tight max-w-5xl font-medium mb-14 mt-72 lg:mt-52  mx-6">
        <span>Energy for </span><span className={styles['countdown-text']}>{countdownText}</span>
        </h1>
        <div className="flex">
        <a
          href="mailto:d@degstn.com"
          className="inline-block bg-green-700 border border-green-800 hover:bg-green-800 text-white px-6 py-2 mt-0 sm:mb-20 rounded-md ml-6"
        >
          Get started
        </a>
        <a
            href="#"
            onClick={scrollToOverview}
            className="hover:underline text-black ml-4 mt-2.5"
        >
            Overview
            <span className="no-underline" style={{ textDecoration: 'none' }}>&#8595;</span>
        </a>
        </div>
        <div className="flex  pt-60 lg:pt-0 object-bottom">
        <picture>
          <Image
            src="/steliographic.svg"
            alt=""
            width={1600}
            height={500}
          />
        </picture>
        </div>
      </div>
      <div 
        className="flex flex-col min-h-[calc(100vh-44px)] "
        style={{
          backgroundImage: `url(/steliog6.svg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
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
        

        <div ref={otherRef} id="otherRef">
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
          
        <div ref={otherRef1} id="otherRef1">
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
      </div>
      {/* <section className="w-screen bg-gray-600 opacity-40 py-10 mt-10">
        <h2 className="text-3xl text-white font-semibold text-center">Solutions</h2>
        <p className="text-center text-white mt-4 mb-52">Sections will be added for staging.</p>
      </section>   */}
      {/* <footer className="text-gray-500 py-4 px-6 text-sm">
        <p className="text-xs mb-5">1. Statistics may not be accurate.</p>
        <p className="text-xs mb-5">2. Stelio is only available for customers in the United States. More countries coming soon.</p>
        <p className="text-xs mb-0">3. Sign in is required to get started.</p>
      </footer>  */}
    </main>
  )
}
