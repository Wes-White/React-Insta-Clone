import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return (  
        <div className='search-bar'>
            <img className='logo' src="https://img.icons8.com/plasticine/100/000000/instagram.png" ßalt='logo'></img>
            <input type="text" name="Search" placeholder='Search'></input>
            <div className="searchBarIcons">
                <img src="https://img.icons8.com/ios/32/000000/compass.png" alt='compass'></img>
                <img src="https://img.icons8.com/windows/32/000000/hearts.png" alt='heart'></img>
                <img src="https://img.icons8.com/ios/32/000000/gender-neutral-user.png" alt='user'></img>
            </div>
            
        </div>

    );
}
 
export default SearchBar;