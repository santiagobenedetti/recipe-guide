import React, {useEffect, useState} from "react";
import * as Icons from "@material-ui/icons";
import s from "./Recipes.module.css"
import RecipeTile from "./RecipeTile";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import {NavLink, useLocation, useParams} from "react-router-dom";

export default function Recipes() {
  let location = useLocation()

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  async function getRecipes() {
    setLoading(true);
    var data;
    await axios.get("http://localhost:3001/getRecipes")
        .then(res => data = (res.data))
        .catch(e => console.log(e))
    setLoading(false);
    return data;
  }

  useEffect( () => {
    getRecipes().then(data => {
      const queryParams = new URLSearchParams(location.search);
      const search = queryParams.get("search");
      if (search) {
        setSearch(search);
        setRecipes(data.filter(r => r.title.toLowerCase().includes(search.toLowerCase())));
      } else {
        setRecipes(data);
      }
    });
  }, [location.search])

  useEffect(() => {
    setTimeout(
        () => window.scroll({behavior: "smooth", top: 0})
    , 150)
  }, [currentPage]);

  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  //const [currentPosts, setCurrentPosts] = useState(recipes.slice(indexFirstPost, indexLastPost))
  const currentPosts = recipes.slice(indexFirstPost, indexLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /*SEARCHBAR*/


  return (
      <React.Fragment>
        <div className={s.header}>
          <h1>Discover Recipes</h1>
          <div className={s.searchBar}>
            <div>
              <Icons.Search/>
              <input type='text' placeholder='Search now...' value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <NavLink className={s.searchButton} to={'/recipes?search=' + search}>Search</NavLink>
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