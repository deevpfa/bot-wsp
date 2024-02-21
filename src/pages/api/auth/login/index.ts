import type { NextApiRequest, NextApiResponse } from 'next'
import { USERS_MOCK } from '../../user/mock'


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'POST') {
        const {email , password } = req.body
        let user = USERS_MOCK.find(user => user.email === email)
        if(!user) return res.status(404).json({ message : 'user not found'})
        res.status(200).json({ user , token : 123})
    }
}