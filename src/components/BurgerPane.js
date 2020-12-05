import React from "react";
import BurgerStack from "./BurgerStack";


const BurgerPane = ({stack, deleteList}) => {

  
  return (
  <div>
    <h1>BurgerPane</h1>
    < BurgerStack 
    stack={stack}/>
    <button onClick={() => deleteList()}>Clear Burger</button>
  </div>
  )
}

export default BurgerPane;
