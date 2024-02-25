import About from '@/components/About';
import Contact from '@/components/Contact';
import LandingPage from '@/components/LandingPage';
import Experience from '@/components/Experience';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col gap-4'>
      <LandingPage />
      {/* <About /> */}
      <Experience />
      {/* <Contact /> */}
    </div>
  );
}
