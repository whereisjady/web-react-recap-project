import React, { useState } from "react";

export default function ColorForm({ onAddColor }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !color) {
      alert("Please fill out both fields!");
      return;
    }

    // Pass the new color data to the parent
    onAddColor({ name, color });

    // Reset form fields
    setName("");
    setColor("");
  };

  return (
    <form onSubmit={handleSubmit} className="color-form">
      <div>
        <label htmlFor="color-name">Color Name:</label>
        <input
          id="color-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter color name"
        />
      </div>
      <div>
        <label htmlFor="color-code">Color Code:</label>
        <input
          id="color-code"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter color code (e.g., #ff0000)"
        />
      </div>
      <button type="submit">Add Color</button>
    </form>
  );
}
