import React from 'react';
import App from './App';
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NoPage from './pages/NoPage';
//import LogIn from './pages/LogIn';
import Login from './login';
import SignUp from './signup';
import Layout from './pages/Layout';
import Investing from "./pages/Investing";
import Reset from './reset';
import LandingPage from './pages/Landing';

export default class Test extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="signup" element={<SignUp/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="/" element={<Layout/>}/>
                    <Route path='/home' element={<App/>}/>
                    <Route path='investing' element={<Investing/>}/>
                    <Route index element={<LandingPage/>}/>
                    <Route path="/reset" element={<Reset/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Test/>, document.getElementById("root"));