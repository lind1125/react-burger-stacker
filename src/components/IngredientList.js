import React from "react";
import Ingredients from './Ingredients'

const IngredientList = ({ingredients, addToStack}) => {

  const renderList = ingredients.map((ingredient, index) => {
    return <li key={index}>
        <Ingredients key={index} name={ingredient.name} />
        <button onClick={()=> addToStack(ingredient)}>Add to Stack</button>
    </li>
})

  return( 
  <div>
    <h1>IngredientList</h1>
    <ul>
      {renderList}
    </ul>
  </div>
  )
}

export default IngredientList;
