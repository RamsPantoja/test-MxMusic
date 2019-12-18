import React from 'react';
import './playercontrols.css';
import ProgressiveBar from '../progress_bar/progressive_bar';


class PlayerControls extends React.Component {
    render() {
        const songTime = this.props.songTime;
        const songDuration = this.props.songDuration;
        const playStatus = this.props.playStatus ? <i className="material-icons md-36">pause_circle_outline</i> : <i className="material-icons md-36">play_circle_outline</i>
        return(
            <div className='playercontrols'>
                <div className='player-controls'>
                    <div className='player-controls__buttons'>
                        <div className='player-buttons'><i className="material-icons md-24">skip_previous</i></div>
                        <div  className='hover-playbutton' onClick={this.props.onClick}>{playStatus}</div>
                        <div className='player-buttons'><i className="material-icons md-24">skip_next</i></div>
                    </div>
                    <div className='player-controls__progress_bar_time'>
                        <div className='timer'>{songTime}</div>
                        <ProgressiveBar 
                        percent={this.props.percent}
                        updateAudioTime={this.props.updateAudioTime}/>
                        <div className='timer'>{songDuration}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerControls;