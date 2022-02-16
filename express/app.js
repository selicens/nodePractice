const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

/*
* 除了错误中间件，其他中间件须放置在路由前才能生效
* 中间件与路由共享req，res
* 中间件与路由区别为多了一个next参数，错误中间件还有err参数
* 中间间方法完成后需要执行next()
*/
app.use(cors()) // 解决前后端跨域问题中间件
app.use(express.json()) // 解析JSON数据的中间件
app.use(express.urlencoded({ extended: false })) // 解析表单数据的中间件

// 静态资源
app.use(express.static(path.join(__dirname, '/public')))

// 路由
const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
app.use('/index', indexRouter)
app.use('/api', apiRouter)

// 错误级中间件，需放置在路由的后面
app.use((err, req, res, next) => {
    res.send(err.message)
})

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})
