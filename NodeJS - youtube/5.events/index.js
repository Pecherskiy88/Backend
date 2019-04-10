// const events  = require('events');

// const myEmit = new events.EventEmitter();

// myEmit.on('some_event', text => {
//     console.log(text);
// });

// myEmit.emit('some_event', 'Обработчик событий сработал');

//=======================Пример

const events = require('events');
//const util = require('util'); // если бы работали не через класс, а через конструктор
const EventEmitter = events.EventEmitter;

class Cars extends EventEmitter {
  constructor(model) {
    super();
    this.model = model;
  }
}

//util.inherits(Cars, events.EventEmitter);

let bmw = new Cars('BMW');
let audi = new Cars('Audi');
let jaguar = new Cars('Jaguar');

let cars = [bmw, audi, jaguar];
cars.forEach(function(car){
  car.on('speed', function(text) {
    console.log(car.model + " speed is - " + text);
  });
});

bmw.emit('speed', '254.5 km');﻿