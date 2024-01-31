"use client"

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [countdownText, setCountdownText] = useState('the future');
  const countdownTextsRef = useRef(['the future', 'amazing things', 'innovation', 'you', 'the home']);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownTextsRef.current.length === 0) {
        clearInterval(interval);
        return;
      }
      const randomIndex = Math.floor(Math.random() * countdownTextsRef.current.length);
      const newText = countdownTextsRef.current[randomIndex];
      setCountdownText(newText);
      countdownTextsRef.current.splice(randomIndex, 1);
    }, 3000);


    return () => clearInterval(interval);
  }, []);

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
        <h1 className="text-6xl lg:text-8xl tracking-tight max-w-5xl font-medium mb-14 mt-52 mx-6">
        <span>Energy for </span><span className={styles['countdown-text']}>{countdownText}</span>
        </h1>
        <a
          href="mailto:d@degstn.com"
          className="inline-block bg-green-700 border border-green-800 hover:bg-green-800 text-white px-6 py-1 mt-0 mb-20 rounded-lg mx-6"
        >
          Get started
        </a>
        <picture>
          <Image
            src="/steliographic.svg"
            alt="Stelio Logo"
            width={1600}
            height={500}
          />
        </picture>
      </div>
      <div 
        className="flex flex-col min-h-[calc(100vh-44px)] "
        style={{
          backgroundImage: `url(/steliog6.svg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="">
        <h1 className="text-5xl tracking-tight max-w-3xl text-green-800 font-medium mb-2 mt-20 mx-6">
        <span>Facilitate Personal Energy </span>
        </h1>
        <p className="text-3xl tracking-tight max-w-3xl font-medium mb-20 mx-6">
        <span>Find popular energy incentives near you simply with your address. </span>
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
        <div className='text-xl font-bold col-span-1'>
        <p>text</p>
        <p>will</p>
        <p>go</p>
        <p>here</p>
        </div>

        </div>
        <div className="flex justify-end mt-10">
          
        <picture>
          <Image
            src="/g1f.png"
            alt="gs1"
            width={800}
            height={500}
          />
          </picture>
          
        </div>
        <div className="flex mt-10">
        <picture>
          <Image
            src="/g0f.png"
            alt="gs0"
            width={800}
            height={500}
          />
        </picture>
        <div className='text-xl font-bold col-span-1'>
        <p>where it</p>
        <p>will</p>
        <p>eventually</p>
        <p>go too</p>
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
                            className="inline-block border text-white border-green-800 bg-green-700 px-4 py-1 mt-4 rounded-lg"
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
