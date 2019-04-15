const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors'); //
const multer  = require('multer'); //


const server = express();

const storage = multer.diskStorage({ //
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
const upload = multer({ storage: storage }) //

mongoose.connect(
    'mongodb+srv://pecherskiy:42497330sS*@pecherskiy-fljt6.mongodb.net/collection?retryWrites=true', {useNewUrlParser: true}
    );
    
    const startServer = port => {
        server.use(cors());
        server.use(express.json());

        
        const UsersSchema = new mongoose.Schema({
            email: String,
            name: String,
            password: String,
            phone: Number,
        });
        
        const UserModel = mongoose.model('User', UsersSchema, 'Petya-Collection');

        server.get('/', (req,res) => {
            UserModel.find({}, (err, docs) => {
                if(err) console.log(err);
                res.json(docs)
            })
            UserModel.find()
        })

        server.get('/:id', (req, res)=> {
            const id = req.params.id;
            UserModel.findById(id).then(doc => {
                res.json(doc.phone);
            })
        })

        server.post('/', (req, res) => {
            const body = req.body;

            const newUser = new UserModel(body);
            newUser.save((err, doc) => {
                if(err) console.log(err);
            });
        })
        
        server.post('/users', upload.single('file'), (req, res) => { //
            console.log('file: ',req.file);
            console.log('body: ',req.body);
            res.json({status: 'success'});
        })

        server.listen(port, ()=> {
        });

}

startServer(3000);
