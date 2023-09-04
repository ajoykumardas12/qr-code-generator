import React, { useState, useEffect } from "react";
import InputLayout from "./InputLayout";

function PhoneInput(props) {
  const [phoneInput, setPhoneInput] = useState("");

  useEffect(() => {
    props.onInputChange("tel:" + phoneInput);
  });

  function handlePhoneInputChange(event) {
    setPhoneInput(event.target.value);
  }

  //if any input then generate new qr
  function handlePhoneInputSumbit(event) {
    event.preventDefault();
    if (phoneInput) {
      props.onGenerate();
    }
  }

  return (
    <InputLayout heading="Phone" description="Enter the number to be called">
      <form action="" onSubmit={handlePhoneInputSumbit}>
        <div className="form-group">
          <label htmlFor="input-for-qr" className="label">
            Phone Number
          </label>
          <input
            type="text"
            name="input-for-qr"
            className="input"
            id="input-for-qr"
            value={phoneInput}
            onChange={handlePhoneInputChange}
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

export default PhoneInput;
