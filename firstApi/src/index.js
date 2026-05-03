const http = require('http')

const routes = require('./routes.js')

const server = http.createServer((request, response) => {
    console.log(`request method: ${request.method} | endpoint: ${request.url}`)
    const route = routes.find((routeObj) => (
        routeObj.endpoint === request.url && routeObj.method === request.method
    ))

    if (route) {
        route.handler(request, response)
    } else {
        response.writeHead(404, { 'content-type': 'text/html' })
        response.end(`Cannot ${request.method} ${request.url}`)
    }
    // if (request.url === '/users' && request.method === "GET") {
    //     UserController.listUsers(request, response)
    // }
})

server.listen(3000, () => console.log('Server started at http://localhost:3000'))