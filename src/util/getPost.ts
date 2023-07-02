import { getRandomNumber } from './getRandomNumber'

type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export const getPost = async (): Promise<Post> => {
  // NOTE: 意図的に3s処理を遅延させる
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const randomNumber = getRandomNumber()

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${randomNumber}`,
    {
      cache: 'no-store',
    }
  )
  const data = res.json()

  return data
}
