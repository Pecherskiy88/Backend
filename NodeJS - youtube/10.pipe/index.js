const fs = require('fs');
const http = require('http');

const myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');
const myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

// myReadShort.on('data', chunk=>{
//     console.log('Новые данные получены');
//     myWriteShort.write(chunk);
// })
//=============через pipe
// myReadShort.pipe(myWriteShort);
// ============пример с сервером

// const server = http.createServer((req,res) => {
//     console.log('URL of page: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//     const myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     myReadShort.pipe(res);

// });

// server.listen(3000);
// console.log('Мы отслеживаем порт 3000');

// ================= выведем JSON

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    const obj = {
        model: 'Audi',
        speed: '234.5',
        wheels: 4,
    };
    res.end(JSON.stringify(obj));
})
server.listen(3000);