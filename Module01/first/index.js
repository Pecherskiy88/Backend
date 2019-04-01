// const misc = require('./simpleModule');
// console.log('Добавь %d к 10 мы получим %d', misc.x, misc.addX(10));
//==============================================


// const user = require('./simpleModule');
// // const u = new user.User();
// // vs
// const u = new user('Alex', 'email@mail.com');
// console.log(u);

//==============================================
// require('./simpleModule')(9050);
// vs
// const checkingPowerLevel = require('./simpleModule');
// checkingPowerLevel(9050);

//==============================================
// PATH.extname
// const path = require('path'); // объект с методами из коробки.
// console.log(path.extname('index.html'));// показывает какое расширение у файла
// Возвращает: .html
//================
// path.join
// const path = require('path');

// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

// Возвращает: /foo/bar/baz/asdf
//================
// path.parse
// const path = require('path');

// console.log(path.parse('/home/user/dir/file.txt'));
// Вернет объект:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
//================
// // path.resolve
// const path = require('path');

// console.log(path.resolve('/foo/bar', './baz'));
// // Возвращает: /foo/bar/baz
// console.log(path.resolve('/foo/bar', '/tmp/file'));
// // Возвращает: /tmp/file

// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// // Возвращает '/Users/pecherkiy/Documents/BootCamp9/Backend/Module01/wwwroot/static_files/gif/image.gif'
//==============================================




