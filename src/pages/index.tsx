import { TreeDataProps } from '@/types'
import HomeTemplate from '@/templates/Home'
import { Suspense } from 'react'
import { getMarkdownContent } from '@/api'
import Loader from '@/components/Loader'
import { callAPI } from '@/lib'

export default function Home(props: TreeDataProps) {
  return (
    <>
      <Suspense fallback={<Loader onFinish={() => console.log('carregou')} />}>
        <HomeTemplate {...props} />
      </Suspense>
    </>
  )
}

export const getStaticProps = async () => {
  const api = await callAPI('store')
  const partials = await getMarkdownContent('partials', ['bio', 'trajectory'])
  const projects = await getMarkdownContent('projects')

  return {
    props: {
      partials,
      projects: projects,
      store: api.store,
      id: 'home'
    }
  }
}
