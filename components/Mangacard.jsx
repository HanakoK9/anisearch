import Image from 'next/image';

const Mangacard = ({ manga }) => {
  return (
    <div className='card w-64 lg:w-64 ml-8 mb-4 shadow-2xl'>
      <Image src={manga.image_url} width={100} height={250} alt='Anime Image' />
      <div className='card-body'>
        <h3 classNameName='font-semibold text-xl'>{manga.title}</h3>
        <h3 className='text-accent mt-4'>
          Score: <span className='badge badge-ghost'>{manga.score}</span>
        </h3>
        <div className='justify-center card-actions'>
          <button className='btn btn-outline btn-accent'>
            <a href={manga.url} rel='noreferrer' target='_blank'>
              More Info
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mangacard;
