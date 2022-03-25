const { fstat } = require('fs')
let http = require('http')
let server = http.createServer()
let fs = require('fs')
server.on('request', (request, Response) => {
    fs.readFile('indeax.html', (err, data) => {
        if (err) {
            Response.writeHead(404, {
                'Content-type': 'text/html; charset=utf-8'
            })
            Response.end("Fichier n'éxiste pas")
        } else {
        Response.writeHead(200, {
            'Content-type': 'text/html; charset=utf-8'
        })
        Response.end(data)
        }   
    })

})

server.listen(4980)