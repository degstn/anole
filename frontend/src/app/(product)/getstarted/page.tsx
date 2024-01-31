"use client"

import React from 'react';
import { Button } from "./components/ui/button"
import { ScrollArea } from "./components/ui/scroll-area"
import Image from 'next/image'
import Link from 'next/link';



export default function Page() {
      


    return (
        <div className="pt-20 overflow-hidden overscroll-none">
        <div key="1" className="grid grid-cols-2 ">
          <div className="relative">
            <picture className="rounded-lg">
            <Image
              alt=""
              className="absolute inset-0 object-cover  w-full h-fit p-6"
              height="1000"
              src="/IMG_0938.JPG"
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
                  <p className="text-md text-slate-800">Home address</p>
                  <Button className="min-w-full h-10 bg-neutral-100 shadow-none focus:border-green-500">
                    address
                    </Button>
                <p className="text-md text-slate-800">Other input</p>  
                  <Button className="min-w-full h-10 bg-neutral-100 shadow-none focus:border-green-500">
                    io
                    </Button>
                </div>

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