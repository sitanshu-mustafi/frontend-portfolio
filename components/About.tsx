import React from 'react';

const About = () => {
  const highlightText = (text: string) => {
    return (
      <span className='text-green-50 text-xs font-medium px-0.5 font-poppins'>
        {text}
      </span>
    );
  };

  return (
    <div className='flex gap-2 md:items-end justify-between padding-container flex-col lg:px-10 bg-yellow-10 rounded-lg py-5'>
      <h1 className='font-poppins font-semibold sm:text-center xs:text-center'>
        Development Journey
      </h1>
      <p className='font-recoleta font-thin text-xs text-justify mt-1 md:leading-loose lg:text-sm'>
        I have a knack for crafting awesome user interfaces. With some
        experience under my belt, I've become pretty handy with{' '}
        {highlightText('NextJs')} and {highlightText('TypeScript')}. I love
        diving into {highlightText('React & React Native')} to build both web
        and mobile apps. Need someone to wrangle state with{' '}
        {highlightText('Redux & Toolkit')} ? That's me. Want to talk databases?
        SQL is my jam. And when it comes to{' '}
        {highlightText('content management systems')} like Magento, I've got you
        covered. I'm all about teamwork and staying up-to-date with what's hot
        in the industry. But most importantly, I'm passionate about making apps
        that people actually enjoy using.
      </p>
    </div>
  );
};

export default About;
