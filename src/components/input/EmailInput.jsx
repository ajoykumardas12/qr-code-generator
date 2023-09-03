import React, { useEffect, useState } from "react";
import InputLayout from "./InputLayout";

function EmailInput(props) {
  const [emailInput, setEmailInput] = useState({
    to: "",
    subject: "",
    body: "",
  });
  // mailto:someone@example.com?cc=someone_else@example.com&subject=This%20is%20the%20subject&body=This%20is%20the%20body
  useEffect(() => {
    props.onInputChange(
      "mailto:" +
        emailInput.to +
        "?subject=" +
        emailInput.subject +
        "&body=" +
        emailInput.body
    );
  });

  function handleEmailInputChange(event) {
    if (event.target.name === "input-for-mailto") {
      setEmailInput((prevValue) => {
        let newEmailInput = { ...prevValue };
        newEmailInput.to = event.target.value;
        return newEmailInput;
      });
    } else if (event.target.name === "input-for-subject") {
      setEmailInput((prevValue) => {
        let newEmailInput = { ...prevValue };
        newEmailInput.subject = event.target.value;
        return newEmailInput;
      });
    } else if (event.target.name === "input-for-body") {
      setEmailInput((prevValue) => {
        let newEmailInput = { ...prevValue };
        newEmailInput.body = event.target.value;
        return newEmailInput;
      });
    }
  }

  //if any input then generate new qr
  function handleEmailInputSumbit(event) {
    event.preventDefault();
    if (emailInput.to || emailInput.subject || emailInput.body) {
      props.onGenerate();
    }
  }

  return (
    <InputLayout heading="Email" description="Enter email contents">
      <form action="" onSubmit={handleEmailInputSumbit}>
        <label htmlFor="input-for-mailto" className="label">
          Email To
        </label>
        <input
          type="text"
          name="input-for-mailto"
          className="input"
          id="input-for-mailto"
          value={emailInput.to}
          onChange={handleEmailInputChange}
          autoComplete="off"
        />
        <label htmlFor="input-for-subject" className="label">
          Subject
        </label>
        <input
          type="text"
          name="input-for-subject"
          className="input"
          id="input-for-subject"
          value={emailInput.subject}
          onChange={handleEmailInputChange}
          autoComplete="off"
        />
        <label htmlFor="input-for-body" className="label">
          Body
        </label>
        <input
          type="text"
          name="input-for-body"
          className="input"
          id="input-for-body"
          value={emailInput.body}
          onChange={handleEmailInputChange}
          autoComplete="off"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </InputLayout>
  );
}

export default EmailInput;
