import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import font from 'next/font/local';

export const metadata: Metadata = {
  title: 'frontend-portfolio',
  description: 'Sitanshu Mustafi',
};

const recoleta = font({
  src: [
    {
      path: '../public/fonts/Recoleta-Regular.otf',
    },
  ],
  variable: '--font-recoleta',
});

const duospace = font({
  src: [
    {
      path: '../public/fonts/iAWriterDuospace-Regular.otf',
    },
  ],
  variable: '--font-duospace',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${recoleta.variable} ${duospace.variable} h-full`}
    >
      <body className='bg-white flex items-center justify-center h-full py-20'>
        <div className='bg-red-200 p-5 md:p-10 lg:p-15 container rounded-lg h-full'>
          <Navbar />
          <main className='relative overflow-hidden'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
