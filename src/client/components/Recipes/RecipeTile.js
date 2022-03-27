import React from "react";
import s from "./Recipes.module.css"

export default function RecipeTile(props) {
  return(
      <div className={s.recipeTile}>
        <img src={props.img} alt='food'/>
        <div>{props.title}</div>
      </div>
  )
}