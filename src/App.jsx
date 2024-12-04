import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);
  function addColor(myColor) {
    console.log(myColor);
    // const newColors = [cupcake, ...colors];
    setColors([myColor, ...colors]);
  }
  console.log(colors);
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={addColor} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
