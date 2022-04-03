import React, {useState} from "react";
import axios from "axios";
import s from "./Login.module.css";
import {NavLink} from "react-router-dom";

function Register() {

  const [form, setForm] = useState({username: "", email: "", password: ""})
  const [error, setError] = useState("");

  const handleChange = (e) => {
    console.log(e);
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(form);
    axios.post('http://localhost:3001/users/register', {form})
        .then(res => {
          console.log(res);
          if (res.data.message) {
            setError(res.data.message);
            setForm({email: "", password: "", username: ""})
          } else {
            window.location.pathname = '/login'
          }
        })
  }

  return(
      <div className={s.formContainer}>
        <h1>Register now!</h1>
        {error ? <h3 className={s.error}>{error}</h3> : <br/>}
        <form>
          <div>
            <label form='username'>Username</label>
            <input type='text' id='username' name='username' required value={form.username} onChange={handleChange} />
          </div>
          <div>
            <label form='email'>Email</label>
            <input type='email' id='email' name='email' required value={form.email} onChange={handleChange} />
          </div>
          <div>
            <label form='password'>Password</label>
            <input type='password' id='password' name='password' required value={form.password} onChange={handleChange} />
          </div>
        </form>
        <button className={s.submit} onClick={handleRegister}>Register</button>
        <div className={s.login}>
          <p>Already have an account? <NavLink to={'/login'}>Sign in!</NavLink></p>
        </div>
      </div>
  )
}

export default Register;