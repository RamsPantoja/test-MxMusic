import React, {Fragment} from 'react';
import './search.css';

class Search extends React.Component {
    render() {
        return(
            <Fragment>
                <div className='search'>
                    <div className='search-icon-input'>
                        <form className='search-icon-input-form'>
                            <i className="material-icons">search</i>
                            <input type="search" placeholder='Buscar'/>
                        </form>  
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Search;
