import React, { Fragment } from 'react';
import PlayerControls from './buttons_player/playercontrols';

class ComponentAudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playStatus: 'play',
            currentTime: 0,
            percent: 0
        }

        this.toggleplay = this.toggleplay.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.modifyProgressBar = this.modifyProgressBar.bind(this);
        this.updateBar = this.updateBar.bind(this);
    }

    updateTime (timeStamp) {
        let currentTime = Math.floor(timeStamp)
        this.setState({
            currentTime: currentTime
        })
    }

    modifyProgressBar(e){
        let audio = document.getElementById('audio');
        audio.currentTime = e;
    }

    updateBar(percent){
        this.setState({
            percent: percent
        })
    }
    
    toggleplay (i) {
        let status = this.state.playStatus;
        let audio = document.getElementById('audio');
        if ( status === 'play') {
            status = 'pause';
            audio.play();
        } else {
            status = 'play';
            audio.pause();
        }


        setInterval( () => {
            let currentTime = audio.currentTime;
            let duration = this.props.duracion;
            let percent = (currentTime / duration) * 100;
            console.log(currentTime);
            this.updateTime(currentTime);
            this.updateBar(percent);
        }, 1000);

        this.setState({
            playStatus: status
        })
    }

    render () {
        return (
            <Fragment>
                <audio id='audio'><source src={this.props.source}/></audio>
                <PlayerControls percent={this.state.percent} onClick={this.toggleplay} currentTime={this.state.currentTime} onChangeMusic={this.modifyProgressBar} duration={this.props.duracion}/>
            </Fragment>
        )
    }
}


export default ComponentAudio;