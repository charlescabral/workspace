import { PageProps } from '@/types'
import HomeTemplate from '@/templates/Home'
import { getMarkdownContent, getStore } from '@/api'

export default function Home(props: PageProps) {
  return <HomeTemplate {...props} />
}

export const getServerSideProps = async () => {
  const store = await getStore()
  const partials = await getMarkdownContent('partials', ['bio'])
  const projects = await getMarkdownContent('projects')
  const trajectory = await getMarkdownContent('trajectory')

  return {
    props: {
      id: 'home',
      store,
      partials,
      trajectory,
      projects
    }
  }
}
