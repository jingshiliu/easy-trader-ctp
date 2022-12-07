import React from 'react';
// import {ReactComponent as Logo} from '../svg/logo.svg'
import '../CSS/Header.css'
import { Link } from "react-router-dom";
import { auth, logout } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

function Header() {
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (loading) {
            //maybe trigger a loading screen
            return;
        }
    }, [user,loading]);
    return (
        <nav id="HeaderNav">
            <div className='Header'>
                <div className='header__logo'>
                    <li>
                        <Link className="link" to="/home">Easy Trader</Link>
                        {/*<Logo className='.Logo' />*/}
                    </li>
                </div>

                <div className='header__searchbar'>
                    <input type="text" alt='search bar' placeholder='Search'/>
                </div>

                <div className="NavigationList">
                    <ul className="header__menu-items">
                        <li>
                            <Link className="link" to="/home">Home</Link>
                        </li>

                        <li>
                            {!user && (<Link className="link" to="/signup">SignUp</Link>)}
                        </li>

                        <li>
                            {!user && (<Link className="link" to="/login">LogIn</Link>) }
                        </li>

                        <li>
                            {user && (<Link className="link" to="/" onClick={logout}>Signout</Link>) }
                        </li>

                        <li>
                            <Link className="link" to="/home">Account</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;