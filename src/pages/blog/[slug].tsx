import { Suspense } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { markdownToHtml } from '@/lib'
import { getPostBySlug, getAllPosts, getStore } from '@/api'
import type { PostProps, Params } from '@/types'

import PostTemplate from '@/templates/Blog/Post'

export default function Post({ post }: PostProps) {
  const router = useRouter()

  // const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Suspense fallback={<div>loading</div>}>
        <PostTemplate {...post} />
      </Suspense>
    </>
  )
}

export async function getStaticProps({ params }: Params) {
  const store = getStore()
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ])

  const content = await markdownToHtml(post.content)

  return {
    props: {
      store,
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
