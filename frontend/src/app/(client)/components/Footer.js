import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900 bg-opacity-0">
      <div className="grid grid-cols-1 gap-8 lg:gap-0 py-12 pb-20 transition-colors duration-150 border-b lg:grid-cols-[repeat(16,_minmax(0,_1fr))] border-zinc-600 bg-zinc-900 bg-opacity-0 ">
        <div className="col-span-2 lg:col-span-6">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold md:mr-25"
          >
             <span className="mr-900 bg-opacity-0">
              <picture>
              {/* <source srcSet="/steliologov1sd.svg" media="(prefers-color-scheme: dark)" /> */}
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
        <div className="col-span-1 lg:col-span-3">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="sm:py-0 md:py-0 md:pb-2">
              <p className="font-medium">
                Product
              </p>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/product"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Get Started
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/oss"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Open Source
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/product/enterprise"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Enterprise
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1 lg:col-span-3">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="sm:py-0 md:py-0 md:pb-2">
              <p className="font-medium">
                Documentation
              </p>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/Copyright.pdf"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Copyright
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/CTE.pdf"
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
                href="/2024 POW Webmaster.pdf"
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
        <div className="col-span-1 lg:col-span-3">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="sm:py-0 md:py-0 md:pb-2">
              <p className="font-medium">
                Company
              </p>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/about"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                About
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/customer-stories"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Customer Stories
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="/careers"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                Careers
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="https://x.com/fltsa"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                X
              </Link>
            </li>
            <li className="sm:py-0 md:py-0 md:pb-2">
              <Link
                href="https://linkedin.com/in/stelioai"
                className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
  <div className="text-xs container justify-start px-0 mt-5 mb-10">
    
    <div className="grid lg:grid-cols-5 sm:grid-cols-1 gap-4">
    <div>
          <span>
            <p className="text-gray-500">
            Copyright &copy; {new Date().getFullYear()} Stelio
            </p>
          </span>
        </div>
      <div className="col-span-1 lg:col-span-2">
        <ul className="flex flex-row flex-initial md:flex-1">
        <li className="mr-4">
            <Link
              href="/policies/"
              className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
            >
              Terms
            </Link>
          </li>
          <li className="mr-4">
            <Link
              href="/policies/privacy-policy"
              className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
            >
              Privacy policy
            </Link>
          </li>
          <li className="mr-4">
            <Link
              href="/sitemap.xml"
              className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
            >
              Sitemap  
            </Link>
          </li>
          <li className="mr-4">
            <Link
              href="/contact"
              className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-500 hover:underline"
            >
              Contact  
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