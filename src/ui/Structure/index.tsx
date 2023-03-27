import { styled } from '@/styles'
import { defaultTokens } from '@/styles/common'

export const Wrapper = styled('div', {
  display: 'grid',
  align: 'start',
  gridTemplateColumns: '1fr',
  gridTemplateAreas: `'header' 'content' 'footer'`,
  gridAutoRows: 'max-content',
  placeContent: 'stretch space-between',
  placeItems: 'stretch',
  position: 'relative',
  zIndex: '$1'
})

export const Container = styled('div', {
  padding: '$10',
  mx: 'auto',
  width: '100%',
  zIndex: '$1',
  variants: {
    pdy0: {
      true: {
        py: '0'
      }
    },
    pdx2: {
      true: {
        px: '$5'
      }
    },
    size: {
      xs: {
        maxWidth: defaultTokens.sizes.xs
      },
      sm: {
        maxWidth: defaultTokens.sizes.sm
      },
      md: {
        maxWidth: defaultTokens.sizes.md
      },
      lg: {
        maxWidth: defaultTokens.sizes.lg
      },
      xl: {
        maxWidth: defaultTokens.sizes.xl
      }
    }
  }
})

export const Main = styled('main', {
  overflowX: 'clip',
  gridArea: 'content',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center'
})

export const Row = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  placeContent: 'start',
  justifyContent: 'space-between',

  variants: {
    hover: {
      true: {
        hover: '$gray3'
      }
    },
    align: {
      center: {
        alignItems: 'center',
        placeContent: 'center'
      },
      end: {
        alignItems: 'flex-end',
        placeContent: 'end'
      }
    },
    direction: {
      col: {
        flexDirection: 'column'
      },
      row: {
        flexDirection: 'row'
      }
    }
  }
})

export const Col = styled('div', {})

export const OverflowLimit = styled('div', {
  overflow: 'hidden',
  borderRadius: '$xs',
  transition: '$default',
  width: '100%',
  height: '100%',
  position: 'absolute',
  transformStyle: 'preserve-3d',
  left: 0,
  bottom: 0,
  boxSizing: 'unset'
})

export * from './Separator'
