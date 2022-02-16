const mysql = require('mysql')
// 连接数据库
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'node'
})

// 执行sql语句
db.query('select * from node_mysql_user', (err, res) => {
    if (err) return console.log(err)
    console.log(res)
})
