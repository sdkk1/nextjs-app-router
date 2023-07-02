import { getPost } from '@/util/getPost'

const ServerComponent = async () => {
  const post = await getPost({ noCache: true })
  return <p>{post.title}</p>
}

export default ServerComponent
