import React from "react";

const Ingredients = ({name, addToStack}) => {

  return( 
  <div>
      <div className="ingredient">
       {name}
      </div>
  </div>
  )
}


export default Ingredients;
