import gql from 'graphql-tag';

//Query para el discograf

export const SONGS_QUERY = gql `{
    getSongs {
        id
        songname
        source
        artist {
            artname
            biografia
        }
        album {
            name
            img
        }
    }
}`

export const SONG_QUERY = gql `
    query Song($track: ID!){
        getSong(id: $track){
            source
            id
            songname
        }
    }
`;