import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {});

  return (
    <div className='relative flex items-center justify-center flex-col pt-10'>
      <div>
        <Image src='/404.png' width={300} height={250} alt='' />
      </div>
      <h1 className='alert alert-warning px-10 my-2'>
        OOPS....LINK NOT FOUND!
      </h1>
      <p className='my-10'>
        Go Back to{' '}
        <Link href='/'>
          <a className='text-accent cursor-pointer'>ANiSEARCH</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
