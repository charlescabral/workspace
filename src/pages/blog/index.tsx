import { Suspense } from 'react'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next/types'

import BlogTemplate from '@/templates/Blog'
import { callAPI } from '@/lib'

export default function Blog({
  store
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Suspense fallback={<div>loading</div>}>
        <BlogTemplate {...store} />
      </Suspense>
    </>
  )
}

export const getStaticProps = async () => {
  const api = await callAPI('store')

  return {
    props: {
      store: api.store
    }
  }
}
