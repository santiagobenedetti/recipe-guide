import React, {useEffect, useState} from "react";
import * as Icons from "@material-ui/icons";
import s from "./Recipes.module.css"
import RecipeTile from "./RecipeTile";
import axios from "axios";

export default function Recipes() {

  const [recipes, setRecipes] = useState([]);
  async function getRecipes() {
    await axios.get("http://localhost:3001/getRecipes")
        .then(res => setRecipes(res.data))
        .catch(e => console.log(e))
    console.log(recipes)
  }

  useEffect( () => {
    getRecipes();
  }, [])

  return (
      <React.Fragment>
        <div className={s.header}>
          <h1>Discover Recipes</h1>
          <div className={s.searchBar}>
            <div>
              <Icons.Search/>
              <input type='text' placeholder='Search now...'/>
            </div>
            <button>Search</button>
          </div>
        </div>
        <div className={s.recipeContainer}>
          {
            recipes.map(recipe => <RecipeTile title={recipe.title} id={recipe.id} img={recipe.image}/>)
          }
        </div>
      </React.Fragment>
  )
}