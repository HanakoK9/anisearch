import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Search from '../components/Search';

export default function Home() {
  return (
    <div className='flex flex-col h-screen justify-between relative lg:bg-showcase bg-bottom'>
      <Head>
        <title>ANiSEARCH | Home</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <Navbar />

      <div className='lg:absolute text-xl font-bold text-center flex flex-col mb-20 lg:w-2/5 lg:ml-96 lg:pt-40'>
        <span className='text-5xl font-semibold font-mono text-accent lg:text-gray-200'>
          ANiSEARCH
        </span>
        super fast anime search engine
      </div>

      <div className='flex flex-row justify-between'>
        <div className='hidden lg:block'>
          <Image src='/gon.png' height={300} width={250} alt='' />
        </div>

        <div className='hidden lg:block'>
          <Image src='/killua.png' height={300} width={250} alt='' />
        </div>
      </div>

      <div>
        <Search />
      </div>

      <Footer />
    </div>
  );
}
