import { styled } from '@/styles'

const SVG = styled('svg', {
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: 0,
  width: '100%',
  height: '100%',
  opacity: '.25',
  pointerEvents: 'none',
  transform: 'translateY(0)',
  filter: '$colors$texture'
})

export default function Texture() {
  return (
    <SVG id="texture">
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".8"
          numOctaves="4"
          stitchTiles="stitch"
        >
          {/* <animate
            attributeName="baseFrequency"
            values="10;15;10"
            keyTimes="0;.1;1"
            begin="0s"
            dur="5s"
            repeatCount="indefinite"
          /> */}
        </feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"></rect>
    </SVG>
  )
}
