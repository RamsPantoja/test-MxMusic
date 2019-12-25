import React, {Fragment} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SONGS_QUERY } from '../../querys/querys';
import './player.css';
import ComponentAudio from './audiocomponent';

function Discografia () {
    const {loading, error, data} = useQuery(SONGS_QUERY);
    if ( loading ) return 'loading...';
    if ( error ) return `Error! ${error.message}`;
    console.log(data.getSongs[1].album.img)
    return (
        <div className='discograf'>
            <div className='discograf-content'>
                <img src={data.getSongs[1].album.img} alt="cover" height="60" width="60"/>
                <ul>
                    <li className='link-2'><p>{data.getSongs[1].songname}</p></li>
                    <li className='link-2'><a href='google.com' className='artist-link'>{data.getSongs[1].artist.artname}</a></li>
                </ul>
            </div>
        </div>
    );
}


function VolumeControl () {
    return(
        <Fragment>
            <div className='volume'>
                <h4>hola</h4>
            </div>  
        </Fragment>
    );
}

function PlayerContainer (props) {
    let trackSource = props.trackSource;
    return(
        <div className='player'>
            <Fragment>
                <Discografia/>
                <ComponentAudio
                    trackSource={trackSource}/>
                <VolumeControl/>
            </Fragment>
        </div>
    );
}


export default PlayerContainer;
