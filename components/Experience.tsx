import { EXP_COMPANIES } from '@/constants';
import Image from 'next/image';
import React from 'react';

export const CompanyCard = ({ data }) => {
  const renderChip = (text: string) => {
    return (
      <span className='px-2 mr-2 my-1 bg-blue-300 py-1 rounded-md text-xs inline-block min-w-max font-duospace hover:bg-yellow-10'>
        {text}
      </span>
    );
  };

  const renderClientInfo = (item: any): any => {
    return (
      <>
        <div className='flex-row flex gap-4'>
          {item?.map((o: any) => {
            return (
              <>
                <Image
                  src={o?.src || ''}
                  width={100}
                  height={100}
                  alt={o.alt || ''}
                  className='rounded-md'
                  layout='responsive'
                  style={{ objectFit: 'contain' }}
                />
              </>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className='flex sm:flex-row justify-center items-center py-5 xs:flex-col'>
      <div className='flex flex-col items-center sm:ml-10 w-4/5'>
        <h1 className='font-poppins text-xl font-semibold'>{data.title}</h1>
        <p className='text-sm'>{data.timestamp}</p>
        <section className='hidden lg:inline-block py-1 xl:mt-0'>
          {renderClientInfo(data.clients)}
        </section>
        <section className='flex overflow-x-auto scrollbar-thin md:w-11/12 xs:w-full flex-nowrap no-scrollbar'>
          {data?.skills?.map((o: any) => {
            return <>{renderChip(o)}</>;
          })}
        </section>
      </div>
      <Image
        src={data?.company_logo?.src}
        alt={data?.company_logo?.alt}
        width={200}
        height={200}
        className='rounded-lg'
        layout='responsive'
      />
    </div>
  );
};

const Experience = () => {
  return (
    <div className='flex gap-2 justify-between padding-container flex-col lg:px-10 rounded-lg md:px-0 py-5'>
      <h1 className='font-poppins font-semibold text-lg xl:text-xl'>
        Experience
      </h1>
      <div className='font-recoleta w-full items-start'>
        {EXP_COMPANIES.map((item) => {
          return (
            <>
              <CompanyCard data={item} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
