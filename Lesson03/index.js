const express = require('express');
const app = express();
const logger = require('morgan');

const router = require('./routes');

app.use(logger('tiny'));
app.use(express.json());
app.use('/', express.static('client'));
app.use('/assets/audio', express.static('assets/audio'));
app.use('/assets/video', express.static('assets/video'));

app.use('/api', router);

app.listen(4000, ()=> {
    console.log('server started on 4000 port');
})



