import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900 bg-opacity-0">
      <div className="grid grid-cols-1 gap-8 py-12 pb-20 transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 bg-zinc-900 bg-opacity-0">
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
            alt="Stelio Logo"
            width={100}
            height={100}
        />
      </picture>
            </span>
            
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="sm:py-0 md:py-0 md:pb-2">
              <p className="font-bold">
                Product
              </p>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Overview
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Get Started
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Technologies
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Enterprise
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="sm:py-0 md:py-0 md:pb-2">
              <p className="font-bold">
                Research
              </p>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Overview
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Cost-Cutting
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Case Studies
              </Link>
            </li>
            {/* need an arrow icon for external site link */}
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Open Source
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="sm:py-0 md:py-0 md:pb-2">
              <p className="font-bold">
                Documentation
              </p>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Copyright
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                CTE
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Citations 
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Plan of Work Log
              </Link>
            </li>
            {/* need an arrow icon for external site link */}
            <li className="sm:py-0 md:py-0 md:pb-2">
              <a
                href="https://tsaweb.org"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                <span className="flex items-center">
                  <span>NTSA</span>
                  <span className="ml-1 mt-1.5">
                  <ArrowIcon />
                  </span>
                </span>
              </a>
              
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="sm:py-0 md:py-0 md:pb-2">
              <p className="font-bold">
                Company
              </p>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                About
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Initiative
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Blog 
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Customer Stories
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:items-center md:items-center sm:items-start justify-start py-4 pb-20 space-y-4 md:flex-row bg-zinc-900 bg-opacity-0">
        <div>
          <span>
            <p className="text-gray-500">
            Copyright &copy; {new Date().getFullYear()} Stelio
            </p>
          </span>
        </div>
        <div className="text-xs">
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-col flex-initial md:flex-1">
              <li className="">
                <Link
                  href="/policies"
                  className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
                >
                  Terms & policies
                </Link>
              </li>
            </ul>
          </div>
        <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-col flex-initial md:flex-1">
              <li className="">
                <Link
                  href="/policies/privacy-policy"
                  className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-col flex-initial md:flex-1">
              <li className="">
                <Link
                  href="/sitemap.xml"
                  className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
                >
                  Site Map  
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-col flex-initial md:flex-1">
              <li className="">
                <Link
                  href="https://x.com/fltsa"
                  className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
                >
                  X  
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-col flex-initial md:flex-1">
              <li className="">
                <Link
                  href="https://instagram.com/fltsa"
                  className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
                >
                  Instagram 
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-col flex-initial md:flex-1">
              <li className="">
                <Link
                  href="https://github.com/degstn/anole
                  "
                  className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
                >
                  GitHub  
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
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