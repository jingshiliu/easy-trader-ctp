import React from 'react';
import App from './App';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Layout from './pages/Layout';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );





export default function Test() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
            <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            
            <Route path="*" element={<NoPage />} /> 
            
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Test />, document.getElementById("root"));