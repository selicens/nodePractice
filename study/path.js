const path = require('path')

// path.join()将多个路径拼接为完整的路径字符串
const pathStr = path.join('/a', '/b/c', '../', './d', '/e')
// ../会向前抵消一个路径
console.log('pathStr',pathStr); // \a\b\d\e
const pathStr2 = path.join(__dirname, './index.txt')
console.log('pathStr2',pathStr2); // xx\index.txt

const testPath = '/a/b/c/test.html'
// path.basename()返回路径最后一部分
const pathBase = path.basename(testPath)
// 第二参数为可选扩展文件名
const pathBase2 = path.basename(testPath, '.html')
console.log('pathBase',pathBase) // test.html
console.log('pathBase2', pathBase2) // test

// path.extname()返回路径中文件的扩展名
const pathExt = path.extname(testPath)
console.log('pathExt',pathExt); // .html

// path.dirname()返回路径名，除了最后的文件
const pathDir = path.dirname(testPath)
console.log('pathDir',pathDir); // /a/b/c

// node path.js
