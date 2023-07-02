import Link from 'next/link'

import RouterRefreshButton from '@/component/RouterRefreshButton'

const Home = () => {
  return (
    <main className='grid gap-y-5'>
      <h1>Hello Next.js!</h1>
      <Link href='/rsc'>to RSC</Link>
      <Link href='/rcc'>to RCC</Link>
      <span className='w-14'>
        <RouterRefreshButton />
      </span>
    </main>
  )
}

export default Home
