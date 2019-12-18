import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const MongoURI = 'mongodb://localhost:27017/spotifydb';
mongoose.connect(MongoURI);


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
    img: String,
    songs: Array
});
export const Albums = mongoose.model('Albums', albumsSchema);


const songSchema = new mongoose.Schema({
    songname: String,
    source: String,
    artname: String,
    album: String
});
export const Song = mongoose.model('songs', songSchema);