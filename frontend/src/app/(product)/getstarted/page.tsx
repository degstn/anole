"use client"

import React from 'react';
import { Button } from "./components/ui/button"
import { ScrollArea } from "./components/ui/scroll-area"
import Image from 'next/image'
import Link from 'next/link';



export default function Page() {
  const updateUserWithId = ""



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
                aspectRatio: "960/1080",
                objectFit: "cover",
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
                    <Chevron/> Back
                </Link>
                </Button>
                <div />
              </div>
              <div className="p-6">

              <div className="grid w-full gap-1.5">
                
                <h2 className="text-3xl font-medium">Choose a base configuration</h2>
                <h3 className="pb-10 text-gray-800">You can add others later, start by choosing one.</h3>
                <div className="space-y-2 " id="question-1">
                  <p className="text-md font-medium text-neutral-600">Home address</p>
                  <input className="min-w-full h-10 pl-5 bg-neutral-100 shadow-none focus:border-green-500 rounded-sm">
                    </input>
                <p className="text-md font-medium text-neutral-600 ">Residents</p>  
                <p className="text-sm text-neutral-500">Please provide the amount of residents residing at this address.</p>  
                  <input className="min-w-full h-10 pl-5 bg-neutral-100 shadow-none focus:border-green-500 rounded-sm">
                    </input>
                </div>
                <Button className="w-w-full text-white h-10 bg-green-800 hover:bg-green-700 mt-5">Check availability <span></span></Button>
                <p className="text-sm text-neutral-500">Stelio will make sure your address is within Stelio's availability range.</p>  


                <div className="mt-20 opacity-25">
                <h2 className="text-3xl font-medium">Most Popular Solutions</h2>
                <h3 className="pb-10 text-gray-800">Popular solutions in your area or local incentives popular in your area..</h3>
                <div className="space-y-2 pt-20" id="">
                  <Button className="min-w-full h-20 border border-gray-500 focus:border-green-500">
                    Solar
                    </Button>
                  <Button className="min-w-full h-20 border border-gray-500 focus:border-green-500">
                    Heat
                    </Button>
                  <Button className="min-w-full h-20 border border-gray-500 focus:border-green-500">
                    Wind
                    </Button>
                </div>
              </div>
              </div>
              <div className="justify-center items-center text-center">

              <Button className="w-60 text-white h-10 bg-green-800 hover:bg-green-700 mt-20">Submit</Button>
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