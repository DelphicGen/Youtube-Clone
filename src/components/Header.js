import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    const [inputSeach, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon className="header__hamburgerIcon" />
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="youtube logo" />
                </Link>
            </div>
            <div className="header__input">
                <input value={inputSeach} onChange={(e) => setInputSearch(e.target.value)} placeholder="Search" type="text" />
                <Link to={`search/${inputSeach}`}>
                    <button className="header__inputButton"><SearchIcon /></button>
                </Link>
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__iconRight" />
                <AppsIcon className="header__iconRight" />
                <NotificationsIcon className="header__iconRight" />
                <Avatar className="header__avatar" />
            </div>
        </div>
    )
}

export default Header
