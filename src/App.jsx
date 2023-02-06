import React from 'react';
import { ToastContainer } from "react-toastify";
// import logo from './logo.svg';
import './App.css';
// import Auth from './Pages/Auth/Auth';
// import LoginForm from './Components/LoginForm/LoginForm';
import Home from './Pages/Home/Home'
function App() {
  return (
    <>
    {/* <LoginForm/> */}
    <Home />
    <ToastContainer 
      position='top-center'
      autoClose = {5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl = {false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover = {false}
    />
  </>
  );
}

export default App;
