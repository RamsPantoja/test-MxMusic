import gql from 'graphql-tag';

//Query para el discograf

export const songs_query = gql ` query {
    getSongs {
        id
        filename
        duracion
        originalname
    }
}`

export const song_query = gql ` query {
    getSong(id:"5da6a16c59ae7106e0196840"){
        id
        filename
        originalname
        contentType
        source
    }
}`