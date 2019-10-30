import React, {Fragment} from 'react';
import './progressive_bar.css';


class ProgressiveBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           value:'0'
        }

        this.handleChangeRange = this.handleChangeRange.bind(this);
    }

    handleChangeRange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        let widthValue = this.props.percent;
        return(
            <Fragment> 
                <div className='progress_bar_time-zero'>
                    <div className='progress_bar_thumb'>
                        <input type="range" min='0' max='100' value={this.state.value} className='progress_bar_time-complete' onChange={this.handleChangeRange}/>
                        <div className='progress_bar_width' style={{width: widthValue + '%' }}></div>
                    </div>
                 </div>
            </Fragment>
        );
    }
}

export default ProgressiveBar;