import { BrandIcon } from '@/components/SvgIcons/'
import { css } from '@/styles'

const viewport = css({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
})

export default function HomeTemplate() {
  return (
    <>
      <main className={viewport()}>
        <BrandIcon fill="gray" size={100} />
      </main>
    </>
  )
}
