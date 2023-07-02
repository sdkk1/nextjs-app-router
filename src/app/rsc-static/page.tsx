import Link from 'next/link';
import { Suspense } from 'react';

import { getRandomNumber } from '@/util/getRandomNumber';

import ServerComponent from './_component/ServerComponent';

const RscStatic = () => {
  const randomNumber = getRandomNumber();

  return (
    <div className='grid gap-y-5'>
      <p>Hello RSC Static! {randomNumber}</p>
      <Suspense fallback={<p>Loading...</p>}>
        <ServerComponent />
      </Suspense>
      <Link
        href='/'
        prefetch={false}
      >
        to Home
      </Link>
    </div>
  );
};

export default RscStatic;
