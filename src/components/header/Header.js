import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="airbnb logo" />
            <div className="header__search">
                <input type="text" />
                <SearchIcon className="header__search-icon" />
            </div>
        </header>
    )
}

export default Header
