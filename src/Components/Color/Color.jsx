import "./Color.css";
import { useState } from "react";

export default function Color({ color, handleDeleteColor }) {
  const [confirmDelete, setConfirmDelete] = useState(null);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <button onClick={() => setConfirmDelete(color.id)}>Delete</button>
      {confirmDelete && (
        <div className="color-card-highlight">
          <p>Are you sure you want to delete this color?</p>
          <button onClick={() => handleDeleteColor(confirmDelete)}>
            Yes, delete
          </button>
          <button onClick={() => setConfirmDelete(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
