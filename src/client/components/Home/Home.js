import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {

  const [user, setUser] = useState({});

  useEffect(async () => {
    await axios.post('http://localhost:3001/users/isLog', {token: localStorage.getItem("token")})
        // eslint-disable-next-line no-unused-expressions
        .then(res => {
          console.log(res.data);
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        });

    if (!user) {
      window.location.pathname = '/login';
    }
  }, [])

  return(
      <div>Hello {user.username}</div>
  )
}