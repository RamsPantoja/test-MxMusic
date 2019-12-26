import React, {Fragment} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SONGS_QUERY } from '../../querys/querys';
import './canciones.css'

function Canciones (props) {
    const {loading, error, data } = useQuery(SONGS_QUERY,{
        pollInterval: 1000
    });
    if (loading) return 'loading...';
    if (error) return `Error! ${error.message}`;
    return(
        <Fragment>
            <h1 className='title-content'>Canciones</h1>
            <div className='overflow-content'>
                <div className='songs-container'>
                    <Fragment>
                        {data.getSongs.map( item => (
                            <div key={item.id} className='display-song-container' onDoubleClick={(e) => props.onDoubleClick(item.source, e)}>
                                <div className='title-song' dir='auto'>{item.songname}</div>
                                <span className='row-artist'><a href="google.com">lol</a></span>
                                <span className='row-artist'><a href="google.com">lol</a></span>
                            </div>
                        ))}         
                    </Fragment>
                </div>
            </div>
        </Fragment>
    );
}


export default Canciones;