import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../CSS/signUp.css'

function SignUp(){
    return(
        <div id="whole">
        <div id="rightSide">
            <div id="signUp">
                <h1 class="signUpHeader">Sign Up</h1>
                <form id="signupForm" action="">
                    <div class="inputContainer">
                        <FontAwesomeIcon icon="user" />
                        {/* <i class="fa-solid fa-user"></i> */}
                        <label for="user-name"></label>
                        <input class="inputField" type="text" id="user-name" name="user-name"/>
                    </div>
                    <div class="inputContainer">
                        <FontAwesomeIcon icon="envelope" />
                        {/* <i class="fa-solid fa-envelope"></i> */}
                        <label for="user-email"></label>
                        <input class="inputField" type="text" id="user-email" name="user-email"/>
                    </div>
                    <div class="inputContainer">
                        <FontAwesomeIcon icon="lock" />
                        {/* <i class="fa-solid fa-lock"></i> */}
                        <label for="user-password"></label>
                        <input class="inputField" type="password" id="user-password" name="user-password"/>
                    </div>
                    <input type="submit" value="Sign Up" id="signUpButton"/>
                </form>

            </div>
        </div>

        <div id="leftSide"></div>
    </div>
    );
}

export default SignUp;