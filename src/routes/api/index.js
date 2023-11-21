import {Router} from 'express'

const router = router()

router.get('/api', (req, res) => {
    res.send({ msg: 'Inside API Endpoints' })
})

export default router