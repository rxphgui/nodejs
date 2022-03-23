let http = require('http')
let server = http.createServer()
let url = require('url')

server.on('request', (request, Response) => {

    Response.writeHead(200)

    let query = url.parse(request.url, true).query
    if (query.name == undefined) {
        Response.write('Bonjour Anonyme')
    } else {
        Response.write('Bonjour ' + query.name)
    }
    
    Response.end()
})

server.listen(4980)