const http = require('http');

const server = http.createServer((req, res) => {
    console.log("URL стрыницы: " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
    res.end('Роланд привет, how are you');
});
server.listen(3000);
console.log('Мы отслеживаем порт 3000');
