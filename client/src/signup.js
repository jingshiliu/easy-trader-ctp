import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CSS/signUp.css';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history("/home");
  }, [user, loading]);
  return(
    <div id="whole">
    <div id="rightSide">
        <div id="signUp">
            <Link to="/landing"><h1 id="appName">Easy Trader</h1></Link>
            <h2 class="signUpHeader">Sign Up</h2>
            <form id="signupForm" action="">
                <div class="inputContainer">
                    <FontAwesomeIcon icon={faUser} className="icons"/>
                    <label htmlFor="user-name"></label>
                    <input  class="inputField" 
                            type="text" 
                            id="user-name"
                            name="user-name"
                            placeholder="your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div class="inputContainer">
                    <FontAwesomeIcon icon={faEnvelope} className="icons"/>
                    <label htmlFor="user-email"></label>
                    <input  class="inputField"
                            type="text"
                            id="user-email"
                            name="user-email"
                            placeholder="email@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="inputContainer">
                    <FontAwesomeIcon icon={faLock} className="icons"/>
                    <label htmlFor="user-password"></label>
                    <input  class="inputField"
                            type="password"
                            id="user-password"
                            name="user-password"
                            placeholder="secret password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="buttonContainer">
                    <button id="signUpButton" onClick={register}>
                        Sign Up
                    </button>
                </div>
                
            </form>

            <div className="ButtonWrapper">
                <button
                    className="login-with-google-btn"
                    onClick={signInWithGoogle}>
                    Register with Google
                </button>
            </div>

            <div className ="formFooter">
                <div>
                    Already have an account? <Link to="/login">Login</Link> now.
                </div>
            </div>
        </div>
    </div>

        <div id="leftSide"></div>
        </div>
    );
}
export default SignUp;