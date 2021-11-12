import Image from 'next/image';

function Searchcard({ results }) {
  return (
    <div className='lg:min-w-full'>
      <article className=' lg:flex lg:flex-wrap'>
        {results.map(({ title, image_url, url, episodes }, i) => (
          <div key={i} className='card w-64 lg:w-64 ml-8 mb-4 shadow-2xl'>
            <Image src={image_url} width={100} height={250} alt='Anime Image' />
            <div className='flex-col justify-between'>
              <h3 className='font-semibold text-xl m-4'>{title}</h3>
              <h3 className='text-accent m-4'>
                Episodes: <span className='text-blue-100'>{episodes}</span>
              </h3>
              <div className='flex justify-center items-center m-4 pt-4'>
                <button className='btn btn-outline btn-accent'>
                  <a href={url} rel='noreferrer' target='_blank'>
                    More Info
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
}

export default Searchcard;
