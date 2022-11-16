import React from 'react'
import '../CSS/log-in.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLock } from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from "react";

function LogIn(){
    return(
        <div>
            <div id="rightSide">
                <div id="logIn">
                    <h1 className="LogInHeader">Log in</h1>
                    <form id="LogInForm" action="">
                        <div className="inputContainer">
                            <FontAwesomeIcon icon={faEnvelope} className="icons"/>                        
                            <label htmlFor="user-email"></label>
                            <input className="inputField" type="text" id="user-email" name="user-email"/>
                        </div>
                        <div className="inputContainer">
                            <FontAwesomeIcon icon={faLock} className="icons" />
                            <label htmlFor="user-password"></label>
                            <input className="inputField" type="password" id="user-password" name="user-password"/>
                        </div>
                        <div className="buttonContainer">
                            <button type="submit" id="logInButton">Log In</button>
                        </div>
                    </form>
                </div>
        </div>
        <div id="leftSide"></div>
    </div>
    );
}

export default LogIn;