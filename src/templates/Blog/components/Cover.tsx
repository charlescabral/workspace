import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const Cover = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      height={900}
      width={2000}
    />
  )
  return (
    <div style={{ position: 'relative' }}>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {Cover}
        </Link>
      ) : (
        Cover
      )}
    </div>
  )
}

export default CoverImage
