import React from 'react'
import IngredientList from './IngredientList'
import ClaudeRecipe from './ClaudeRecipe'
import { getRecipeFromMistral } from './ai'

const Main = () => {
  const [myIngredients,setMyIngredients] = React.useState([])

  const [recipe, setRecipe] = React.useState(false)
  const recipeSection = React.useRef(null)
  console.log(recipeSection)

  React.useEffect(()=>{
      if(recipe !== "" && recipeSection.current !== null){
        recipeSection.current.scrollIntoView({behavior: "smooth"})
      }
  },[recipe])


  async function getRecipe(){
    const recipeMarkdown = await getRecipeFromMistral(myIngredients)
    setRecipe(recipeMarkdown)
  }
  
  function addIngredient(formData){
    const newIngredient = formData.get("ingredient")
    setMyIngredients(prevIngredients => [...prevIngredients , newIngredient])
  }

  // DOMNode.scrollIntoView()
  

  return (
    <main className='form-container'>
        <form className='info' action={addIngredient}>
            <input
            ref={recipeSection}
             type='text'
             placeholder='e.g. briyani'
             aria-label = "Add ingredient" 
             name = "ingredient"
             />
            <button>+ Add Ingredient</button>
        </form>


        {
        myIngredients.length > 0 && <IngredientList 
                ref={recipeSection}
                myIngredients={myIngredients} 
                getRecipe = {getRecipe}
                />
        }


        {recipe && <ClaudeRecipe recipe={recipe}/>}
        
        
    </main>
  )
}

export default Main