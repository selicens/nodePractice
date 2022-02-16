const db = require('./connect')

let  query = (req, res) => {
   const sql = `select * from node_mysql_user`
   const sqlArr = []
   const callback = (err, data) => {
       if (err) {
           return res.send({code: 400, message:'查询失败'})
       }
       res.send({code: 200, message:'查询成功', data})
   }
   // 调用封装好的函数将值传入
   db.connect(sql, sqlArr, callback)
}

module.exports = {query}
