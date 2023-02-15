import { styled } from '@/styles'

export const WrapSwitch = styled('div', {
  '.SwitchRoot': {
    width: '42px',
    height: '25px',
    backgroundColor: '#a9a9a9',
    borderRadius: '9999px',
    position: 'relative',
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

    '&:focus': {
      boxShadow: '0 0 0 2px black'
    },
    '&[data-state="checked"]': {
      backgroundColor: 'black'
    }
  },

  '.SwitchThumb': {
    display: 'block',
    width: '21px',
    height: '21px',
    backgroundColor: 'white',
    borderRadius: '9999px',
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    willChange: 'transform',

    '&[data-state="checked"]': {
      transform: 'translateX(19px)'
    }
  }
})
