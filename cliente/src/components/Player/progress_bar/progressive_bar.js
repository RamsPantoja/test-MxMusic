import React, {Fragment} from 'react';
import './progressive_bar.css';


class ProgressiveBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChangeMusic(e.target.value);
    }

    render() {
        const widthValue = this.props.percent
        const duration = this.props.duration;
        const currentTime = this.props.currentTime;
        return(
            <Fragment> 
                <div className='progress_bar_time-zero'>
                    <div className='progress_bar_thumb'>
                        <input type="range" min='0' max={duration} value={currentTime} className='progress_bar_time-complete' onChange={this.handleChange}/>
                        <div className='progress_bar_width' style={{width: widthValue + '%' }}></div>
                    </div>
                 </div>
            </Fragment>
        );
    }
}

export default ProgressiveBar;