import {Router} from 'express'

import persons from './persons'

const router = router()

router.get('/api', (req, res) => {
    res.send({ msg: 'Inside API Endpoints' })
})

router.use('/persons', persons)

export default router