import Link from 'next/link'

import { getRandomNumber } from '@/util/getRandomNumber'

import ClientComponent from './_component/ClientComponent'

const RCC = () => {
  const randomNumber = getRandomNumber()

  return (
    <div className='grid gap-y-5'>
      <p>Hello RCC! {randomNumber}</p>
      <ClientComponent />
      <Link href='/'>to Home</Link>
    </div>
  )
}

export default RCC
