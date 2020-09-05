import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="airbnb logo" />
            <div className="header__search">
                <input type="text" />
                <SearchIcon className="header__search-icon" />
            </div>
            {/* <PersonOutlineIcon className="header__user" /> */}
        </header>
    )
}

export default Header
