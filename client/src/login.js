import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import "./CSS/log-in.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLock } from '@fortawesome/free-solid-svg-icons'

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            //maybe trigger a loading screen
            return;
        }
        if(user) navigate("/home")
        else navigate("/login")
    }, [user,loading]);
    return(
        <div>
            <div id="rightSide">
                <div id="logIn">
                    <Link to="/landing"><h1 id="appName">Easy Trader</h1></Link>
                    <h2 className="LogInHeader">Log in</h2>
                    <form id="LogInForm" action="">
                        <div className="inputContainer">
                            <FontAwesomeIcon icon={faEnvelope} className="icons"/>                        
                            <label htmlFor="user-email"></label>
                            <input  className="inputField" 
                                    type="text" 
                                    id="user-email" 
                                    name="user-email"
                                    value ={email}
                                    onChange= { (e) => setEmail(e.target.value) }
                                    placeholder="email@email.com"
                            />
                        </div>
                        <div className="inputContainer">
                            <FontAwesomeIcon icon={faLock} className="icons" />
                            <label htmlFor="user-password"></label>
                            <input  className="inputField" 
                                    type="password"
                                    id="user-password" 
                                    name="user-password"
                                    value = {password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="secret password"
                            />
                        </div>
                        <div className="buttonContainer">
                            <button
                                id="logInButton"
                                onClick={() => signInWithEmailAndPassword(email,password)}>
                                Login
                            </button>
                        </div>
                    </form>
                <div className="ButtonWrapper">
                    <button className="login-with-google-btn" onClick={signInWithGoogle}>
                        Login with Google
                    </button>
                </div>

                <div className = "formFooter">
                    <div>
                        <Link to="/reset">Forgot Password</Link>
                    </div>
                    <div>
                        Don't have an account? <Link to="/SignUp">Register</Link> now.
                    </div>
                </div>
                </div>
        </div>
        <div id="leftSide"></div>
    </div>
    );
}

export default Login;