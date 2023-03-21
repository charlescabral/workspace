import Avatar from './Avatar'
import DateFormatter from './Date'
import CoverImage from './Cover'
import type { Author } from '@/types'
import { Container } from '@/ui/Structure'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

export default function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <Container size={'lg'}>
        <CoverImage title={title} src={coverImage} />
        <h2>{title}</h2>
        <DateFormatter dateString={date} />
        <Avatar name={author.name} picture={author.picture} />
      </Container>
    </>
  )
}
