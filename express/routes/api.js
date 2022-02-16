const express = require('express')
const router = express.Router()
const select = require('../dataBase/select')

router.get('/', (req,res) => {
    res.send({
        name: 'api',
        query: req.query,
        url: req.url,
        method: req.method
    })
})

router.get('/query', select.query)



module.exports = router
