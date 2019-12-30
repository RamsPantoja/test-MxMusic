import React, {Fragment} from 'react';
import './progressive_bar.css';
import PropTypes from 'prop-types';


class ProgressiveBar extends React.Component {
    render() {
        const widthValue = this.props.songPercent * 100;
        const updateAudioTime = this.props.updateAudioTime;
        return(
            <Fragment> 
                <div className='progress_bar_time-zero'>
                    <div className='progress_bar_width' style={{width: widthValue + '%' }}></div>
                    <div className='progress_bar_time-complete' onClick={updateAudioTime}></div>
                 </div>
            </Fragment>
        );
    }
}

ProgressiveBar.propTypes = {
    updateAudioTime: PropTypes.func
  }

export default ProgressiveBar;