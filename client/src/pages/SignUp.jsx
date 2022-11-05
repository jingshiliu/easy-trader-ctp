import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../CSS/signUp.css'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-solid-svg-icons"

function SignUp(){
    return(
        <div id="whole">
        <div id="rightSide">
            <div id="signUp">
                <h1 class="signUpHeader">Sign Up</h1>
                <form id="signupForm" action="">
                    <div class="inputContainer">
                        <FontAwesomeIcon icon={faUser} className="icons"/>
                        <label for="user-name"></label>
                        <input class="inputField" type="text" id="user-name" name="user-name"/>
                    </div>
                    <div class="inputContainer">
                        <FontAwesomeIcon icon={faEnvelope} className="icons"/>
                        <label for="user-email"></label>
                        <input class="inputField" type="text" id="user-email" name="user-email"/>
                    </div>
                    <div class="inputContainer">
                        <FontAwesomeIcon icon={faLock} className="icons"/>
                        <label for="user-password"></label>
                        <input class="inputField" type="password" id="user-password" name="user-password"/>
                    </div>
                    <div className="buttonContainer">
                        <button type="submit" id="signUpButton">Sign Up</button>
                    </div>
                    
                </form>

            </div>
        </div>

        <div id="leftSide"></div>
    </div>
    );
}

export default SignUp;