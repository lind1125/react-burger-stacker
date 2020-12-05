import React, {useState} from "react";
import Ingredients from './Ingredients'

const IngredientList = ({ingredients}) => {

// const [ingredientList, setIngredientList] = useState({ingredients})
const [stack, setStack] = useState([])

const addToStack = (ingredient) => {
  setStack([ingredient, ...stack])
  // setTodos([todo, ...todos])
  console.log(stack)
}

  return( 
  <div>
      <h1>IngredientList</h1>
      {ingredients.map(ingredient => (
      < Ingredients 
      name={ingredient.name}
      addToStack={addToStack} 
      />
      ))}
  </div>
  )
}

export default IngredientList;
