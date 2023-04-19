import { useState } from 'react'

import { SquareLoader } from '@/ui/Loaders'

interface LoaderCardServiceProps {
  columns: number
}

export default function LoaderCardService({ columns }: LoaderCardServiceProps) {
  const [coverSize] = useState({
    width: 364,
    heigth: 270,
    padding: 20
  })

  const { width, heigth, padding } = coverSize

  return (
    <>
      <SquareLoader
        columns={columns}
        width={width}
        height={heigth}
        padding={padding}
        marginBottom={padding}
      />
    </>
  )
}
