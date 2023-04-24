import { styled } from '@/styles'

export const Section = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  height: '$spotlight',
  position: 'relative',
  padding: '$2xl 0 $3xl',
  background:
    'radial-gradient(circle at 94.35384114583333% 89.61588541666666%, #3a7f49 0%, 20%, rgba(171,144,221,0) 40%), radial-gradient(circle at 6.503906249999999% 88.037109375%, rgb(252 221 98 / 99%) 0%, 25%, rgba(230,34,110,0) 50%), radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #7fc656 0%, 42%, rgba(111,61,204,0) 70%), radial-gradient(circle at 93.6865234375% 11.42578125%, #3d7238 0%, 42%, rgba(56,74,211,0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #FFFFFF 0%, 100%, rgba(255,255,255,0) 100%)',
  backgroundRepeat: 'repeat-y'
})

export const Wrapper = styled('div', {
  '@md': {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center'
  }
})

export const Infos = styled('div', {
  width: '100%',
  '@md': {
    width: '50%'
  },
  '@lg': {
    width: '60%'
  },

  h2: {
    color: '$spotlightTitle',
    marginBottom: '$10',
    '@md': {
      marginBottom: '$20'
    }
  }
})

export const Jobs = styled('div', {
  position: 'relative',
  width: '100%',
  '@md': {
    width: '50%'
  },
  '@lg': {
    width: '30%'
  }
})

export const Action = styled('div', {
  display: 'none',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',

  '@md': {
    display: 'flex'
  },

  'a, buttom': {
    marginRight: '$10'
  }
})
