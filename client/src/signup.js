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
    if (user) history("/");
  }, [user, loading]);
  return(
    <div id="whole">
    <div id="rightSide">
        <div id="signUp">
            <h1 class="signUpHeader">Sign Up</h1>
            <form id="signupForm" action="">
                <div class="inputContainer">
                    <FontAwesomeIcon icon={faUser} className="icons"/>
                    <label for="user-name"></label>
                    <input  class="inputField" 
                            type="text" 
                            id="user-name"
                            name="user-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div class="inputContainer">
                    <FontAwesomeIcon icon={faEnvelope} className="icons"/>
                    <label for="user-email"></label>
                    <input  class="inputField"
                            type="text"
                            id="user-email"
                            name="user-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="inputContainer">
                    <FontAwesomeIcon icon={faLock} className="icons"/>
                    <label for="user-password"></label>
                    <input  class="inputField"
                            type="password"
                            id="user-password"
                            name="user-password"
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
            <button
                className="register__btn register__google"
                onClick={signInWithGoogle}>
                Register with Google
            </button>
            <div>
                Already have an account? <Link to="/">Login</Link> now.
            </div>
        </div>
    </div>

        <div id="leftSide"></div>
        </div>
    );
}
export default SignUp;