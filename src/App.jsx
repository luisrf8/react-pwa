import React from 'react';
import { ToastContainer } from "react-toastify";
// import logo from './logo.svg';
import './App.css';
// import Auth from './Pages/Auth/Auth';
import LoginForm from './Components/LoginForm/LoginForm';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    {/* {!user ? <Auth /> : <LoggedLayout user={user}/>} */}
    <LoginForm/>
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
