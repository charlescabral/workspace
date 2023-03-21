import { PageProps } from '@/types'
import HomeTemplate from '@/templates/Home'
import { Suspense } from 'react'
import { getMarkdownContent, getStore } from '@/api'
import Loader from '@/components/Loader'

export default function Home(props: PageProps) {
  return (
    <>
      <Suspense fallback={<Loader onFinish={() => console.log('carregou')} />}>
        <HomeTemplate {...props} />
      </Suspense>
    </>
  )
}

export const getStaticProps = async () => {
  const store = await getStore()
  const partials = await getMarkdownContent('partials', ['bio', 'trajectory'])
  const projects = await getMarkdownContent('projects')

  return {
    props: {
      partials,
      projects,
      store,
      id: 'home'
    }
  }
}
