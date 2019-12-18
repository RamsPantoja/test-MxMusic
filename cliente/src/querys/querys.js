import gql from 'graphql-tag';

//Query para el discograf

export const songs_query = gql ` query {
    getSongs {
        id
        songname
        artname
    }
}`

export const song_query = gql ` query {
    getSong(id:"5df9a62f11a415166094b88f"){
        id
        songname
        source
        artname
    }
}`