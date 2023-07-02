'use client'

import { useQuery } from '@tanstack/react-query'

import { getPost } from '@/util/getPost'

const ClientComponent = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['post'],
    queryFn: getPost,
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error!</p>
  }

  return <p>{data.title}</p>
}

export default ClientComponent
