import { getMarkdownContent } from '@/api'
import { StoreApiProps } from '@/types'

import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreApiProps>
) {
  getMarkdownContent('partials', ['store']).then(([partial]) =>
    res.status(200).json({
      store: partial.store.data
    } as StoreApiProps)
  )
}
