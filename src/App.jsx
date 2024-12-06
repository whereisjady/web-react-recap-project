import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);
  const [editColor, setEditColor] = useState(null);

  // add a color
  function addColor(myColor) {
    console.log(myColor);
    setColors([myColor, ...colors]);
  }

  // delete a color (action)
  function handleDeleteColor(colorId) {
    setColors((prevColors) =>
      prevColors.filter((color) => color.id !== colorId)
    );
  }

  // save edited color
  function handleEditColor(updatedColor) {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
    setEditColor(null); // Exit edit mode
  }

  // cancel edited color
  function handleCancelEdit() {
    setEditColor(null);
  }

  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onAddColor={addColor} buttonText="Add Color" />

      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
          handleDeleteColor={handleDeleteColor}
          onEdit={() => setEditColor(color.id)}
          onSave={handleEditColor}
          onCancel={handleCancelEdit}
          isEditing={editColor === color.id}
        />
      ))}
    </>
  );
}

export default App;
