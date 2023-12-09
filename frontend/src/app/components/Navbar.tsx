'use client';

import { motion, LayoutGroup } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

export function Navbar() {
  return (
    <header className="flex items-center justify-between py-5 px-10">
      <div>
        <Link href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">
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
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <Suspense fallback={null}>
              {Object.entries(navItems).map(([path, { name }]) => {
                return <NavItem key={path} path={path} name={name} />;
              })}
          </Suspense>
          {/* 
          TODO: will add these for responsiveness when i feel like it 
          */}
        {/* <SearchButton />
        <ThemeSwitch />
        <MobileNav /> */}
      </div>
    </header>
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
      <span className="relative py-1 px-2">
        {name}
        {path === pathname ? (
          <motion.div
            className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
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