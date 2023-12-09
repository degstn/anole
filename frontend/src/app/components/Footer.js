import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900 bg-opacity-0">
      <div className="grid grid-cols-1 gap-8 py-12 pb-20 text-gray-500 transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 bg-zinc-900 bg-opacity-0">
        <div className="col-span-1 lg:col-span-2">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold md:mr-25"
          >
             <span className="mr-900 bg-opacity-0">
            <picture>
        <source srcSet="/steliologov1sd.svg" media="(prefers-color-scheme: dark)" />
        <Image
            src="/steliologov1s.svg"
            alt="My image"
            width={100}
            height={100}
        />
      </picture>
            </span>
            
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-2">
              <p className="font-bold text-black">
                Product
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Overview
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Get Started
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Technologies
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Enterprise
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-2">
              <p className="font-bold text-black">
                Research
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Overview
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Cost-Cutting
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Case Studies
              </Link>
            </li>
            {/* need an arrow icon for external site link */}
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Open Source
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-2">
              <p className="font-bold text-black">
                Documentation
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Copyright
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                CTE
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Citations 
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Plan of Work Log
              </Link>
            </li>
            {/* need an arrow icon for external site link */}
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="https://tsaweb.org"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                NTSA 
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-2">
              <p className="font-bold text-black">
                Company
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                About
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Initiative
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Blog 
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Customer Stories
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start py-0 pb-20 space-y-4 md:flex-row bg-zinc-900 bg-opacity-0">
        <div>
          <span>
            <p className="text-gray-500">
            Copyright &copy; {new Date().getFullYear()} Stelio
            </p>
          </span>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4 px-10">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4 px-0 pr-5">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4 px-5">
              <Link
                href="https://x.com/fltsa"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                X  
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4 px-5">
              <Link
                href="https://instagram.com/fltsa"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                 Instagram 
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4 px-5">
              <Link
                href="https://github.com/degstn/anole
                "
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500"
              >
                GitHub  
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function ArrowIcon() {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
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