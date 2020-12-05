import React from "react";

const Ingredients = ({name, addToStack}) => {

  const handleSubmit = event => {
    // prevents the page from reloading
    event.preventDefault()
    addToStack(event.target.value)
    console.log(event.target.value)
  }

  return( 
  <div>
      <div className="ingredient">
       <p>{name}</p>
       <button value={name} onClick={handleSubmit}>+</button>
      </div>
  </div>
  )
}


export default Ingredients;
