'use client';

import { motion, LayoutGroup } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; 

const navItems = {
  '/product': {
    name: 'Product',
  },
  '/research': {
    name: 'Research',
  },
  '/company': {
    name: 'Company',
  },
};

const  Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const MobileNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed w-full py-5 px-10">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <div>
              <picture>
                <source srcSet="/steliologov1sd.svg" media="(prefers-color-scheme: dark)" />
                <Image
                    src="/steliologov1s.svg"
                    alt="Stelio Logo"
                    width={100}
                    height={100}
                />
              </picture>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 leading-5">
            <Suspense fallback={null}>
                {Object.entries(navItems).map(([path, { name }]) => {
                  return <NavItem key={path} path={path} name={name} />;
                })}
            </Suspense>
        </div>
        <div onClick={MobileNav} className="md:hidden overscroll-none">
          <OpenMenu />
        </div>
        <div className={
          isOpen 
          ? "fixed left-0 top-0 bg-white dark:bg-neutral-900 h-screen w-screen overscroll-none" 
          : "hidden"
          }
          >
          <div className="flex w-full items-center justify-end pt-5 pr-10">
            <div onClick={MobileNav}>
              <CloseMenu />
            </div>
            </div>
            <div className="flex-col text-4xl font-semibold py-10 px-3">
            <Suspense fallback={null}>
                {Object.entries(navItems).map(([path, { name }]) => {
                  return <NavItem key={path} path={path} name={name} />;
                })}
            </Suspense>
            </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ path, name }: { path: string; name: string }) {
  let pathname = usePathname() || '/';
  if (pathname.includes('/research/')) {
    pathname = '/research';
  }
  let isActive = path === pathname;

  return (
    <Link
      key={path}
      href={path}
      className=
        'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle'
      
    >
      <span className="relative py-3 px-2">
        {name}
        {path === pathname ? (
          <motion.div
            className="absolute h-[1px] top-7 mx-2 inset-0 bg-black dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
            layoutId="sidebar"
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
}

function OpenMenu() {
  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M5.418 25.375v-2.083h29.166v2.083H5.418Zm0-8.667v-2.083h29.166v2.083H5.418Z" 
        fill="#000000"
      />
    </svg>


  );
}

function CloseMenu() {
  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="m10.543 30.958-1.5-1.5 9.5-9.458-9.5-9.458 1.5-1.5 9.458 9.5 9.458-9.5 1.5 1.5-9.5 9.458 9.5 9.458-1.5 1.5-9.458-9.5-9.458 9.5Z" 
        fill="#000000"
        />
    </svg>
  );
}

export default Navbar;