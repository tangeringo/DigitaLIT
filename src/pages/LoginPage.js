import React, { useState } from 'react';
import useLocalStorage from "use-local-storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import '../styles/LoginPage.styles.scss';



function LoginPage() {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


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
          <h1>DigitaLIT Login</h1>
          <div className="container" >
            <div className="top" >
                <FontAwesomeIcon icon={['fab', 'facebook']} size='2x' />
                <FontAwesomeIcon icon={['fab', 'google']} size='2x' />
                <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
            </div>
            <p className="divider" ><span className="or-text">OR</span></p>
            <form>
              <input onChange={(event) => setEmail(event.target.value)} type='email' placeholder='Enter your email' />
              <input onChange={(event) => setPassword(event.target.value)} type='password' placeholder='Enter your password' />
              <div className="remember" >
                <input id='checkbox' type='checkbox' />
                <label for='checkbox' >
                  <p>Remember Me</p>
                </label>
              </div>
              <button className="login-button">Log In</button>
            </form>
            <div className="bottom" >
              <p>Forgot your password?</p>
              <a href="/" >Reset Password</a>
            </div>
            <Link to="/create-account" className="create">Create Account</Link>
          </div>
        </div>
      </div>
    );
  }

export default LoginPage;