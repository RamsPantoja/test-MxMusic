import React, {Fragment} from 'react';
import { Query } from 'react-apollo';
import { songs_query } from '../../querys/querys';
import './canciones.css'

class Canciones extends React.Component {
    render () {
        return(
            <Fragment>
                <h1 className='title-content'>Canciones</h1>
                <div className='songs-container'>
                    <Query query={songs_query} pollInterval={1000}>
                        {({loading, error, data, startPolling, stopPolling}) => {
                            if (loading) return 'loading...';
                            if (error) return `Error: ${error.message}`;
                            return (
                                <Fragment>
                                    {data.getSongs.map( item => (
                                        <div key={item.id} className='display-song-container'>
                                            <div className='title-song' dir='auto'>{item.titulo}</div>
                                            <span className='row-artist'><a href="google.com">{item.artista}</a></span>
                                            <span className='row-artist'><a href="google.com">{item.album}</a></span>
                                        </div>
                                    ))}
                                
                                </Fragment>
                                   
                            );

                        }}
                    </Query>
                </div>
            </Fragment>
        );
    }
}

export default Canciones;