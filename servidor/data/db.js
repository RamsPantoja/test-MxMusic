import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const MongoURI = 'mongodb+srv://RamsPantoja:Left4Dead2@devclosterrams-nodjj.mongodb.net/musicdb?retryWrites=true&w=majority';
mongoose.connect(MongoURI, {useUnifiedTopology: true, useNewUrlParser:true});




// Estructuracion del esquema de la base de datos
const artistsSchema = new mongoose.Schema({
    artname: String,
    biografia: String,
    albums: Array,
    songs: Array
});
export const Artists = mongoose.model('Artists', artistsSchema);

const usersSchema = new mongoose.Schema({
    username: String,
    name: String,
    nombre: String,
    email: String,
    edad: Number,
    tipo: String,
    pais: String,
    genero: String,
    cellphone: String
});
export const Users = mongoose.model('Users', usersSchema);

const albumsSchema = new mongoose.Schema({
    name: String,
    img: String
});
export const Albums = mongoose.model('Albums', albumsSchema);


const songSchema = new mongoose.Schema({
    songname: String,
    source: String,
    artist: Object,
    album: Object
});
export const Song = mongoose.model('songs', songSchema);