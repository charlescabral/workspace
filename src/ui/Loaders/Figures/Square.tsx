import { styled } from '@/styles'
import ContentLoader from 'react-content-loader'

interface SquareProps {
  height: number
  width: number
  padding: number
  columns: number
  marginBottom: number
}

const Wrapper = styled(ContentLoader, {
  margin: '0 auto',
  display: 'block'
})

export default function Square({
  height,
  width,
  padding,
  columns,
  marginBottom
}: SquareProps) {
  const speed = 0.8
  const radius = 10

  const coverHeightWithPadding = height + padding
  const coverWidthWithPadding = width + padding
  const initial = 0
  const covers = Array(columns).fill(1)

  return (
    <Wrapper
      foregroundColor="#FAFAFA"
      backgroundColor="#F4F4F4"
      speed={speed}
      width={columns * coverWidthWithPadding}
      height={height + marginBottom}
    >
      {covers.map((_g, i) => {
        const vy = Math.floor(i / columns) * coverHeightWithPadding + initial
        const vx =
          ((i * coverWidthWithPadding) % (columns * coverWidthWithPadding)) +
          padding / 2

        return (
          <rect
            key={i}
            x={vx}
            y={vy}
            rx={radius}
            ry={radius}
            width={width}
            height={height}
          />
        )
      })}
    </Wrapper>
  )
}
