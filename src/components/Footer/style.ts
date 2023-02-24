import { styled } from '@/styles'

export const FooterMain = styled('footer', {
  gridArea: 'footer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$10'
})

export const IconsLicenseCCbySA = styled('span', {
  $$iconSize: '1rem',
  display: 'inline-block',
  backgroundImage: 'url(/img/cc-by.svg)',
  width: 'calc(3* $$iconSize + 4px)',
  height: '$$iconSize',
  float: 'left',
  position: 'relative',

  '&, &::after, &::before': {
    backgroundSize: '$$iconSize',
    backgroundRepeat: 'no-repeat'
  },

  '&::before, &::after': {
    position: 'absolute',
    top: 0,
    backgroundPosition: '50%',
    size: '$$iconSize',
    display: 'inline-block',
    content: '""'
  },
  '&::before': {
    left: 'calc($$iconSize + 2px)',
    backgroundImage: 'url(/img/cc-nc.svg)'
  },
  '&::after': {
    left: 'calc(2 * $$iconSize + 4px)',
    backgroundImage: 'url(/img/cc-sa.svg)'
  }
})
