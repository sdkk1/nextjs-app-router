import { getRandomNumber } from './getRandomNumber'

type Post = {
  id: number
  title: string
  body: string
  userId: number
}
type Options = {
  noCache?: boolean
  revalidate?: number
}

export const getPost = async (options?: Options): Promise<Post> => {
  // NOTE: 意図的に3s処理を遅延させる
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const randomNumber = getRandomNumber()
  const cacheStrategy = options?.noCache ? 'no-store' : 'force-cache'
  const revalidateTime = options?.revalidate ? options.revalidate : undefined

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${randomNumber}`,
    {
      cache: cacheStrategy,
      next: {
        revalidate: revalidateTime,
      },
    }
  )
  const data = res.json()

  return data
}
