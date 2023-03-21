import { PostType } from '@/types'
import PostBody from './components/PostBody'
import PostHeader from './components/PostHeader'

export default function PostTemplate(post: PostType) {
  return (
    <>
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
      />
      <PostBody content={post.content} />
    </>
  )
}
