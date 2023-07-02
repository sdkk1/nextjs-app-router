'use client'

import { useRouter } from 'next/navigation'

const RouterRefreshButton = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => {
        router.refresh()
      }}
    >
      Refresh
    </button>
  )
}

export default RouterRefreshButton
