import { Suspense } from 'react'
import Head from 'next/head'

import BlogTemplate from '@/templates/Blog'
import { getStore } from '@/api'
import { PageProps } from '@/types'

export default function Blog(props: PageProps) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Suspense fallback={<div>loading</div>}>
        <BlogTemplate {...props} />
      </Suspense>
    </>
  )
}

export const getStaticProps = async () => {
  const store = await getStore()

  return {
    props: {
      store
    }
  }
}
