import React from "react";
import TextInput from "./input/TextInput";
import URLInput from "./input/URLInput";
import EmailInput from "./input/EmailInput";
import SMSInput from "./input/SMSInput";
import PhoneInput from "./input/PhoneInput";
import ContactInput from "./input/ContactInput";
import WifiInput from "./input/WifiInput";
import { Routes, Route } from "react-router-dom";

import "./InputArea.css";

function InputArea(props) {
  return (
    <>
      <div className="input-area">
        <Routes>
          <Route
            path="/"
            element={
              <TextInput
                onInputChange={props.onInputChange}
                onGenerate={props.onGenerate}
              />
            }
          />
          <Route
            path="/website"
            element={
              <URLInput
                onInputChange={props.onInputChange}
                onGenerate={props.onGenerate}
              />
            }
          />
          <Route
            path="/email"
            element={
              <EmailInput
                onInputChange={props.onInputChange}
                onGenerate={props.onGenerate}
              />
            }
          />
          <Route
            path="/sms"
            element={
              <SMSInput
                onInputChange={props.onInputChange}
                onGenerate={props.onGenerate}
              />
            }
          />
          <Route
            path="/phone"
            element={
              <PhoneInput
                onInputChange={props.onInputChange}
                onGenerate={props.onGenerate}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactInput
                onInputChange={props.onInputChange}
                onGenerate={props.onGenerate}
              />
            }
          />
          <Route
            path="/wifi"
            element={
              <WifiInput
                onInputChange={props.onInputChange}
                onGenerate={props.onGenerate}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default InputArea;
