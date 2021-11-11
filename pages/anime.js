import Head from 'next/head';
import Animecard from '../components/Animecard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Top({ tops }) {
  return (
    <>
      <Head>
        <title>ANiSEARCH | Top Anime</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <div>
        <title>Top Anime</title>
        <meta name='keywords' content='anime' />

        <Navbar />

        <h1 className='my-8 text-4xl font-bold text-accent text-center'>
          TOP ANIME
        </h1>
        <div className='flex flex-wrap ml-8'>
          {tops.top?.map((top) => (
            <Animecard top={top} key={top.mal_id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

//fetch top anime
export const getStaticProps = async () => {
  const res = await fetch('https://api.jikan.moe/v3/top/anime/1/tv');
  const tops = await res.json();

  return {
    props: {
      tops,
    },
  };
};
