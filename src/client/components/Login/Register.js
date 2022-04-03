import React, {useState} from "react";
import axios from "axios";
import s from "./Login.module.css";

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
    axios.post('http://localhost:3001/users/register', form)
        .then(res => {
          console.log(res);
          if (res.data.message) {
            setError(res.data.message);
          } else {
            window.location.pathname = '/login'
          }
        })
  }

  return(
      <form>
        {error ? <h2 className={s.error}>{error}</h2> : <br/>}
        <div>
          <label form='username'>Username</label>
          <input type='text' id='username' name='username' required onChange={handleChange} />
        </div>
        <div>
          <label form='email'>Email</label>
          <input type='email' id='email' name='email' required onChange={handleChange} />
        </div>
        <div>
          <label form='password'>Password</label>
          <input type='password' id='password' name='password' required onChange={handleChange} />
        </div>
        <button onClick={handleRegister}>Register</button>
      </form>
  )
}

export default Register;