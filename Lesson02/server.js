const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const userDbPath = path.join(__dirname, '/users.json');
console.log('userDbPath: ', userDbPath);
const userData = JSON.parse(fs.readFileSync(userDbPath, 'utf8'));

const createServer = port => {
    app.use(bodyParser.json());


    app.get('/users', (req,res) => {
        res.json(userData);
    });
    app.get('/users/:id', (req,res)=> {
        const id = req.params.id;
        const filtredArr = userData.users.filter(el => el.id === id);
        res.json({users: filtredArr});
    })

    app.post('/users', (req, res) => {
        const newData = {users: [...userData.users, req.body]};
        fs.writeFileSync(userDbPath, JSON.stringify(newData));
        res.json(newData);
    })
    app.delete('/users/:id', (req, res) => {
        const id = req.params.id;
        const newArr = userData.users.filter(el => el.id !== id);
        fs.writeFileSync(userDbPath, JSON.stringify({users: newArr}));
        res.json({users: newArr});
    })
    app.put('/users/:id', (req,res) => {
        const id = req.params.id;
        const newArr = userData.users.map(el => {
            if(el.id === id) return {...el, ...req.body}
            return el;
        });
        fs.writeFileSync(userDbPath, JSON.stringify({users: newArr}))
        res.json({users: newArr})
    })
    app.listen(port, ()=> {
        console.log(`Server start on port ${port}`);
    });
   

}
module.exports = createServer;