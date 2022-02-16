const mysql = require('mysql')

const config = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'node'
}

// 将连接与请求封装成函数方便调用，通过module.exports暴露出去
module.exports = {
    connect: function (sql, sqlArr, callback) {
        let pool = mysql.createPool(config)
        pool.getConnection((err, conn) => {
            if (err) {
                return console.log("数据库连接池连接失败")
            }

            console.log("数据库连接池连接成功")
            // 事件驱动回调
            conn.query(sql, sqlArr, callback);
            // 释放连接
            conn.release();
        })
    }
}
