import React from 'react';
import './playercontrols.css';
import ProgressiveBar from '../progress_bar/progressive_bar';


class PlayerControls extends React.Component {
    render() {
        return(
            <div className='playercontrols'>
                <div className='player-controls'>
                    <div className='player-controls__buttons'>
                        <div className='player-buttons'><i className="material-icons md-24">skip_previous</i></div>
                        <div  className='hover-playbutton' onClick={this.props.onClick}><i className="material-icons md-36">play_circle_outline</i></div>
                        <div className='player-buttons'><i className="material-icons md-24">skip_next</i></div>
                    </div>
                    <div className='player-controls__progress_bar_time'>
                        <div className='timer'>0:00</div>
                        <ProgressiveBar percent={this.props.percent} onChangeMusic={this.props.onChangeMusic} duration={this.props.duration} currentTime={this.props.currentTime}/>
                        <div className='timer'>4:34</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerControls;