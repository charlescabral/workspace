import { parseISO, format, setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type Props = {
  dateString: string
}

export default function Date({ dateString }: Props) {
  setDefaultOptions({ locale: ptBR })
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'd LLL. yyyy')}</time>
}
