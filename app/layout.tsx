import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import font from 'next/font/local';
import { Poppins } from '@next/font/google';

const recoletaFont = font({
  src: [{ path: '../public/fonts/Recoleta-Regular.otf' }],
  variable: '--font-recoleta',
});

const duospaceFont = font({
  src: [{ path: '../public/fonts/iAWriterDuospace-Regular.otf' }],
  variable: '--font-duospace',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '500', '300'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'frontend-portfolio',
  description: 'Sitanshu Mustafi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${recoletaFont.variable} ${duospaceFont.variable} ${poppins.variable} h-full`}
      style={{ fontFamily: 'Poppins' }}
    >
      <body className=' bg-green-10 flex items-center justify-center h-full py-10 px-10'>
        <div className='bg-white container padding-container rounded-lg h-full w-full drop-shadow-2xl overflow-x-auto pb-10'>
          <Navbar />
          <main className='relative overflow-hidden'>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
