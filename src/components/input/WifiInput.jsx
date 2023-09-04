import React, { useEffect, useState } from "react";
import InputLayout from "./InputLayout";

function WifiInput(props) {
  const [wifiInput, setWifiInput] = useState({
    ssid: "",
    password: "",
    encryption: "",
  });
  // WIFI:S:<SSID>;T:<Authentication Type>;P:<Password>;;
  useEffect(() => {
    props.onInputChange(
      "WIFI:S:" +
        wifiInput.ssid +
        ";T:" +
        wifiInput.encryption +
        ";P:" +
        wifiInput.password +
        ";;"
    );
  });

  function handleWifiInputChange(event) {
    const authTypeRadioInputRegex = /^input-for-auth-type/;
    if (event.target.name === "input-for-ssid") {
      setWifiInput((prevValue) => {
        let newWifiInput = { ...prevValue };
        newWifiInput.ssid = event.target.value;
        return newWifiInput;
      });
    } else if (event.target.name === "input-for-password") {
      setWifiInput((prevValue) => {
        let newWifiInput = { ...prevValue };
        newWifiInput.password = event.target.value;
        return newWifiInput;
      });
    } else if (authTypeRadioInputRegex.test(event.target.name)) {
      setWifiInput((prevValue) => {
        let newWifiInput = { ...prevValue };
        newWifiInput.encryption = event.target.value;
        return newWifiInput;
      });
    }
  }

  //if any input then generate new qr
  function handleWifiInputSumbit(event) {
    event.preventDefault();
    if (wifiInput.ssid || wifiInput.password || wifiInput.encryption) {
      props.onGenerate();
    }
  }

  return (
    <InputLayout heading="Wifi" description="Enter wifi details">
      <form action="" onSubmit={handleWifiInputSumbit}>
        <div className="form-group">
          <label htmlFor="input-for-ssid" className="label">
            SSID
          </label>
          <input
            type="text"
            name="input-for-ssid"
            className="input"
            id="input-for-ssid"
            value={wifiInput.ssid}
            onChange={handleWifiInputChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-for-password" className="label">
            Password
          </label>
          <input
            type="text"
            name="input-for-password"
            className="input"
            id="input-for-password"
            value={wifiInput.password}
            onChange={handleWifiInputChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-for-auth-type" className="label">
            Encryption Type
          </label>
          <div className="encryption-type">
            <div className="encryption-type-radio">
              <input
                type="radio"
                name="input-for-auth-type1"
                id="none"
                value="none"
                checked={wifiInput.encryption === "none"}
                onChange={handleWifiInputChange}
              />
              <label htmlFor="none">None</label>
            </div>
            <div className="encryption-type-radio">
              <input
                type="radio"
                name="input-for-auth-type2"
                id="wap"
                value="WAP"
                checked={wifiInput.encryption === "WAP"}
                onChange={handleWifiInputChange}
              />
              <label htmlFor="wap">WAP</label>
            </div>
            <div className="encryption-type-radio">
              <input
                type="radio"
                name="input-for-auth-type3"
                id="wpa"
                value="WPA"
                checked={wifiInput.encryption === "WPA"}
                onChange={handleWifiInputChange}
              />
              <label htmlFor="wpa">WPA</label>
            </div>
            <div className="encryption-type-radio">
              <input
                type="radio"
                name="input-for-auth-type4"
                id="wpa2"
                value="WPA2"
                checked={wifiInput.encryption === "WPA2"}
                onChange={handleWifiInputChange}
              />
              <label htmlFor="wpa2">WPA2</label>
            </div>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </InputLayout>
  );
}

export default WifiInput;
