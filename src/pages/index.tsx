import { InferGetStaticPropsType } from 'next/types'
import HomeTemplate from '@/templates/Home'
import { Suspense } from 'react'

export default function Home({
  name
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <HomeTemplate {...name} />
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
