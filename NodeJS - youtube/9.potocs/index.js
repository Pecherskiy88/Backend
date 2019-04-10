 const fs = require('fs');

 //=============чтение файлов=============
 const myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');

//  myReadShort.on('data', chunk => {
//      console.log('Новые данные получены:\n' + chunk)
//  })

//=============записывать данные==============

const myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

myReadShort.on('data', chunk => {
    console.log('Новые данные получены:\n' + chunk);
    myWriteShort.write(chunk);
})