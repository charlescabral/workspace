// import HomeTemplate from '@/templates/Home'
import HomeTemplate from '@/templates/Home'
import { InferGetStaticPropsType } from 'next/types'

export default function Home({
  name
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomeTemplate {...name} />
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/hello')
  const name = await res.json()

  return {
    props: {
      name
    }
  }
}
