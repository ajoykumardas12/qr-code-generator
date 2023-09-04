import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./QRCodeArea.css";
import { Download, MinusCircle, PlusCircle } from "lucide-react";

function QRCodeArea(props) {
  const [imageOptions, setImageOptions] = useState({
    width: 600,
    margin: 4,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  });
  const [fileName, setFileName] = useState("qr-code.png");

  function incrementWidth() {
    if (imageOptions.width < 2000) {
      setImageOptions((prevValue) => {
        let newOptions = { ...prevValue };
        newOptions.width += 100;
        return newOptions;
      });
    }
  }
  function decrementWidth() {
    if (imageOptions.width > 100) {
      setImageOptions((prevValue) => {
        let newOptions = { ...prevValue };
        newOptions.width -= 100;
        return newOptions;
      });
    }
  }

  function handleColorChange(event) {
    let newColor = event.target.value;
    let newColorField = event.target.name;
    if (newColorField === "light-color") {
      setImageOptions((prevValue) => {
        let newOptions = { ...prevValue };
        newOptions.color.light = newColor;
        return newOptions;
      });
    } else {
      setImageOptions((prevValue) => {
        let newOptions = { ...prevValue };
        newOptions.color.dark = newColor;
        return newOptions;
      });
    }
  }

  function handleFileName(event) {
    setFileName(event.target.value);
  }

  function applyChanges() {
    props.optionsChange(imageOptions);
    toast.success("Applied changes! Try generating now!.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "light",
    });
  }

  return (
    <div className="qr-code-area">
      <img src={props.imgUrl} alt="sample qr code" className="qr-code" />
      <a href={props.imgUrl} download={fileName} className="button save-button">
        <Download size={20} />
        <p>Save as image</p>
      </a>
      <div className="options">
        <h3 className="options-title">Customize QR Code:</h3>
        <div className="image-width">
          <h4 className="options-subheading">Width:</h4>
          <div className="width-value-control">
            <button className="width-value-decrement" onClick={decrementWidth}>
              <MinusCircle fill="#bdcdd6" color="#0f3e50" />
            </button>
            <div className="width-value" name="image-width-input">
              {imageOptions.width}px
            </div>
            <button className="width-value-increment" onClick={incrementWidth}>
              <PlusCircle fill="#bdcdd6" color="#0f3e50" />
            </button>
          </div>
        </div>
        <div className="image-color">
          <h4 className="options-subheading">Colors:</h4>
          <div className="colors">
            <div className="image-color-background">
              <div
                className="color-box background-color"
                style={{ background: imageOptions.color.light }}
              >
                <input
                  type="color"
                  name="light-color"
                  id="light-color"
                  value={imageOptions.color.light}
                  onChange={handleColorChange}
                />
              </div>
              <label htmlFor="light-color">Background</label>
            </div>
            <div className="image-color-pixels">
              <div
                className="color-box pixels-color"
                style={{ background: imageOptions.color.dark }}
              >
                <input
                  type="color"
                  name="dark-color"
                  id="dark-color"
                  value={imageOptions.color.dark}
                  onChange={handleColorChange}
                />
              </div>
              <label htmlFor="dark-color">Pixels</label>
            </div>
          </div>
        </div>
        <div className="image-file-name">
          <label htmlFor="image-file-name-input" className="options-subheading">
            File Name:
          </label>
          <input
            type="text"
            name="image-file-name-input"
            id="image-file-name-input"
            className="file-name-input"
            value={fileName}
            onChange={handleFileName}
          />
        </div>
      </div>
      <button className="button apply-changes" onClick={applyChanges}>
        Apply Changes
      </button>
      <ToastContainer />
    </div>
  );
}

export default QRCodeArea;
