import { styled } from '@/styles'
import { Row, Col } from '@/ui/Structure'

export const FooterMain = styled('footer', {
  backgroundColor: '$bgFooter',
  position: 'relative',
  gridArea: 'footer',
  paddingTop: '$10',
  width: '100%',

  '.subtitle': {
    marginBottom: '$10'
  }
})

export const Social = styled(Col, {
  paddingRight: '$40',
  '.social > a, > div p': {
    marginLeft: '$10'
  }
})
export const Sponsors = styled(Col, {
  '.sponsors > a': {
    marginRight: '$10'
  }
})

export const FirstRow = styled(Row, {
  paddingTop: '$10',
  paddingBottom: '$20'
})

export const LastRow = styled(Row, {
  backgroundColor: '$bgLastRow',
  position: 'relative',
  py: '$10',
  code: {
    margin: 0
  }
})

export const IconsLicenseCCbySA = styled('span', {
  $$iconSize: '1rem',
  $$iconGap: '$$iconSize/2',
  display: 'inline-block',
  marginBottom: '$4',
  backgroundImage: 'url(/img/icons/cc-by.svg)',
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
    backgroundImage: 'url(/img/icons/cc-nc.svg)'
  },
  '&::after': {
    left: 'calc(2 * $$iconSize + $$iconGap)',
    backgroundImage: 'url(/img/icons/cc-sa.svg)'
  }
})
