import { getPost } from '@/util/getPost'

const ServerComponent = async () => {
  const post = await getPost()
  return <p>{post.title}</p>
}

export default ServerComponent
