// export to parent component
// create a form
// be able to submit new colors (event)
// these need to be added to the theme (within parent component)
// in the parent, create useState so initialColors can be changed into a set containing the added color + old colors
// add nanoID (see line 16)
// develop colorinput component for the hex picker to the input fields (Controlled Inputs)

import { nanoid } from "nanoid";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({ onAddColor }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const finalData = { id: nanoid(), ...data };
    onAddColor(finalData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input id="role" type="text" name="role" placeholder="some color" />
      <label htmlFor="hex">Hex</label>
      {/* <input id="hex" type="text" name="hex" placeholder="#123456" /> */}
      <ColorInput id="hex" />
      <label htmlFor="contrastText">Contrast Text </label>
      {/* <input
        id="contrastText"
        type="text"
        name="contrastText"
        placeholder="#ffffff"
      /> */}
      <ColorInput id="contrastText" />

      <button>Submit</button>
    </form>
  );
}
