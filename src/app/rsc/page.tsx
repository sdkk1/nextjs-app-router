import Link from 'next/link'
import { Suspense } from 'react'

import ServerComponent from './_component/ServerComponent'

const RSC = () => {
  return (
    <main>
      <p>Hello RSC!</p>
      <Suspense fallback={<p>fetching...</p>}>
        <ServerComponent />
      </Suspense>
      <Link href='/'>to Home</Link>
    </main>
  )
}

export default RSC
