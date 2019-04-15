const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'))

app.get('/', (req,res) => {
    res.render('main');
});
app.get('/about', (req,res) => {
    res.render('about');
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