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
        </div>
        <div className="mb-16 ticker-container">

        <Ticker duration={10}>
  {logos.map((item, index) => (
    <div key={index} className="mr-10 justify-center my-auto text-center">
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
    <div className="mx-6 mb-20">
        
        <div className="flex flex-col justify-start">
        <h2 className="text-3xl text-black font-semibold mt-10 mb-5 text-start">Our Purpose</h2>
        <h2 className="text-2xl sm:mr-0">As energy is a touchy subject, Stelio is comitted to making energy provision as easy and accomplishable all with the click of a button.</h2>

        </div>
        <div className="flex flex-col justify-start">
        <h2 className="text-3xl text-black font-semibold mt-10 mb-5 text-start">Core Values</h2>
        <div className="grid grid-cols-2 gap-10">
        <div>
        <h2 className="text-xl font-semibold pb-5">01. Energizing Communities, Sustaining the Planet</h2>
        <h2 className="text-sm">Our core mission is to power communities while protecting the planet. We understand that the future of energy is not just about meeting demands but doing so sustainably. Our approach combines cutting-edge technology with renewable sources to deliver reliable electricity, minimize environmental impact, and pave the way for a greener tomorrow. We are committed to constant learning and adapting, ensuring our methods evolve with both ecological and societal needs.</h2>
        </div>
        <div>
        <h2 className="text-xl font-semibold pb-5">02. Empowering Trust</h2>
        <h2 className="text-sm">We are rooted in a culture of mutual trust and respect. Our company operates on the principles of transparency, integrity, and fairness, building strong relationships with customers, employees, and stakeholders. We believe in honest communication and ethical practices, ensuring that trust is at the heart of everything we do. This environment of trust empowers us to make decisions that are not only beneficial for our business but also for the communities we serve.</h2>
        </div>
        <div>
        <h2 className="text-xl font-semibold pb-5">03. United in Energy</h2>
        <h2 className="text-sm">Collaboration is the cornerstone of our operational philosophy. We recognize that delivering efficient and sustainable energy solutions is a collective effort. Although diverse in expertise, we are united under one goal: to provide exceptional energy services. This unity in purpose and action enables us to meet our commitments to our customers and the environment.</h2>
       </div>
       <div>
        <h2 className="text-xl font-semibold pb-5">04. Practical Innovation</h2>
        <h2 className="text-sm">We believe in the power of simple, effective solutions. Our focus is on practical innovation and statistics - blending tried-and-true methods with creative, forward-thinking strategies. We value real-world results, learning through doing, and adapting based on what works. This approach applies to our technological advancements, customer service strategies, and our efforts in sustainability. By balancing practicality with innovation, Stelio aims to not only meet current energy needs but also anticipate and shape future trends.</h2>
        </div>
        </div>
        </div>
        </div>
        <hr className="border-black mx-6"/>
        <div className="lg:py-10">
                <div className="mx-6 flex flex-col items-center justify-center">
                    <div className="text-5xl font-semibold mt-2 mb-4">
                        Join us in making energy easier.
                    </div>
                    {/* <div className="text-2xl font-semibold mt-2">
                        Coming soon.
                    </div> */}
                    <div className="w-40"> {/* Set the width of the container */}
                        <a
                            href="/careers/open-roles"
                            className="inline-block border border-black text-black px-4 py-2 mt-4 rounded-lg"
                        >
                            Apply now
                        </a>
                    </div>
                </div>
            </div>
            
        
    </main>
    )
}