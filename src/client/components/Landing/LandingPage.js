import s from './Landing.module.css';
import * as Icons from "@material-ui/icons";
import React from "react";
import family from './family Cropped.jpg';

export default function LandingPage() {
  return (
      <React.Fragment>
        <h1 className={s.title}>Deciding what to eat tonight was never this easy</h1>
        <div className={s.searchContainer}>
          <p>Search now for thousands of recipes ideas</p>
          <div className={s.searchBar}>
            <div>
              <Icons.Search />
              <input type='text' placeholder='Search now...'/>
            </div>
            <button>Search</button>
          </div>
        </div>
        <div className={s.create}>CREATE AN ACCOUNT FOR FREE</div>
        <img src={family} className={s.image}/>
      </React.Fragment>
  )
}