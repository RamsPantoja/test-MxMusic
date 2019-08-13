import  mongoose from "mongoose";
import { Songs, Users, Artists, Albums } from './db';
import { rejects } from "assert";

mongoose.set('useFindAndModify', false);

export const resolvers = {
    Query: {
        getUsers: (root, {limit}) => {
            return Users.find({}).limit(limit)
        },
        getUser: (root, {id}) => {
            return new Promise( (resolve, object) => {
                Users.findById(id, (error, user) => {
                    if (error) rejects(error)
                    else resolve(user)
                })
            })
        },
        getSongs: (root, {limit}) => {
           return Songs.find({}).limit(limit)
        },
        getSong: (root, {id}) => {
            return new Promise((resolve, object) => {
                Songs.findById(id, (error, song) => {
                    if(error) rejects(error)
                    else resolve(song)
                })
            });
        },
        getAlbums: (root, {limit}) => {
           return Albums.find({}).limit(limit)
        },
        getAlbum: (root, {id}) => {
            return new Promise((resolve, object) => {
                Albums.findById(id, (error, album) => {
                    if(error) rejects(error)
                    else resolve(album)
                })
            });
        },
        getArtists: (root, {limit}) => {
            return Artists.find({}).limit(limit)
        },
        getArtist: (root, {id}) => {
            return new Promise((resolve, object) => {
                Artists.findById(id, (error, artist) => {
                    if(error) rejects(error)
                    else resolve(artist)
                });
            });
        }
    },
    Mutation: {
        createSong: (root, {input}) => {
            const newSong = new Songs({
                titulo : input.titulo,
                artista : input.artista,
                album : input.album,
                duracion : input.duracion,
                url: input.url,
                img: input.img
            });
            newSong.id = newSong._id;
            return new Promise((resolve, object) => {
                newSong.save((error) => {
                    if (error) rejects(error)
                    else resolve(newSong)
                });
            });
        },
        updateUser: (root, {input}) => {
            return new Promise((resolve, object) => {
                Users.findOneAndUpdate({_id:id}, input, {new: true}, (error, user) => {
                    if(error) rejects(error);
                    else resolve(user);
                });
            });
        },
        deleteUser: (root, {id}) => {
            return new Promise((resolve, object) => {
                Users.findOneAndDelete({_id: id}, (error) => {
                    if(error) rejects(error)
                    else resolve('Se ha eliminada Correctamente');
                })
            })
        },
        createUser: (root, {input}) => {
            const newUser = new Users({
                username: input.username,
                name: input.name,
                email: input.email,
                edad: input.edad,
                tipo: input.tipo,
                pais: input.pais,
                genero: input.genero,
                cellphone: input.cellphone
            });
            newUser.id = newUser._id;

            return new Promise((resolve, object) => {
                newUser.save((error) => {
                    if(error) rejects(error)
                    else resolve(newUser)
                });
            })
        }
    }
}