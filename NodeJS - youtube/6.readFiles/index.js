// const fs = require('fs');

// const file_readed = fs.readFileSync('text.txt', 'utf8');
// const message = 'Привет, как дела?\n' + file_readed;
// fs.writeFileSync('some_new_file.txt', message);
//======================async
const fs = require('fs');

fs.readFile('text.txt', 'utf8', (err, data)=>{
    console.log('data: ' + data);
});

fs.writeFile('some.txt', 'Hi, its me', (err, data)=>{});

console.log('Test');