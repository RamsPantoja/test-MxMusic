import React, {Fragment} from 'react';
import { Query } from 'react-apollo';
import { songs_query } from '../../querys/querys';
import './player.css';

class Discografia extends React.Component {
    render () {
        return (
            <div className='discograf'>
                <Query query={songs_query}>
                    {({loading, error, data}) => {
                        if(loading) return '';
                        if(error) return `Error: ${error.message}`;
                        console.log(data.getSongs);
                        return (
                            <div className='discograf-content'>
                                <img src={data.getSongs[0].img} alt="cover" height="60" width="60"/>
                                <ul>
                                    <li className='link-2'><p>{data.getSongs[0].titulo}</p></li>
                                    <li className='link-2'><a href='google.com' className='artist-link'>{data.getSongs[0].artista}</a></li>
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

class PlayerControls extends React.Component {
    render() {
        
        return(
            <div className='playercontrols'>
                <div className='player-controls'>
                    <p>Player Here</p>
                </div>
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
            <Fragment>
                <div className='player'>
                    <Discografia/>
                    <PlayerControls/>
                    <VolumeControl/>
                </div>
            </Fragment>
        );
    }
}

export default PlayerContainer;
