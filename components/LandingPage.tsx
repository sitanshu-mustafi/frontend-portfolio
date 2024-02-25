import Image from 'next/image';
import React from 'react';

const LandingPage = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row items-center container w-full pt-5 sm:justify-center sm:items-center'>
      <section className='md:w-1/2 md:order-last'>
        <Image
          src={'/portfolioBg.png'}
          alt={'bg-image'}
          width={700}
          height={700}
          layout='responsive'
          className='w-full'
        />
      </section>

      <section
        className='
        md:w-1/2 md:pl-2 md:pr-2 md:text-sm
        lg:pl-10 lg:pr-20
        xl:text-xl 
        3xl:pl-40 
        sm:pl-10 
        xs:pl-10 xs:pr-8 
        gap-12 justify-around
        xs:text-center
        md:text-left
        font-duospace'
      >
        {/* <h3>Hello world, I am </h3>
        <h1
          className='pb-8
          text-4xl
          xs:text-2xl
          md:text-2xl
          lg:text-2xl
          xl:text-4xl 
          font-bold font-duospace'
        >
          Sitanshu Mustafi
        </h1>
        <p className='md:text-sm lg:text-sm sm:text-sm xl:text-lg font-duospace text-justify xs:text-left sm:text-justify'>
          I build things for the web & mobile platforms. I'm a frontend wizard
          with NextJs, React, and React Native spells. Crafting pixel-perfect
          magic and excellent performing apps and websites with Tailwind, Redux
          & RTK Query. Currently, I'm focused on building robust apps for The
          Retail Insights.
        </p> */}
        <h1 className='font-poppins font-bold md:text-6xl lg:text-7xl sm:text-4xl xl:text-8xl xs:text-2xl'>
          Frontend Developer.
        </h1>
      </section>
    </div>
  );
};

export default LandingPage;
