import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../CSS/signUp.css'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import {useEffect, useState} from "react";
import Axios from 'axios';

function SignUp(){

    const [usernameReg, setUsernameReg] = useState('')
    const [userEmailReg, setUserEmailReg] = useState('')
    const [userPassReg, setUserPassReg] = useState('')

    const register = () => {
        Axios.post('http://localhost5000/register', {
            username: usernameReg, 
            email:userEmailReg, 
            password:userPassReg
        }).then((response) =>{
            console.log(response);
        })
    };

    return(
        <div id="whole">
        <div id="rightSide">
            <div id="signUp">
                <h1 className="signUpHeader">Sign Up</h1>
                <form id="signupForm" action="">
                    <div className="inputContainer">
                        <FontAwesomeIcon icon={faUser} className="icons"/>
                        <label htmlFor="user-name"></label>
                        <input className="inputField" type="text" id="user-name" name="user-name" 
                            onChange={(e) => {
                                setUsernameReg(e.target.value);
                                
                            }}
                        />
                    </div>
                    <div className="inputContainer">
                        <FontAwesomeIcon icon={faEnvelope} className="icons"/>
                        <label htmlFor="user-email"></label>
                        <input className="inputField" type="text" id="user-email" name="user-email"
                            onChange={(e) => {
                                setUserEmailReg(e.target.value);
                            }}
                        />
                    </div>
                    <div className="inputContainer">
                        <FontAwesomeIcon icon={faLock} className="icons"/>
                        <label htmlFor="user-password"></label>
                        <input className="inputField" type="password" id="user-password" name="user-password"
                            onChange={(e) => {
                                setUserPassReg(e.target.value);
                            }}
                        />
                    </div>
                    <div className="buttonContainer">
                        <button onClick={register} type="submit" id="signUpButton">Sign Up</button>
                    </div>
                    
                </form>

            </div>
        </div>

        <div id="leftSide"></div>
    </div>
    );
}

export default SignUp;