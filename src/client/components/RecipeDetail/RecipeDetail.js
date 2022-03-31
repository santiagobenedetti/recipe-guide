import React, {useEffect, useState} from "react";
import s from "./RecipeDetail.module.css";
import GoBackButton from "../GoBackButton/GoBackButton";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function RecipeDetail() {

  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const id = useParams().id;

  useEffect(() => {
    setLoading(true);
    const getInfo = async () => {
      console.log('estoy buscando a la api')
      await axios.get('http://localhost:3001/getRecipes/' + id)
          .then(res => setRecipe(res.data))
          .catch(e => console.log(e))
      setLoading(false);
      console.log('ya busque', recipe)
    }
    getInfo();
  }, [])

  return(
      <div>
        <GoBackButton />
        {
          loading ? <h2 className={s.load}>Loading...</h2> :
              <div className={s.header}>
                <h1>{recipe.title}</h1>
                <img src={recipe.image} alt='img'/>
              </div>
        }
      </div>
  )
}