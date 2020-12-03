import React from "react";

const Ingredients = ({name}) => {



  return( 
  <div>
      <div className="ingredient">
       <p>{name}</p>
       <button>+</button>
      </div>
  </div>
  )
}


export default Ingredients;
