import About from '@/components/About';
import Contact from '@/components/Contact';
import LandingPage from '@/components/LandingPage';
import Projects from '@/components/Projects';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
