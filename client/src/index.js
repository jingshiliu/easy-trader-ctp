import React from 'react';
import App from './App';
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NoPage from './pages/NoPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Layout from './pages/Layout';
import Investing from "./pages/Investing";


export default class Test extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="signup" element={<SignUp/>}/>
                    <Route path="login" element={<LogIn/>}/>
                    <Route path="/" element={<Layout/>}/>
                    <Route index element={<App/>}/>
                    <Route path='investing' element={<Investing/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Test/>, document.getElementById("root"));