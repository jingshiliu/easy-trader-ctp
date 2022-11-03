import React from 'react';
// import {ReactComponent as Logo} from '../svg/logo.svg'
import '../CSS/Header.css'

function Header() {
    return (
        <div className='Header'>
            <div className='header__logo'>
                <a href="#">
                    {/*<Logo className='.Logo' />*/}
                    Easy Trader
                </a>
            </div>
            <div className='header__searchbar'>
                <input type="text" alt='search bar' placeholder='Search'/>
            </div>
            <div className="header__menu-items">
                <a href="index.html">Free Stocks</a>
                <a href="#">Portfolio</a>
                <a href="signUp.html">Sign Up</a>
                <a href="log-in.html">Login</a>
                <a href="#">Account</a>
            </div>
        </div>
    );
}

export default Header;