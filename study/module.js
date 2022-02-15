/* // 情况一
exports.happy = 'happy'
module.exports = function hello() {
    console.log('hello')
}*/

/* // 情况一变种
module.exports.hello = 'hello'
exports.happy = function () {
    console.log('happy');
}
*/

// 情况二
exports.happy = 'happy'
module.exports.hello = 'hello'
