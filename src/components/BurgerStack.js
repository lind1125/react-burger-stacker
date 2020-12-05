import React from "react";
import Ingredients from './Ingredients'
import shortid from 'shortid'

const BurgerStack = ({stack}) => {

  const renderList = stack.map(ingredient => {
    return (
    <li key={shortid.generate()}>
      <Ingredients name={ingredient.name} />
     </li>
    )
})

  return <div>
    <ul>
      {renderList}
    </ul>
  </div>;
};

export default BurgerStack;
