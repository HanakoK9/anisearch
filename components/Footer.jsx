import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex items-center justify-center p-4 static bottom-0 footer bg-neutral text-neutral-content'>
      <div className='items-center grid-flow-col'>
        <h1 className='text-xl text-gray-400'>
          <Link href='/'>ANiSEARCH</Link>
        </h1>
        <p>Copyright © 2021 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
