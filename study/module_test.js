const test = require('./module') // require的值是module.exports优先，exports导出的方法，会传递给module.exports
/*
* 情况1：exports和module.exports同时存在，且类型不同，exports在前只显示module.exports暴露的值，module.exports在前暴露的值都显示
* 情况2：exports和module.exports同时存在，且类型相同，暴露的值都显示
* 情况3：exports和module.exports各自存在，显示各自暴露的值
*/

console.log(module, test)
/*
* 情况一：[Function: hello]
* 情况一变种：hello: 'hello', happy: [Function (anonymous)]
* 情况二：happy: 'happy', hello: 'hello'
*/
