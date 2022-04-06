import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import * as Icons from "@material-ui/icons";

export default function NavBar ({isLogged, setLogged}) {

  const signOut = () => {
    sessionStorage.removeItem("token");
    setLogged(false);
  }

  return(
    <nav className={`${s.nav}`}>
      <NavLink to={'/'}><Icons.Restaurant /></NavLink>
      <ul>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/recipes'}>Recipes</NavLink></li>
        <li><NavLink to={'/favorites'}>Favorites</NavLink></li>
        {isLogged
            ? <React.Fragment>
                <li><NavLink to={'/profile'}>Profile</NavLink></li>
                <li><NavLink to={'/'} onClick={signOut}>Sign out</NavLink></li>
              </React.Fragment>
            : <li><NavLink to={'/login'}>Log In</NavLink></li>
        }
      </ul>
    </nav>
  )
}