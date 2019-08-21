import gql from 'graphql-tag';

//Query para el discograf

export const songs_query = gql ` query {
    getSongs {
        id
        titulo
        album
        artista
        img
    }
}`
