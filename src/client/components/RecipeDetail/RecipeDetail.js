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
          .then(res => {setRecipe(res.data); console.log('ya busque', res.data)})
          .catch(e => console.log(e))

      setLoading(false);
      console.log(recipe.analyzedInstructions)
    }
    getInfo();
  }, [])

  return(
      <div>
        <GoBackButton url={'/recipes'}/>
        {
          loading ? <h2 className={s.load}>Loading...</h2> :
              <React.Fragment>
                <div className={s.header}>
                  <div>
                    <h1>{recipe.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                  </div>
                  <img src={recipe.image} alt='img'/>
                </div>
                <section className={s.preparation}>
                  <div className={s.instructions}>
                    {
                      recipe.analyzedInstructions ?
                       <ol>
                         {recipe.analyzedInstructions[0].steps.map(i => <li key={i.number}>{i.step}</li>)}
                       </ol>
                        : <p>{recipe.instructions}</p>
                    }
                  </div>
                  <ul className={s.ingredients}>
                    {
                      recipe.extendedIngredients ?
                      recipe.extendedIngredients.map(i =>
                          <li key={i.name}>{i.name} {i.unit === 'servings' ? '' : `(${i.measures.metric.amount} ${i.measures.metric.unitShort})`}</li>
                      )
                      : recipe.ingredients
                    }
                  </ul>
                </section>
              </React.Fragment>
        }
      </div>
  )
}