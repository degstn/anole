import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900 bg-opacity-0">
      <div className="grid grid-cols-1 gap-8 py-12 text-black transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 bg-zinc-900 bg-opacity-0">
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
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Overview
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Get Started
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Technologies
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
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
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Overview
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Cost-Cutting
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Case Studies
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
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
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Copyright
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                CTE
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Citations 
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Plan of Work Log
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
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
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                About
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Initiative
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Blog 
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Customer Stories
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-2">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start py-2 pb-20 space-y-4 md:flex-row bg-zinc-900 bg-opacity-0">
        <div>
          <span>
            Copyright &copy; {new Date().getFullYear()} Stelio
          </span>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4 px-10">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4 px-0">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-gray-800"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}