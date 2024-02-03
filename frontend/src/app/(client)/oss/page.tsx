import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

import Container from "../components/container";
import { MoreStories } from "../components/more-stories";
import { getAllPosts } from "../lib/api";

export default async function Page() {
    const allPosts = getAllPosts();

    const morePosts = (await allPosts).slice();

    return (
      <main className="flex min-h-screen flex-col justify-center">
        <div className="mx-6">
    <h1 className="text-6xl font-bold mb-0 mt-48 text-center">Open for you. <br /> Open for all.</h1>
            
            <div className="flex flex-col justify-start">
            <h2 className="text-3xl text-black font-semibold mt-10 mb-5 text-center">OSS</h2>
            <h2 className="text-2xl lg:mx-56 text-center">Stelio was built around the idea that clean, renewable energy should be as accessible to users as for developers. Therefore, the source of Stelio is fully open source for contribution and reference.</h2>
            </div>
            <div className="flex justify-center">
              <picture>
                <Image
                    src="/oss1.png"
                    alt="Stelio Logo"
                    width={800}
                    height={800}
                />
              </picture>
              
            </div>
            <div className="flex justify-center mt-3">
            <p className="text-lg font-medium pr-10">Contribute to the Stelio client and product Git repositories.</p>

            <Link href="https://github.com/degstn/anole">
                <span className=" py-2 px-10 text-white bg-black rounded-md mt-5">Git</span>
                  </Link>
                  </div>
            <h2 className="text-3xl text-black font-semibold mt-10 text-start">Featured Research</h2>
            
            <div className="mt-10 mb-10">
            <Container>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </Container>
            </div>
            <hr className="border-black"/>
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
        </div>
    </main>
    )
}