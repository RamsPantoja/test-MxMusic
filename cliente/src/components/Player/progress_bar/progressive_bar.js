import React, {Fragment} from 'react';
import './progressive_bar.css';
import PropTypes from 'prop-types';


class ProgressiveBar extends React.Component {
    render() {
        const widthValue = this.props.percent * 100;
        return(
            <Fragment> 
                <div className='progress_bar_time-zero'>
                    <div className='progress_bar_width' style={{width: widthValue + '%' }}></div>
                    <div className='progress_bar_time-complete' onClick={this.props.updateAudioTime}></div>
                 </div>
            </Fragment>
        );
    }
}

ProgressiveBar.propTypes = {
    updateAudioTime: PropTypes.func
  }

export default ProgressiveBar;