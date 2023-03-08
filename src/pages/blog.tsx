import { Suspense } from 'react'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next/types'

import BlogTemplate from '@/templates/Blog'

export default function Blog({
  name
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Suspense fallback={<div>loading</div>}>
        <BlogTemplate {...name} />
      </Suspense>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://charlescabral.com/api/hello')
  const name = await res.json()

  return {
    props: {
      name
    }
  }
}
