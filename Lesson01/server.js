// const http = require('http');
const express = require('express');



// const startServer = port => {
//     const server = http.createServer((req, res) => {
//         res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
//         res.end('Its work!');
    
//     })
//     server.listen(port, err => {
//         err ? console.log('Что-то пошло не так!') : 
//         console.log(`Работает на порту ${port}`);
//     })
// }
// module.exports = startServer;

//=====================через Express===============
const startServer = port => {
    const server = express();

    server.post('/', (req,res) => {
        // res.send('привет');
        res.send('Это метод POST')
    });
    
    server.listen(port, ()=>{
        console.log(`Сервер работает на порту ${port}`);
    });
};
module.exports = startServer;

