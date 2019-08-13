import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

//Para conectar a la base de datos mongodb
mongoose.connect('mongodb://localhost/spotifydb', {useNewUrlParser: true});

// Estructuracion del esquema de la base de datos
const songsSchema = new mongoose.Schema({
    titulo: String,
    artista: String,
    album: String,
    duracion: String,
    img: String,
    urlsong: String
});
export const Songs = mongoose.model('Songs', songsSchema);

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