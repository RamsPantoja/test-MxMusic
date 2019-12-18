import React, { Fragment } from 'react';
import PlayerControls from './buttons_player/playercontrols';

class ComponentAudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playStatus: false,
            audioControls: {
                songPercent: 0,
                songTime: '0:00',
                songDuration: '0:00'
            }
        }
        this.reactAudioPlayer = React.createRef();
        this.togglePlay = this.togglePlay.bind(this);
        this.onTimeUpdateListener = this.onTimeUpdateListener.bind(this);
        this.updateAudioTime = this.updateAudioTime.bind(this);
        this.endPlayed = this.endPlayed.bind(this);
    }

    minTwoDigits (num) {
        return ( num < 10 ? '0' : '') + num;
    }
    onTimeUpdateListener () {
        let currentDuration = this.reactAudioPlayer.current.duration;
        let currentTime = this.reactAudioPlayer.current.currentTime;
        let percent = (currentTime / currentDuration);
        let audioControls = Object.assign({}, this.state.audioControls);
        audioControls.songPercent = percent;
        audioControls.songTime = Math.floor(currentTime.toFixed(0) / 60) + ':' + (currentTime.toFixed(0) % 60 ? this.minTwoDigits((currentTime.toFixed(0) % 60)) : '00')
        audioControls.songDuration = Math.floor(currentDuration.toFixed(0) / 60) + ':' + (currentDuration.toFixed(0) % 60 ? this.minTwoDigits(currentDuration.toFixed(0) % 60) : '00');
        this.setState({ 
            audioControls
        });
        
    }

    updateAudioTime (e) {
        e.persist();
        if(this.state.playStatus !== undefined ) {
            let songPercentage = e.nativeEvent.layerX / e.target.clientWidth;
            let currentTime = songPercentage * this.reactAudioPlayer.current.duration;
            this.reactAudioPlayer.current.currentTime = currentTime;
            let audioControls = Object.assign({}, this.state.audioControls);
            audioControls.songPercent = songPercentage;
            this.setState({ 
                audioControls
             });
        }
    }
    
    togglePlay () {
        let status = this.state.playStatus;
        if ( status === false) {
            setTimeout(() => {
                this.reactAudioPlayer.current.play();
            }, 0)
            status = true
        } else {
            this.reactAudioPlayer.current.pause();
            status = false;
        }

        this.setState({
            playStatus: status
        })
    }

    endPlayed () {
        let status = this.state.playStatus;
        let ended = this.reactAudioPlayer.current.ended;
        if (ended === true) {
            status = false;
        }

        this.setState({
            playStatus: status
        })
    }

    render () {
        return (
            <Fragment>
                <audio id='audio' 
                ref={this.reactAudioPlayer} 
                src={this.props.source} 
                onTimeUpdate={this.onTimeUpdateListener}
                onEnded={this.endPlayed}></audio>
                <PlayerControls 
                playStatus={this.state.playStatus}
                percent={this.state.audioControls.songPercent} 
                onClick={this.togglePlay} 
                songTime={this.state.audioControls.songTime} 
                songDuration={this.state.audioControls.songDuration}
                updateAudioTime={this.updateAudioTime}/>
            </Fragment>
        )
    }
}


export default ComponentAudio;