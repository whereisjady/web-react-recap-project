import { useState } from "react";

const ColorInput = ({ id }) => {
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
      />
      <input
        onChange={handleInputChange}
        value={inputValue}
        id={id}
        type="color"
        name={id}
        placeholder="#123456"
      />
    </div>
  );
};

export default ColorInput;
