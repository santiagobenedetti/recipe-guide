import React, {useState} from "react";
import axios from "axios";
import s from "./Login.module.css";
import {NavLink} from "react-router-dom";

function Login() {

  const [form, setForm] = useState({email: "", password: ""});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/users/login', {form})
        .then(res => {
          if (res.data.message) {
            setError(res.data.message);
            setForm({email: "", password: ""});
          } else {
            sessionStorage.setItem('token', res.data.token);
            window.location.pathname = '/home' // TODO -> look for a way of keeping SPA
          }
        })
  }

  return(
      <div className={s.formContainer}>
        <h1>Login</h1>
        {error ? <span className={s.error}>{error}</span> : <br/>}
        <form>
          <div>
            <label form='email'>Email</label>
            <input type='email' id='email' name='email' required value={form.email} onChange={handleChange}/>
          </div>
          <div>
            <label form='password'>Password</label>
            <input type='password' id='password' name='password' required value={form.password} onChange={handleChange} />
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