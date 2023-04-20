import ErrorPage from '@/templates/Error'

export default function InternalServerError() {
  return <ErrorPage code={500} />
}
