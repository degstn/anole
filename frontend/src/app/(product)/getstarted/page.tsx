"use client"

import React, { useState } from 'react';
import { Button } from "./components/ui/button"
import { ScrollArea } from "./components/ui/scroll-area"
import Image from 'next/image'
import Link from 'next/link';



export default function Page() {

  const [residentCount, setResidentCount] = useState(0);
  const [address, setAddress] = useState('');

  // Modify your button click handler
  const handleButtonClick = () => {
    // Save user's inputs to local storage
    localStorage.setItem('address', address);
    localStorage.setItem('residentCount', residentCount.toString());

    // Navigate to the next page
    nextPage();
  };

  const updateUserWithId = '';
  const [opacity, setOpacity] = useState('25');
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const [page, setPage] = useState(1);

  const nextPage = () => {
    // Save user's inputs to local storage
    localStorage.setItem('address', address);
    localStorage.setItem('residentCount', residentCount.toString());

    // Navigate to the next page
    window.location.href = '/getstarted/results';
  };

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
                <h2 className="text-3xl font-medium">Choose a base configuration</h2>
                <h3 className="text-gray-800">You can add others later, start by choosing one.</h3>
                <h3 className="text-xs pb-10 text-gray-600">Note: This is just a demonstration and does not fully function.</h3>
                <div className="space-y-2 " id="question-1">
                  <p className="text-md font-medium text-neutral-600">Home address</p>
                  <input
                    className="min-w-full h-10 pl-5 bg-neutral-100 shadow-none focus:border-green-500 rounded-sm"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <p className="text-md font-medium text-neutral-600 ">Residents</p>
                  <p className="text-sm text-neutral-500">Please provide the amount of residents residing at this address.</p>
                  <input
                    className="min-w-full h-10 pl-5 bg-neutral-100 shadow-none focus:border-green-500 rounded-sm"
                    type="number"
                    value={residentCount}
                    onChange={(e) => setResidentCount(parseInt(e.target.value) || 0)}
                  />
                </div>
                <Button
                  className={`w-w-full text-white h-10 bg-green-800 hover:bg-green-700 mt-5 opacity-${opacity}`}
                  onClick={() => setOpacity('100')}
                  disabled={!address || residentCount === 0}
                >
                  Check availability <span></span>
                </Button>
                <p className="text-sm text-neutral-500">Stelio will make sure your address is within Stelio's availability range.</p>  


                <div className={`mt-10 opacity-${opacity}`}>
    <h2 className="text-3xl font-medium">Most Popular Solutions</h2>
    <h3 className="pb-10 text-gray-800">Popular solutions in your area or local incentives popular in your area..</h3>
    <div className="space-y-2 " id="">
      <Button 
        className={`min-w-full h-20 border ${selectedButton === 'Solar' ? 'border-2 border-green-700' : 'border border-gray-500'}`} 
        onClick={() => setSelectedButton('Solar')}
      >
        Solar
      </Button>
      <Button 
        className={`min-w-full h-20 border ${selectedButton === 'Heat' ? 'border-2 border-green-700' : 'border border-gray-500'}`} 
        onClick={() => setSelectedButton('Heat')}
      >
        Heat
      </Button>
      <Button 
        className={`min-w-full h-20 border ${selectedButton === 'Wind' ? 'border-2 border-green-700' : 'border border-gray-500'}`} 
        onClick={() => setSelectedButton('Wind')}
      >
        Wind
      </Button>
    </div>
  </div>
              </div>
              <div className="justify-center items-center text-center">

              <Button 
  className={`min-w-full text-white h-10 bg-green-800 hover:bg-green-700 mt-20 ${!selectedButton ? 'cursor-not-allowed' : ''}`} 
  disabled={!selectedButton}
  onClick={nextPage}

>
  Next
</Button>          
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