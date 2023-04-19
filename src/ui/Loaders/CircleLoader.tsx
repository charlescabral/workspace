import ContentLoader from 'react-content-loader'

interface CircleLoaderPros {
  size: number
  columns: number
  padding: number
  marginBottom: number
}

export const CircleLoader = ({
  size,
  columns,
  padding,
  marginBottom
}: CircleLoaderPros) => {
  const speed = 0.8

  const circleHeightWithPadding = size + padding
  const circleWidthPadding = size + padding
  const initial = size / 2
  const circles = Array(columns).fill(1)

  return (
    <ContentLoader
      foregroundColor="#FAFAFA"
      backgroundColor="#F4F4F4"
      speed={speed}
      width={columns * circleWidthPadding}
      height={size + marginBottom}
    >
      {circles.map((_g, i) => {
        const cx =
          ((i * circleWidthPadding) % (circleWidthPadding * columns)) +
          size / 2 +
          padding / 2
        const cy = Math.floor(i / columns) * circleHeightWithPadding + initial
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={size / 2}
            width={size}
            height={size}
          />
        )
      })}
    </ContentLoader>
  )
}
