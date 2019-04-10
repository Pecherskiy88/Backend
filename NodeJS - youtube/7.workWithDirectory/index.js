const fs = require('fs');

// fs.unlink('file.txt', ()=>{}) // удалить файл

// fs.mkdirSync('new-one'); // создать директорию
// fs.rmdirSync('new-one'); // удалить директорию

// fs.mkdir('new-one', ()=>{
//     fs.writeFile('./new-one/some_new.txt', 'Hello world', ()=> {
//         console.log('it works!');
//     })
// }); // создали директорию, в которой создали файл и наполнили его контентом.

fs.unlink('./new-one/some_new.txt', ()=>{
    fs.rmdir('new-one', ()=>{});
}) // сначала удаляем файлы в директории, потом саму директорию