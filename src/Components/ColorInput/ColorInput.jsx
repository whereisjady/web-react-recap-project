import { useState } from "react";

const ColorInput = ({ id, color }) => {
  const [inputValue, setInputValue] = useState();
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input
        onChange={handleInputChange}
        value={inputValue}
        id={id}
        type="text"
        name={id}
        placeholder="#123456"
        defaultValue={color || ""}
      />
      <input
        onChange={handleInputChange}
        value={inputValue}
        id={id}
        type="color"
        name={id}
        placeholder="#123456"
        defaultValue={color || ""}
      />
    </div>
  );
};

export default ColorInput;
