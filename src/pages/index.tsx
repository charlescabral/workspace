// import HomeTemplate from '@/templates/Home'
import HomeTemplate from '@/templates/Home'
import { useRouter } from 'next/router'
import { InferGetStaticPropsType } from 'next/types'

export default function Home({
  name
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  // loading
  if (router.isFallback) return <>Loading</>

  return <HomeTemplate {...name} />
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://workspace-4tw18uyva-charlescabral.vercel.app/api/hello'
  )
  const name = await res.json()

  return {
    props: {
      name
    }
  }
}
