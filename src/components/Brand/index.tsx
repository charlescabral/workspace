import { BrandIcon } from '@/ui/Icons'
import { Wrap, H1 } from './style'

export default function Brand() {
  return (
    <Wrap href={`/`}>
      <BrandIcon size={58} fill="$brand" />
      <H1>
        <span className="name">Charles Cabral</span>
        <span className="career">Front-end Developer</span>
      </H1>
    </Wrap>
  )
}
