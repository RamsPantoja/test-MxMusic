import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';

class Library extends React.Component {
    render() {
        return(
            <Fragment>
                <div className='library'>
                    <ul>
                        <span style={{color:'#707070'}}>TU BIBLIOTECA</span>
                        <li className='link-1'><NavLink to='/songs' activeStyle={{color:'#29b6f6'}}>Canciones</NavLink></li>
                        <li className='link-1'><NavLink to='/artist' activeStyle={{color:'#29b6f6'}}>Artistas</NavLink></li>
                        <li className='link-1'><NavLink to='/albums'activeStyle={{color:'#29b6f6'}}>Álbumes</NavLink></li>
                    </ul> 
                </div>
            </Fragment>
        );
    }
}

export default Library;