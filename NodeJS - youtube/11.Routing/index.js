const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('URL страницы: ' + req.url);
    if(req.url === '/index' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/about.html').pipe(res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
   
})
server.listen(3000);