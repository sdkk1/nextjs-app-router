import Link from 'next/link'
import { Suspense } from 'react'

import ClientComponent from './_component/ClientComponent'

const RCC = () => {
  return (
    <main>
      <p>Hello RCC!</p>
      <Suspense fallback={<p>fetching...</p>}>
        <ClientComponent />
      </Suspense>
      <Link href='/'>to Home</Link>
    </main>
  )
}

export default RCC
