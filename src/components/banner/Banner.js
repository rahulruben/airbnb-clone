import React, { useRef, useState } from 'react'
import './Banner.css';
import { Button } from '@material-ui/core';
import Search from '../search/Search';

function Banner() {
    const banner = useRef();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">
                <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">Select Dates</Button>
                {showSearch && <Search />}
            </div>
            <div ref={banner} className="banner__info">
                <h1 className="banner__title">Get out and stretch your imagination.</h1>
                <h4>Plan a different kind of getaway to uncover the hidden gems near you</h4>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
