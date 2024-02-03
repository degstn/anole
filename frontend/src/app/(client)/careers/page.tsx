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
        <h1 className="text-6xl font-bold mb-11 mt-48 text-center">Join us in making <br /> energy provision cleaner.</h1>
        <div className="flex justify-center">
        <a href="/careers/open-roles"
            className="inline-block text-white bg-black px-4 py-2 mx-2 rounded-lg"
        >
            View open roles
        </a>
        <a href="/about"
           onClick={learnMore}
           className="inline-block border border-black text-black px-4 py-2 mx-2 rounded-lg"
        >
            Learn more
        </a>
        </div>
        <hr className="border-black mt-10"/>

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
            <hr className="border-black mx-6"/>
            <div className="lg:py-10">
                <div className="mx-6 flex flex-col items-center justify-center">
                    <div className="text-4xl lg:text-5xl font-semibold mt-2 mb-4">
                        Join us in making energy easier.
                    </div>
                    
                    <div> {/* Set the width of the container */}
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
