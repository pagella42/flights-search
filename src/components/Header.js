import React, { useState } from 'react';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function Header() {

    return (
        <div id="header-cont">
            <div className="header-inner">

           
            <Link to="/">
                <FontAwesomeIcon class="homeIcon" icon={faHome} />
            </Link>
            <Link to="/search">
                <FontAwesomeIcon class="searchIcon" icon={faSearch} />
            </Link>
        </div> </div>
    );
}
