const http = require('http')
const url = require('url')

function start(route) {
    function request(req, res) {
        const pathName = url.parse(req.url).pathname
        route(pathName)
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.end("hello node")
    }
    http.createServer(request).listen(5555, ()=>{
        console.log('http://127.0.0.1:5555')
    })
}

module.exports = {start}
