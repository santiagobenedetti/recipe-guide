import React from "react";
import * as Icons from "@material-ui/icons";
import s from "./Recipes.module.css"
import RecipeTile from "./RecipeTile";

export default function Recipes(props) {
  return(
      <React.Fragment>
        <div className={s.header}>
          <h1>Discover Recipes</h1>
          <div className={s.searchBar}>
            <div>
              <Icons.Search />
              <input type='text' placeholder='Search now...'/>
            </div>
            <button>Search</button>
          </div>
        </div>
        {/*<div className={s.recipeContainer}>*/}
        {/*  {*/}
        {/*    props.recipes.forEach(recipe => <RecipeTile title={recipe.title} id={recipe.id} img={recipe.image}/>)*/}
        {/*  }*/}
        {/*</div>*/}
      </React.Fragment>
  )
}