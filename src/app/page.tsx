import Link from 'next/link'

const Home = () => {
  return (
    <main>
      <p>Hello Next.js!</p>
      <Link href='/rsc'>to RSC</Link>
      <br />
      <Link href='/rcc'>to RCC</Link>
    </main>
  )
}

export default Home
