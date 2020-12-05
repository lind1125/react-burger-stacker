import React, {useState} from "react";
// Components imports
import IngredientList from "./components/IngredientList";
import BurgerPane from "./components/BurgerPane";
// CSS imports
import "./css/App.css";
import "./css/components/IngredientList.css";



const App = () => {

  const ingredientsArr =
  [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
  ]

    const [ingredients, setIngredients] = useState(ingredientsArr)
    
    

  return (
    <div className="App">
      <IngredientList
      ingredients={ingredients}
     
      />
      <BurgerPane 
      />
    </div>
  );
};

export default App
