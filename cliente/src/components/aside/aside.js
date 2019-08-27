import React, {Fragment} from 'react';
import './aside.css';

class Aside extends React.Component {
    render() {
        return(
            <Fragment>
                <div className='aside'>
                    <div className='user-info'>
                        <img src="https://wallpapercave.com/wp/5vKVIBr.jpg" alt="img-dragon-nest-priest"/>
                        <span>UserName</span>
                        <span>PREMIUM</span>
                        <span className='box-connect-button'><a href="google.com" className='connect-button'>Conectar</a></span>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Aside;