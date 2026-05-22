// index mais para web

import http from 'node:http'

// recebe 2 parametros req e rest 
const server = http.createServer ((req, res) => {
return res.end("Hello world")
})

server.listen(3333)

