import Link from 'next/link'
import { Suspense } from 'react'

import { getRandomNumber } from '@/util/getRandomNumber'

import ServerComponent from './_component/ServerComponent'

const RSC = () => {
  const randomNumber = getRandomNumber()

  return (
    <div className='grid gap-y-5'>
      <p>Hello RSC! {randomNumber}</p>
      <Suspense fallback={<p>Loading...</p>}>
        <ServerComponent />
      </Suspense>
      <Link href='/'>to Home</Link>
    </div>
  )
}

export default RSC
