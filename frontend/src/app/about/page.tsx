"use client"

import Ticker from 'framer-motion-ticker';
import React from 'react';
import Image from 'next/image'



export default function Page() {
      const logos = ['fpl.svg', 'tesla.svg', 'sunpower.svg', 'nxte.svg', 'vestas.svg'];
      


    return (
      <main className="flex min-h-screen flex-col  justify-normal">
        <div className="mx-6">
    <h1 className="text-6xl font-bold mb-11 mt-48 text-center">Providing energy solutions <br /> for everyday life.</h1>
            <p className="text-2xl text-gray-500 font-regular mt-0 text-center">
                Building a cleaner world through the all-purpose site <br/> of energy initiatives, one step at a time.
            </p>
        <h2 className="text-3xl text-black font-semibold mt-10 mb-16 text-center">Working with the best energy partners in the world</h2>
        <div className="mb-16">
      <Ticker duration={20}>
        {logos.map((item, index) => (
         <div className="mr-10 fill-black justify-center my-auto text-center">
         <picture>
          <Image
              src={item}
              alt=""
              width={75}
              height={75}
          />
        </picture>
        </div>
          ))}
          
          
      </Ticker>
    </div>
        

        <div className="flex flex-row justify-start mx-6">
        <h2 className="text-2xl text-black font-semibold mt-10 mb-5 text-start mr-48">Our Purpose</h2>
        <h2 className="text-3xl text-black font-semibold mt-10 mb-5 text-start">As energy is a touchy subject, Stelio is comitted to making energy provision as easy and accomplishable all with the click of a button.</h2>

        </div>
        <div className="flex flex-row justify-start mx-6">
        <h2 className="text-2xl text-black font-semibold mt-10 mb-5 text-start mr-48">Values</h2>
        <h2 className="text-3xl text-black font-semibold mt-10 mb-5 text-start">As energy is a touchy subject, Stelio is comitted to making energy provision as easy and accomplishable all with the click of a button.</h2>
        </div>
        </div>
        
    </main>
    )
}