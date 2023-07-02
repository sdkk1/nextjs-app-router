import { getPost } from '@/util/getPost'

const ServerComponent = async () => {
  const post = await getPost({ revalidate: 3 })
  return <p>{post.title}</p>
}

export default ServerComponent
