import React from 'react';
import '../CSS/SearchBar.css'

function SearchBar(props) {
    return (
        <div className={'SearchBar'}>
            <input type="text" alt='search bar' placeholder='Search'/>
        </div>
    );
}

export default SearchBar;