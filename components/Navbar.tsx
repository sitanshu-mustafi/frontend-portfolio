import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flexBetween max-container border-b-2 border-black z-30 pt-10 pb-2 px-2 sticky top-0 bg-white'>
      <Link href='/'>
        <p className='font-duospace font-bold'>&lt;sitanshu /&gt;</p>
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className='font-duospace regular-14 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold'
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <Image
        src='menu.svg'
        alt='menu'
        width={24}
        height={24}
        className='inline-block cursor-pointer lg:hidden'
      />
    </nav>
  );
};

export default Navbar;
