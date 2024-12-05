import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);
  const [confirmDelete, setConfirmDelete] = useState(null);

  // add a color
  function addColor(myColor) {
    console.log(myColor);
    setColors([myColor, ...colors]);
  }

  // delete a color (confirmation)
  function handleDeleteConfirmation(colorId) {
    setConfirmDelete(colorId);
  }

  // delete a color (action)
  function handleDeleteColor(colorId) {
    setColors((prevColors) =>
      prevColors.filter((color) => color.id !== colorId)
    );
    setConfirmDelete(null);
  }

  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onAddColor={addColor} />
      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDeleteConfirmation}
            confirmDelete={confirmDelete === color.id}
            handleDeleteColor={handleDeleteColor}
            setConfirmDelete={setConfirmDelete}
          />
        );
      })}
    </>
  );
}

export default App;
