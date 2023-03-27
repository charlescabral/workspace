import { styled } from '@/styles'

export const FooterMain = styled('footer', {
  backgroundColor: '$bgFooter',
  position: 'relative',
  gridArea: 'footer',
  py: '$10',
  width: '100%'
})

export const IconsLicenseCCbySA = styled('span', {
  $$iconSize: '1rem',
  $$iconGap: '$$iconSize/2',
  display: 'inline-block',
  backgroundImage: 'url(/img/cc-by.svg)',
  width: 'calc(3* $$iconSize + $$iconGap)',
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
    left: 'calc($$iconSize + $$iconGap/2)',
    backgroundImage: 'url(/img/cc-nc.svg)'
  },
  '&::after': {
    left: 'calc(2 * $$iconSize + $$iconGap)',
    backgroundImage: 'url(/img/cc-sa.svg)'
  }
})
