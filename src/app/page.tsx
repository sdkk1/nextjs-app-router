import Link from 'next/link';

import RouterRefreshButton from '@/component/RouterRefreshButton';

const Home = () => {
  return (
    <main className='grid gap-y-5'>
      <h1>Hello Next.js!</h1>
      <Link
        href='/rcc'
        prefetch={false}
      >
        to RCC
      </Link>
      <Link
        href='/rsc-static'
        prefetch={false}
      >
        to RSC(Static Data Fetching)
      </Link>
      <Link
        href='/rsc-revalidate'
        prefetch={false}
      >
        to RSC(Revalidate Data Fetching)
      </Link>
      <Link
        href='/rsc-dynamic'
        prefetch={false}
      >
        to RSC(Dynamic Data Fetching)
      </Link>
      <span className='w-14'>
        <RouterRefreshButton />
      </span>
    </main>
  );
};

export default Home;
