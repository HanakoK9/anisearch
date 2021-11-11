import Head from 'next/head';
import Footer from '../components/Footer';
import Mangacard from '../components/Mangacard';
import Navbar from '../components/Navbar';

export default function Manga({ mangas }) {
  return (
    <>
      <Head>
        <title>ANiSEARCH | Top Manga</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <div>
        <title>Top Manga</title>
        <meta name='keywords' content='manga' />

        <Navbar />

        <h1 className='my-8 text-4xl font-bold text-accent text-center'>
          TOP MANGA
        </h1>
        <div className='flex flex-wrap ml-8'>
          {mangas.top.map((manga) => (
            <Mangacard manga={manga} key={manga.mal_id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

//fetch top manga
export const getStaticProps = async () => {
  const res = await fetch('https://api.jikan.moe/v3/top/manga/1');
  const mangas = await res.json();

  return {
    props: {
      mangas,
    },
  };
};
