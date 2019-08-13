import gql from 'graphql-tag';

//Query para el discograf

export const songs_query = gql ` query {
    getSongs {
        titulo
        album
        artista
        img
    }
}`
