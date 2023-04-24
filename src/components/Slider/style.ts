import { styled } from '@/styles'
import { defaultTokens } from '@/styles/common'

export const Wrapper = styled('div', {
  overflow: 'hidden',

  variants: {
    fluid: {
      true: {
        height: '100%'
      }
    }
  }
})

export const Container = styled('div', {
  display: 'flex',

  variants: {
    axisY: {
      true: {
        flexDirection: 'column'
      },
      false: {
        // flexDirection: 'row'
      }
    },
    fluid: {
      true: {
        height: '100%'
      }
    }
  }
})

export const Slide = styled('div', {
  flex: '0 0 100%',
  minWidth: '0',
  position: 'relative',

  variants: {
    cols: {
      '2': {
        flex: `0 0 ${defaultTokens.sizes.projectMob}`,
        '@md': {
          flex: `0 0 ${defaultTokens.sizes.project}`
        }
      }
    }
  }
})
