const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let connections = [];


io.sockets.on('connection', socket => {
    console.log('Успешное соединение');
    connections.push(socket);

    socket.on('disconnect', data => {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Отключились');
    });

    socket.on('send message', (data) => {
        io.sockets.emit('add message', {message: data.message, name: data.name, className: data.className})
    });
});