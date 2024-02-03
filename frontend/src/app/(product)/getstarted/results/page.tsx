"use client"

import React, { useEffect, useState } from 'react';
import { Button } from "../components/ui/button"
import { ScrollArea } from "../components/ui/scroll-area"
import Image from 'next/image'
import Link from 'next/link'



export default function Page() {

    const [address, setAddress] = useState('');
    const [residentCount, setResidentCount] = useState(0);

    useEffect(() => {
    // Retrieve user's inputs from local storage
    const savedAddress = localStorage.getItem('address');
    const savedResidentCount = localStorage.getItem('residentCount');

    if (savedAddress) setAddress(savedAddress);
    if (savedResidentCount) setResidentCount(Number(savedResidentCount)); // Convert to number before setting in state
}, []);


  return (
    <div className="pt-20 overflow-hidden overscroll-none">
      <div key="1" className="grid grid-cols-2 ">
        <div className="relative">
          <picture className="rounded-lg">
            <Image
              alt=""
              className="absolute inset-0 object-cover  w-full h-fit p-6"
              height="1000"
              src="/toolw.png"
              style={{
                aspectRatio: '960/1080',
                objectFit: 'cover',
              }}
              width="960"
            />
          </picture>
        </div>
        <ScrollArea className="max-h-screen min-w-full">
          <div className="space-y-6">
            <div className="w-full">
              <Button asChild>
                <Link className="text-md bg-transparent shadow-none hover:bg-neutral-100" href="/">
                  <Chevron /> Back
                </Link>
              </Button>
              <div/>
            </div>
            <div className="p-6">
              <div className="grid w-full gap-1.5">
                <h2 className="text-3xl font-medium">Final Configuration</h2>
                <h3 className="text-gray-800">Base Configuration Total.</h3>
                <h3 className="text-xs pb-10 text-gray-600">Note: This is just a demonstration and does not fully function.</h3>
                <h2 className="text-2xl font-medium">Add others</h2>
<div className="flex flex-col">
  <Button className="shadow-none justify-start">
  <span>+</span> Add wind 
  </Button>
  <Button className="shadow-none justify-start">
  <span>+</span> Add geothermal 
  </Button>
  <Button className="shadow-none justify-start">
  <span>+</span> Add heat pumps 
  </Button>
</div>
<div className="flex flex-col">
  <Button className="shadow-none justify-start">
    <span>+</span> Add wind 
  </Button>
  <Button className="shadow-none justify-start">
    <span>+</span> Add geothermal 
  </Button>
  <Button className="shadow-none justify-start">
    <span>+</span> Add heat pumps 
  </Button>
</div>
<div className="mt-6">
  <h3 className="text-lg font-medium">Total</h3>
  <div className="flex space-x-4">
    {address && (
      <a href="https://www.fpl.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Visit FPL
      </a>
    )}
    {residentCount > 0 && (
      <a href="https://www.tesla.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Visit Tesla
      </a>
    )}
  </div>
</div>

                

            </div>
            </div>
            </div>
          </ScrollArea>
    </div>       
    </div>
    )
}

function Chevron() {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" d="M11.025 13.25a.748.748 0 0 1-1.281.53l-5.25-5.264a.75.75 0 0 1 0-1.06L9.717 2.22a.75.75 0 1 1 1.062 1.06L6.084 7.986l4.722 4.734a.748.748 0 0 1 .219.53z"></path>
      </svg>
    );
  }