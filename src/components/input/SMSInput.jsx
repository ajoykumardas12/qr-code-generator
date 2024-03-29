import React, { useEffect, useState } from "react";
import InputLayout from "./InputLayout";

function SMSInput(props) {
  const [smsInput, setSMSInput] = useState({
    to: "",
    body: "",
  });
  // sms:+447700900888?body=SMS Message  Remember to URL encode the + as %2B
  useEffect(() => {
    props.onInputChange("smsto:" + smsInput.to + "?body=" + smsInput.body);
  });

  function handleSMSInputChange(event) {
    if (event.target.name === "input-for-mailto") {
      setSMSInput((prevValue) => {
        let newSMSInput = { ...prevValue };
        newSMSInput.to = event.target.value;
        return newSMSInput;
      });
    } else if (event.target.name === "input-for-body") {
      setSMSInput((prevValue) => {
        let newSMSInput = { ...prevValue };
        newSMSInput.body = event.target.value;
        return newSMSInput;
      });
    }
  }

  //if any input then generate new qr
  function handleSMSInputSumbit(event) {
    event.preventDefault();
    if (smsInput.to || smsInput.body) {
      props.onGenerate();
    }
  }

  return (
    <InputLayout heading="SMS" description="Enter your sms">
      <form action="" onSubmit={handleSMSInputSumbit}>
        <div className="form-group">
          <label htmlFor="input-for-mailto" className="label">
            SMS To
          </label>
          <input
            type="text"
            name="input-for-mailto"
            className="input"
            id="input-for-mailto"
            value={smsInput.to}
            onChange={handleSMSInputChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-for-body" className="label">
            Body
          </label>
          <input
            type="text"
            name="input-for-body"
            className="input"
            id="input-for-body"
            value={smsInput.body}
            onChange={handleSMSInputChange}
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

export default SMSInput;
