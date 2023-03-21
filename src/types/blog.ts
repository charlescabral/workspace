import { StoreApiProps } from '.'

export type Params = {
  params: {
    slug: string
  }
}

export type Author = {
  name: string
  picture: string
}

export type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export type PostProps = {
  post: PostType
  store: StoreApiProps
  morePosts: PostType[]
  preview?: boolean
}
