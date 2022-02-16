const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send({
        name: 'index',
        query: req.query,
        url: req.url,
        method: req.method
    })
})

module.exports = router
