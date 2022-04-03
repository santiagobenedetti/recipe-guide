import React from "react";
import axios from "axios";
import s from "./Login.module.css";
import {NavLink} from "react-router-dom";

function Login() {

  const handleLogin = () => {
    axios.post('http://localhost:3001/login', {})
  }

  return(
      <div className={s.formContainer}>
        <h1>Login</h1>
        <form>
          <div>
            <label form='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div>
            <label form='password'>Password</label>
            <input type='password' id='password' name='password' required />
          </div>
        </form>
        <button className={s.submit} onClick={handleLogin}>Login</button>
        <div className={s.login}>
          <p>New around here? <NavLink to={'/register'}>Create an account!</NavLink></p>
        </div>
      </div>
  )
}

export default Login;