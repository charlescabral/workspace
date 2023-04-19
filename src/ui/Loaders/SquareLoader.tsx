import ContentLoader from 'react-content-loader'

interface SquareLoaderProps {
  height: number
  width: number
  padding: number
  columns: number
  marginBottom: number
}

export const SquareLoader = ({
  height,
  width,
  padding,
  columns,
  marginBottom
}: SquareLoaderProps) => {
  const speed = 0.8
  const radius = 3

  const coverHeightWithPadding = height + padding
  const coverWidthWithPadding = width + padding
  const initial = 0
  const covers = Array(columns).fill(1)

  return (
    <ContentLoader
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
    </ContentLoader>
  )
}
