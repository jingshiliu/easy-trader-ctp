import React from 'react';
import Home from './pages/Home';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NoPage from './pages/NoPage';
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
                    <Route path='/home' element={<Home/>}/>
                    <Route path='investing' element={<Investing/>}/>
                    <Route index element={<LandingPage/>}/>
                    <Route path="/reset" element={<Reset/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Test />)
