import { gql } from 'apollo-server-express';

const typeDefs = gql `
    type User {
    id: ID
    username: String
    name: String
    email: String
    edad: Int
    tipo: typeClient
    pais: String
    genero: String
    cellphone: String
}
enum typeClient {
    FREE
    PREMIUM
}

type Artist {
    id: ID 
    artname: String
    biografia: String
    albums: [Album]
    songs: [Song]
}

type Album {
    id: ID
    name: String
    img: String
    songs: [Song]
}

type Song {
    id: ID
    songname: String
    source: String
    artname: String
    album: String
}

type Query {
    getUser(id: ID!): User
    getUsers(limit: Int): [User]
    getSongs(limit: Int) : [Song]
    getSong(id: ID!) : Song
    getAlbums(limit: Int) : [Album]
    getAlbum(id: ID!) : Album
    getArtists(limit: Int) : [Artist] 
    getArtist(id: ID!) : Artist
}
input InputUser {
    id: ID
    username: String!
    name: String!
    email: String!
    edad: Int
    tipo: typeClient!
    pais: String
    genero: String
    cellphone: String!
}
input InputSong {
    id: ID
    songname: String
    source: String
    artname: String
    album: String
}


type Mutation {
    addSong(input: InputSong): Song
    createUser(input: InputUser) : User
    deleteUser(id: ID!) : String
    updateUser(input: InputUser) : User
    updateSong(input:InputSong) : Song
}
`

export { typeDefs };