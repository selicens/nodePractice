const server = require('./server')
const route = require('./router')

server.start(route.route)
