import React from "react";
import s from "./Recipes.module.css"
import {NavLink} from "react-router-dom";

export default function RecipeTile(props) {

  const handleClick = () => {

  }

  return(
      <NavLink className={s.recipeTile} onClick={handleClick} to={`/recipes/${props.id}`}>
        <img src={props.img} alt='food'/>
        <div>{props.title}</div>
      </NavLink>
  )
}