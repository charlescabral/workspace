import { forwardRef } from 'react'
import Image from 'next/image'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { PartialImageProps } from '@/types'
import { styled } from '@/styles'
import { fadeIn } from '@/styles/utils'

const Project = styled(Image, {
  width: '100%',
  height: 'auto',
  zIndex: '$1',
  animation: `${fadeIn} 1s`,
  visibility: 'hidden',
  display: 'none',
  '@md': {
    visibility: 'visible',
    display: 'block'
  }
})

const Root = styled(ScrollArea.Root, {
  width: '100%',
  height: '100%',
  overflow: 'hidden'
})

const Viewport = styled(ScrollArea.Viewport, {
  size: '100%',
  paddingBottom: 60,
  borderRadius: 'inherit',
  '@md': {
    display: 'block'
  }
})

const Scrollbar = styled(ScrollArea.Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: '$4 $3',

  '&[data-orientation="vertical"]': {
    width: '$9',
    paddingBottom: 72
  }
})
const Thumb = styled(ScrollArea.Thumb, {
  flex: '1',
  background: '$black10',
  borderRadius: '$sm',
  position: 'relative',
  border: '1px solid $white10',

  '&::before': {
    content: '',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: '$6',
    minHeight: '$6'
  }
})

const Preview = forwardRef<HTMLDivElement, PartialImageProps>(function MyInput(
  { deskEntire },
  ref
) {
  return (
    <Root className="ScrollAreaRoot" ref={ref}>
      <Viewport className="ScrollAreaViewport">
        {deskEntire && (
          <Project
            alt="Project"
            width={400}
            height={400}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            src={`/img/projects/${deskEntire}`}
          />
        )}
      </Viewport>
      <Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
        <Thumb className="ScrollAreaThumb" />
      </Scrollbar>
    </Root>
  )
})

export default Preview
