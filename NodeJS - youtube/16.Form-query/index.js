const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');

app.use('/public', express.static('public'))

app.get('/', (req,res) => {
    res.render('main');
});
app.get('/about', (req,res) => {
    res.render('about');
});
app.get('/about/:id', (req,res) => {
    res.render('about');
    console.log(req.params);
    console.log(req.query);
});
app.post('/main', urlencodedParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('about-success', {data: req.body});
});
app.get('/news', (req, res) => {
    const obj = {
        title: 'Новость',
        id: 4,
        paragraph: ['Параграф', 'Обычный текст', 'Числа: 2,4,6', 99]
    }
    res.render('news', {
        newsId: req.params.id,
        newParam: 1234,
        obj,
    });
})

app.listen(3000);