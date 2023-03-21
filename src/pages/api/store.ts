import { getStore } from '@/api'
import { StoreApiProps } from '@/types'

import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreApiProps>
) {
  getStore().then((store) => res.status(200).json({ store } as StoreApiProps))
}
