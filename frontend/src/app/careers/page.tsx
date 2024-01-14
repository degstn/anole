"use client"
import Link from 'next/link'
import { useRef } from 'react';

export default function Page() {
    const lrRef = useRef<HTMLDivElement>(null);

    const learnMore = () => {
        lrRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <main className="flex min-h-screen flex-col items-stretch justify-between">
        <div className="mx-6">
        <h1 className="text-6xl font-bold mb-11 mt-48 text-center">Join us in making <br /> energy provision, cleaner.</h1>
        <div className="flex justify-center">
        <a href="/careers/open-roles"
            className="inline-block text-white bg-black px-4 py-2 mx-2 rounded-lg"
        >
            View open roles
        </a>
        <a href="#"
           onClick={learnMore}
           className="inline-block border border-black text-black px-4 py-2 mx-2 rounded-lg"
        >
            Learn more
        </a>
        </div>

            <h2 className="text-3xl font-semibold mt-10 mb-2">Featured Roles</h2>
            <p className="mb-4">We are constantly seeking new talent to make Stelio even better for our users.</p>
            <div className="mb-10">
                <Link href={`/careers/open-roles`}>
                    <span className="underline">View all open roles</span>
                </Link>
            </div>

            <div className="grid gap-0">
                {[
                    { job: "Software Engineer", location: "Remote - Miami HQ" },
                    { job: "Researcher", location: "US Remote" },
                    { job: "Product Manager", location: "Miami HQ" }
                ].map((jobDetail, index) => (
                    <div key={index} className="border-t border-black py-2 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold">{jobDetail.job}</h3>
                            <p>{jobDetail.location}</p>
                        </div>
                        <Link href={"https://www.greenhouse.com"}>
                            <span className="flex items-center underline">
                                <span>Apply now</span>
                                <span className="ml-1 mt-1.5">
                                    <ArrowIcon />
                                </span>
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
                           
        </div>
            <section ref={lrRef} id="overview" className="w-screen bg-white py-10 mt-10">
                <h2 className="text-3xl font-semibold text-center">Our Community</h2>
                <p className="text-center mt-4 mb-52">Sections will be added for staging.</p>
            </section>  
            <footer className="py-4 px-6 text-sm">
                <p className="text-xs mb-10">At Stelio, we champion innovative energy solutions with a commitment to a brighter future.</p>
                <p className="text-xs mb-10">Stelio is not just a workplace; it's a canvas for diversity and dynamism. We're an Equal Opportunity Innovator, fervently believing in creating a mosaic of talents, perspectives, and ideas. Our pledge is to ensure fair consideration for every aspiring Stelio team member, irrespective of their race, hue, beliefs, gender, love's expression, age, global roots, abilities, veteran status, or identity tapestry. We stand firm in the belief that our strength blooms from this diversity.</p>
                <p className="text-xs mb-10">Mindful of the unique paths we each tread, Stelio is dedicated to harmonizing our work environment with the needs of those with differing abilities. If the dance of the interview requires a different rhythm, let your Stelio guide know - we're here to choreograph a process that resonates with your beat.</p>
                <p className="text-xs mb-0">For those who navigate the digital realm with the aid of screen reading technologies, we offer a portal to a compatible, complimentary digital lens, complete with a guide to unveil its wonders step by step. Join us in a journey where energy not only powers our homes but also empowers our lives.</p>
            </footer> 
      </main>
    )
}

function ArrowIcon() {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
          fill="currentColor"
        />
      </svg>
    );
}
