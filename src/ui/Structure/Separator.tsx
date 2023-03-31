import { VariantProps } from '@stitches/react'
import { styled } from '@/styles'

const SVG = styled('svg', {
  $$height: '40px',
  height: '$$height',
  position: 'absolute',
  left: 0,
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  zIndex: '0',

  variants: {
    climb: {
      true: {}
    },
    negative: {
      true: {}
    },
    reverse: {
      true: {}
    },
    position: {
      top: {
        top: '0'
      },
      bottom: {
        bottom: '0'
      }
    },
    color: {
      bg: {
        polygon: {
          fill: '$bgSite'
        }
      },
      footer: {
        polygon: {
          fill: '$bgFooter'
        }
      },
      footerLast: {
        polygon: {
          fill: '$bgLastRow'
        }
      }
    }
  },

  compoundVariants: [
    {
      position: 'top',
      negative: true,
      css: {
        top: '-$$height'
      }
    },
    {
      position: 'bottom',
      negative: true,
      css: {
        bottom: '-$$height'
      }
    }
  ]
})

export default function Sepatator({
  position,
  color,
  climb,
  negative,
  reverse
}: VariantProps<typeof SVG>) {
  const IsOnTop = reverse ? !reverse : position === 'top'
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      position={position}
      color={color}
      climb={climb}
      reverse={reverse}
      negative={negative}
    >
      <g>
        <polygon
          points={
            IsOnTop
              ? climb
                ? '0 100 0 0 100 0'
                : '0 0 100 0 100 100'
              : climb
              ? '100 0 100 100 0 100'
              : '0 0 0 100 100 100'
          }
        />
      </g>
    </SVG>
  )
}
