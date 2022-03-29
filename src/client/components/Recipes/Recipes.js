import React, {useEffect, useState} from "react";
import * as Icons from "@material-ui/icons";
import s from "./Recipes.module.css"
import RecipeTile from "./RecipeTile";
import Pagination from "../Pagination/Pagination";
import axios from "axios";

export default function Recipes() {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  async function getRecipes() {
    setLoading(true);
    await axios.get("http://localhost:3001/getRecipes")
        .then(res => setRecipes(res.data))
        .catch(e => console.log(e))
    setLoading(false);
    console.log(recipes)
  }

  useEffect( () => {
    getRecipes();
  }, [])

  useEffect(() => {
    setTimeout(
        () => window.scroll({behavior: "smooth", top: 0})
    , 150)
  }, [currentPage]);

  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentPosts = recipes.slice(indexFirstPost, indexLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            loading
              ? <h1>Loading...</h1>
              : currentPosts.map(recipe => <RecipeTile title={recipe.title} id={recipe.id} img={recipe.image} key={recipe.id}/>)
          }
        </div>
        <Pagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={recipes.length} currentPage={currentPage}/>
      </React.Fragment>
  )
}