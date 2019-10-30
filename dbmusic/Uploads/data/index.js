import express from 'express';
import mongoose from 'mongoose';
import Grid from 'gridfs-stream';
import bodyParser from 'body-parser';
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';
import methodOverride from 'method-override';
import crypto from 'crypto';
import path from 'path';

const fileInfoSchema = new mongoose.Schema({
    originalname: String,
    filename: String,
    duracion: Number,
    contentType: String
});

const fileInfo = mongoose.model('fs.files', fileInfoSchema);

mongoose.set('useFindAndModify', false);

const app = express();

//middleware

app.use(bodyParser.json());
app.use(methodOverride('_method'));


app.set('views', 'C:/Users/Rams/Documents/Web/Spotify/dbmusic/Uploads/views');
app.set('view engine', 'ejs');


//MongoURI

const MongoURI = 'mongodb://localhost/spotifydb';

//mongo connection

mongoose.connect(MongoURI, {useNewUrlParser:true});
const conn = mongoose.connection;

Grid.mongo = mongoose.mongo;

var gfs;

conn.once('open', () => {
    console.log('--connection open--');
    gfs = Grid(conn.db);
    gfs.collection('fs');
});


//Storage Engine

const storage = new GridFsStorage({
    url: MongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = path.parse(file.originalname).name;
          
            const fileInfo = {
                filename: filename + path.extname(file.originalname)
            }
            resolve(fileInfo);
        });
    }
})

const upload = multer({storage});


// @route GET /
// @desc Loads form
app.get('/', (req, res) => {
    res.render('index');
   
});

// @route POST /upload
// @desc Uploads files to DB

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({file: req.file});
});


//@route GET /song/:filename
//@desc display song

app.get('/song/:filename', (req, res) => {
    gfs.files.findOne({filename: req.params.filename}, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file'
            })
        }
        if (file.contentType === 'audio/x-m4a') {
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            return res.status(404).json({
                err: 'Not an File'
            })
        }

    })
})



app.listen(4000, () => {
    console.log('Server ON: http://localhost:4000');
})