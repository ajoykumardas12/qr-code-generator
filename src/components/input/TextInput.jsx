import React, { useState, useEffect } from "react";
import InputLayout from "./InputLayout";

function TextInput(props) {
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    props.onInputChange(textInput);
  });

  function handleTextInputChange(event) {
    setTextInput(event.target.value);
  }

  //if any input then generate new qr
  function handleTextInputSumbit(event) {
    event.preventDefault();
    if (textInput) {
      props.onGenerate();
    }
  }

  return (
    <InputLayout heading="Text" description="Enter your text">
      <form action="" onSubmit={handleTextInputSumbit}>
        <div className="form-group">
          <label htmlFor="input-for-qr" className="label">
            Text Input
          </label>
          <input
            type="text"
            name="input-for-qr"
            className="input"
            id="input-for-qr"
            value={textInput}
            onChange={handleTextInputChange}
            autoComplete="off"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </InputLayout>
  );
}

export default TextInput;
