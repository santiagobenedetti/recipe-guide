import React from "react";
import axios from "axios";

function Login() {

  const handleLogin = () => {
    axios.post('http://localhost:3001/login', {})
  }

  return(
      <form>
        <div>
          <label form='email'>Email</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div>
          <label form='password'>Password</label>
          <input type='password' id='password' name='password' required />
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
  )
}

export default Login;