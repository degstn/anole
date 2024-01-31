"use client"

import React from 'react';
import { Button } from "./components/ui/button"
import { ScrollArea } from "./components/ui/scroll-area"
import Image from 'next/image'
import Link from 'next/link';



export default function Page() {
      


    return (
        <div className="pt-20 overflow-hidden overscroll-none">
        <div key="1" className="grid grid-cols-2">
          <div className="relative mt-48">
            <picture>
            <Image
              alt=""
              className="absolute inset-0 object-cover w-full h-full"
              height="1080"
              src="/oss1.svg"
              style={{
                aspectRatio: "960/1080",
                objectFit: "cover",
              }}
              width="960"
            />
            </picture>
          </div>
          <ScrollArea className="max-h-screen w-full p-6">
            <div className="space-y-6">
              <div className="w-full">
                <p className="text-sm text-gray-500 dark:text-gray-400">Progress</p>
                <div />
              </div>
              <div className="grid w-full gap-1.5">
                <h2 className="question-1">Question 1</h2>
                <div className="space-y-2" id="question-1">
                  <Button className="w-full border-2 border-transparent focus:border-green-500">Option 1</Button>
                  <Button className="w-full border-2 border-transparent focus:border-green-500">Option 2</Button>
                  <Button className="w-full border-2 border-transparent focus:border-green-500">Option 3</Button>
                </div>
              </div>
              <div className="grid w-full gap-1.5">
                <h2 className="question-2">Question 2</h2>
                <div className="space-y-2" id="question-2">
                  <Button className="w-full border-2 border-transparent focus:border-green-500">Option 1</Button>
                  <Button className="w-full border-2 border-transparent focus:border-green-500">Option 2</Button>
                  <Button className="w-full border-2 border-transparent focus:border-green-500">Option 3</Button>
                </div>
              </div>
              <div className="grid w-full gap-1.5">
                <h2 className="">Question 3</h2>
                <div className="space-y-2" id="question-3">
                  <Button className="w-full border-2 border-transparent focus:border-green-500">Option 1</Button>
                  <Button className="w-full border-2 border-transparent focus:border-green-500">Option 2</Button>
                  <Button className="w-full border-2 border-transparent focus:border-green-500">Option 3</Button>
                </div>
              </div>
              <div className="grid w-full gap-1.5">
                <h2 className="question-4">Question 4</h2>
                <div className="space-y-2" id="question-4">
                  <Button className="w-full border-2 border-transparent focus:border-green-500">Option 1</Button>
                  <Button className="w-full border-2 border-transparent focus:border-green-500">Option 2</Button>
                  <Button className="w-full border-2 border-transparent focus:border-green-500">Option 3</Button>
                </div>
              </div>
              <Button className="w-full">Submit</Button>
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