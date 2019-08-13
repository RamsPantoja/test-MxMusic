import React, {Fragment} from 'react';
import Library from './library_section';
import { NavLink } from 'react-router-dom';
//estilos css
import './Drawer.css';

class Drawer extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="drawer">
                    <header>
                        <nav className='nav'>
                           <ul className='links'>
                               <li className='link'><NavLink exact to='/' activeStyle={{color:'#29b6f6'}}><i className="material-icons md-36">home</i><p className='span'>Inicio</p></NavLink></li>
                               <li className='link'><NavLink to='/explorar' activeStyle={{color:'#29b6f6'}}><i className="material-icons md-36">apps</i><p className='span'>Explorar</p></NavLink></li>
                               <li className='link'><NavLink to='/radio' activeStyle={{color:'#29b6f6'}}><i className="material-icons md-36">surround_sound</i><p className='span'>Radio</p></NavLink></li>
                           </ul>
                        </nav>
                        <Library/>
                    </header>
                </div>  
            </Fragment>
        );
    }
}
export default Drawer;