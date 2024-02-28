import Image from 'next/image';
import React from 'react';

export const CompanyCard = () => {
  const renderChip = (text: string) => {
    return (
      <span className='px-2 mr-2 my-1 bg-blue-300 py-1 rounded-md text-xs inline-block min-w-max font-duospace'>
        {text}
      </span>
    );
  };

  const renderClientInfo = () => {
    return (
      <>
        <div className='flex-row flex gap-4'>
          <Image
            src={'/spar_logo.jpg'}
            width={100}
            height={100}
            alt={'spar_logo'}
            className='rounded-md'
            layout='responsive'
            style={{ objectFit: 'contain' }}
          />
          <Image
            src={'/apollo_logo.png'}
            width={100}
            height={100}
            alt={'apollo_logo'}
            className='rounded-md'
            layout='responsive'
            style={{ objectFit: 'contain' }}
          />
          <Image
            src={'/twd_logo.png'}
            width={100}
            height={100}
            alt={'twd_logo'}
            className='rounded-md'
            layout='responsive'
            style={{ objectFit: 'contain' }}
          />
          <Image
            src={'/una_brands_logo.jpg'}
            width={100}
            height={100}
            alt={'una_brands_logo'}
            className='rounded-md'
            layout='responsive'
            style={{ objectFit: 'contain' }}
          />
        </div>
      </>
    );
  };

  return (
    <div className='flex sm:flex-row justify-center items-center sm:item-start py-5 xs:flex-col lg:items-start'>
      <div className='flex flex-col xs:items-center sm:item-start md:items-start lg:items-start sm:ml-10'>
        <h1 className='font-poppins text-xl font-semibold'>
          The Retail Insights
        </h1>
        <p className='text-sm'>Jan 2022 - Present</p>
        <section className='hidden lg:inline-block py-1 xl:mt-0'>
          {renderClientInfo()}
        </section>
        <section className='flex overflow-x-auto scrollbar-thin w-4/5 flex-nowrap'>
          {renderChip('Next.js')}
          {renderChip('React')}
          {renderChip('React Native')}
          {renderChip('CMS')}
          {renderChip('Redux')}
          {renderChip('RTK Query')}
          {renderChip('REST APIs')}
          {renderChip('GraphQl')}
          {renderChip('Figma')}
          {renderChip('Prismic')}
          {renderChip('Prismatic')}
          {renderChip('NodeJs')}
        </section>
      </div>
      <Image
        src={'/the_retail_insights_logo.jpeg'}
        alt={'company-logo'}
        width={200}
        height={200}
        className='rounded-lg'
      />
    </div>
  );
};

const Experience = () => {
  return (
    <div className='flex gap-2 justify-between padding-container flex-col lg:px-10 rounded-lg md:px-0 py-5'>
      <h1 className='font-poppins font-semibold text-center text-lg xl:text-xl'>
        Experience
      </h1>
      <div className='font-recoleta w-full items-start'>
        <CompanyCard />
      </div>
    </div>
  );
};

export default Experience;
