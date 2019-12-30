import React, {Fragment} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SONGS_QUERY } from '../../querys/querys';
import './player.css';
import PlayerControls from './buttons_player/playercontrols';

function Discografia () {
    const {loading, error, data} = useQuery(SONGS_QUERY);
    if ( loading ) return 'loading...';
    if ( error ) return `Error! ${error.message}`;
    console.log(data.getSongs[1]);
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

const PlayerContainer = React.forwardRef((props, ref) => (
    <div className='player'>
        <Fragment>
            <Discografia/>
            <PlayerControls
            togglePlay={props.togglePlay}
            playStatus={props.playStatus}
            songTime={props.songTime}
            songDuration={props.songDuration}
            songPercent={props.songPercent}
            updateAudioTime={props.updateAudioTime}
            />
            <audio className='PlayerContainer'
            src={props.source}
            id='audio'
            ref={ref}
            onTimeUpdate={props.onTimeUpdateListener}
            ></audio>
            <VolumeControl/>
        </Fragment>
    </div>
));

export default PlayerContainer;
