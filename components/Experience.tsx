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
  return (
    <section className='rounded-lg flex flex-row gap-2 justify-between items-end'>
      <div className='flex gap-1 flex-col'>
        <h1 className='font-poppins text-xl font-semibold'>
          The Retail Insights
        </h1>
        <p className='text-sm pb-1'>Jan 2020 - Present</p>
        <section className=''>
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
        </section>
      </div>
      <Image
        src={'/the_retail_insights_logo.jpeg'}
        alt={'company-logo'}
        width={200}
        height={200}
        className='rounded-lg'
      />
    </section>
  );
};

const Experience = () => {
  return (
    <div className='flex gap-2 md:items-start justify-between padding-container flex-col lg:px-10 rounded-lg py-5'>
      <h1 className='font-poppins font-semibold sm:text-center xs:text-center'>
        Experience
      </h1>
      <div className='font-recoleta w-full items-start'>
        {/* <div className='w-full'> */}
        <CompanyCard />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Experience;
