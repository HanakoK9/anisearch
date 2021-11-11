import Image from 'next/image';
import Link from 'next/link';

const Animecard = ({ top }) => {
  return (
    <div className='card w-64 lg:w-64 ml-8 mb-4 shadow-2xl'>
      <Image src={top.image_url} width={100} height={200} alt='Anime Image' />
      <div className='card-body'>
        <h3 className='font-semibold text-xl'>{top.title}</h3>
        <h3 className='text-accent mt-4'>
          Score: <span className='badge badge-ghost'>{top.score}</span>
        </h3>
        <h3 className='font-semibold text-xl'>{top.genres}</h3>
      </div>
      <div className='justify-center card-actions mb-4'>
        <button className='btn btn-outline btn-accent'>
          <Link href={top.url}>More Info</Link>
        </button>
      </div>
    </div>
  );
};

export default Animecard;
