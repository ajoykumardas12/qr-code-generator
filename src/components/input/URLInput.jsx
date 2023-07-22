import React, { useState, useEffect } from "react";

function URLInput(props) {
  const [urlInput, setURLInput] = useState("");

  useEffect(() => {
    props.onInputChange(urlInput);
  });

  function handleURLInputChange(event) {
    setURLInput(event.target.value);
  }

  //if any input then generate new qr
  function handleURLInputSumbit(event) {
    event.preventDefault();
    if (urlInput) {
      props.onGenerate();
    }
  }

  return (
    <form action="" onSubmit={handleURLInputSumbit}>
      <label htmlFor="input-for-qr" className="label">
        URL Input{" "}
      </label>
      <input
        type="text"
        name="input-for-qr"
        className="input"
        id="input-for-qr"
        value={urlInput}
        onChange={handleURLInputChange}
        autoComplete="off"
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default URLInput;
