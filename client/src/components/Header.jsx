import React from 'react';
// import {ReactComponent as Logo} from '../svg/logo.svg'
import '../CSS/Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav id="HeaderNav">
            <div className='Header'>
                <div className='header__logo'>
                    <li>
                        <Link className="link" to="/">Easy Trader</Link>
                        {/*<Logo className='.Logo' />*/}
                    </li>
                </div>

                <div className='header__searchbar'>
                    <input type="text" alt='search bar' placeholder='Search'/>
                </div>

                <div className="NavigationList">
                    <ul className="header__menu-items">
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>

                        <li>
                            <Link className="link" to="/signup">SignUp</Link>
                        </li>

                        <li>
                            <Link className="link" to="/login">LogIn</Link>
                        </li>

                        <li>
                            <Link className="link" to="/">Free Stocks</Link>
                        </li >

                        <li>
                            <Link className="link" to="/">Account</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <div className='Header'>
        //     <div className='header__logo'>
        //         <a href="#">
        //             {/*<Logo className='.Logo' />*/}
        //             Easy Trader
        //         </a>
        //     </div>
        //     <div className='header__searchbar'>
        //         <input type="text" alt='search bar' placeholder='Search'/>
        //     </div>
        //     <div className="header__menu-items">
        //         <a href="index.html">Free Stocks</a>
        //         <a href="#">Portfolio</a>
        //         <a href="signUp.html">Sign Up</a>
        //         <a href="log-in.html">Login</a>
        //         <a href="#">Account</a>
        //     </div>
        // </div>
    );
}

export default Header;