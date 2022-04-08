import s from './Landing.module.css';
import * as Icons from "@material-ui/icons";
import React, {useState} from "react";
import family from './family Cropped.jpg';
import {NavLink} from "react-router-dom";

export default function LandingPage() {
  const [search, setSearch] = useState("");

  return (
      <React.Fragment>
        <h1 className={s.title}>Deciding what to eat tonight was never this easy</h1>
        <div className={s.searchContainer}>
          <p>Search now for thousands of recipes ideas</p>
          <div className={s.searchBar}>
            <div>
              <Icons.Search />
              <input type='text' placeholder='Search now...' value={search} onChange={(e) => {setSearch(e.target.value)}}/>
            </div>
            <NavLink to={'/recipes?search=' + search}>Search</NavLink>
          </div>
        </div>
        <div className={s.create}><NavLink to='/register' id='register'>CREATE AN ACCOUNT FOR FREE</NavLink></div>
        <img src={family} className={s.image} alt='family'/>
      </React.Fragment>
  )
}