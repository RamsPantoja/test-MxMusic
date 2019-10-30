import React, {Fragment} from 'react';
import { Query } from 'react-apollo';
import { songs_query } from '../../querys/querys';
import { song_query } from '../../querys/querys';
import './player.css';
import ComponentAudio from './audiocomponent';

class Discografia extends React.Component {
    render () {
        return (
            <div className='discograf'>
                <Query query={songs_query}>
                    {({loading, error, data}) => {
                        if(loading) return '';
                        if(error) return `Error: ${error.message}`;
                        return (
                            <div className='discograf-content'>
                                <img src={data.getSongs[2].img} alt="cover" height="60" width="60"/>
                                <ul>
                                    <li className='link-2'><p>{data.getSongs[2].titulo}</p></li>
                                    <li className='link-2'><a href='google.com' className='artist-link'>{data.getSongs[2].artista}</a></li>
                                </ul>
                            </div>
                        );
                    }

                    }
                </Query>
            </div>
        );
    }
}


class VolumeControl extends React.Component {
    render() {
        return(
            <Fragment>
                <div className='volume'>
                    <h4>hola</h4>
                </div>  
            </Fragment>
        );
    }
}

class PlayerContainer extends React.Component {
    render() {
        return(
            <div className='player'>
                <Query query={song_query}>
                    {({loading, error, data}) => {
                        if (loading) return '';
                        if (error) return `Error: ${error.message}`;
                        console.log(data.getSong);
                        return (
                            <Fragment>
                                <Discografia/>
                                <ComponentAudio 
                                    duracion={data.getSong.duracion}
                                    source={data.getSong.source}/>
                                <VolumeControl/>
                            </Fragment>
                        )
                    }}
                </Query>
            </div>
        );
    }
}

export default PlayerContainer;
