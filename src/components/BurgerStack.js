import React from "react";
import Ingredients from './Ingredients'
import shortid from 'shortid'

const BurgerStack = ({stack}) => {

  const renderList = stack.map(ingredient => {
    return <Ingredients key={shortid.generate()} name={ingredient.name} />
  })

  return <div>
    <ul>
      {renderList}
    </ul>
  </div>;
};

export default BurgerStack;
