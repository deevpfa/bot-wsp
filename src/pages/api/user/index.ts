import type { NextApiRequest, NextApiResponse } from 'next'
import { USERS_MOCK } from './mock'
// import { iUser } from '../../../interfaces/user'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  res.status(200).json(USERS_MOCK)
}