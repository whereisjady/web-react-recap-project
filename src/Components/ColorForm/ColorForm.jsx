import { nanoid } from "nanoid";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({ onAddColor, color, onSubmitColor }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const finalData = { id: color ? color.id : nanoid(), ...data };
    console.log(finalData);
    if (color) {
      onSubmitColor(finalData);
    } else {
      onAddColor(finalData);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <br />
      <input
        id="role"
        type="text"
        name="role"
        placeholder="some color"
        defaultValue={color?.role || ""}
      />
      <br />
      <label htmlFor="hex">Hex</label>
      <ColorInput id="hex" color={color?.hex} />
      <label htmlFor="contrastText">Contrast Text </label>

      <ColorInput id="contrastText" color={color?.contrastText} />

      <button>Submit</button>
    </form>
  );
}
