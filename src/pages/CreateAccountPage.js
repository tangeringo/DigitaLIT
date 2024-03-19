import React, { useState } from 'react';
import useLocalStorage from "use-local-storage";
import { Link } from 'react-router-dom';

import '../styles/LoginPage.styles.scss';



function CreateAccountPage() {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    

    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme)
    }
  
    return (
      <div className="app " data-theme={theme} >
        <div className="theme-toggle" >
            {theme === "light" ? <h2>Light Theme</h2> : <h2>Dark Theme</h2>}
            {theme === "light" ? (
            <button onClick={switchTheme} className="bg-dark theme-button" >🌙</button>
            ) : (
            <button onClick={switchTheme} className="bg-dark theme-button" >☀️</button>
              )}
        </div>
        <div className="login" >
          <h1>DigitaLIT</h1>
          <p className="motivational-text">Create an account to get access to latest educational digital literature</p>
          <h4></h4>
          <div className="container" >
            <form>
                <input onChange={(event) => setName(event.target.value)} type='text' placeholder='Enter your Name' />
                <input onChange={(event) => setEmail(event.target.value)} type='email' placeholder='Enter your email' />
                <input onChange={(event) => setPassword(event.target.value)} type='password' placeholder='Enter your password' />
                <input onChange={(event) => setConfirmPassword(event.target.value)} type='password' placeholder='Confirm your password' />
              <button className="login-button">Create Account</button>
            </form>
            <div className="bottom" >
              <p>Forgot your password?</p>
              <a href="/" >Reset Password</a>
            </div>
            <Link to="/login" className="create"> Login</Link>
          </div>
        </div>
      </div>
    );
  }


export default CreateAccountPage;