import "./Color.css";

export default function Color({
  color,
  onDelete,
  confirmDelete,
  handleDeleteColor,
  setConfirmDelete,
}) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {confirmDelete ? (
        <div className="color-card-highlight">
          <p>Are you sure you want to delete this color?</p>
          <button onClick={() => handleDeleteColor(color.id)}>
            Yes, delete
          </button>
          <button onClick={() => setConfirmDelete(null)}>Cancel</button>
        </div>
      ) : (
        <>
          <h3 className="color-card-headline">{color.hex}</h3>
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>
          <button onClick={() => onDelete(color.id)}>Delete</button>
        </>
      )}
    </div>
  );
}
