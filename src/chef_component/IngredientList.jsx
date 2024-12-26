import React from 'react'

const IngredientList = (props) => {
    const ingredientListItems = props.myIngredients.map(ingredient => 
        (<li key = {ingredient}>{ingredient}</li>
    
        ))
  return (
    <section>
          <h2>Ingredients on hand:</h2>
          <ul className="items" aria-live='polite'>{ingredientListItems}</ul>
          {props.myIngredients.length > 3 &&<div className="get-recipe-conatiner">
            <div ref={props.ref}>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.getRecipe}>Get a recipe</button>
          </div>}
        </section>
  )
}

export default IngredientList