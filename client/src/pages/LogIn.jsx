import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../CSS/log-in.css'

function LogIn(){
    return(
        <div>
            <div id="rightSide">
                <div id="logIn">
                    <h1 class="LogInHeader">Log in</h1>
                    <form id="LogInForm" action="">
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
                        <input type="submit" value="Log In" id="logInButton"/>
                    </form>
                </div>
        </div>
        <div id="leftSide"></div>
    </div>
    );
}

export default LogIn;