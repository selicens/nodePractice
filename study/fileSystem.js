const fs = require('fs')
const val = '梦想不止诗和远方，还有想见的人，想做的事'

// 写
fs.writeFile('./test.txt', val, (err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log('写入成功')
    }
})

// 读
fs.readFile('./test.txt', 'utf-8', (err, data) =>{
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

// node fileSystem.js
