import React, { useState } from "react";
import InputArea from "./components/InputArea";
import QRCodeArea from "./components/QRCodeArea";
import Header from "./components/Header";
import NavArea from "./components/NavArea";

import QRCode from "qrcode";
import sampleQR from "./images/sample-qr.png";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [qRCodeUrl, setQRCodeUrl] = useState(sampleQR);
  const [options, setOptions] = useState({
    width: 600,
    margin: 3,
    color:{
      dark: '#6096B4',
      light: '#ffffff'
    }
  });

  function handleInput(value){
    setInput(value);
  }

  function changeQRUrl(newUrl){
    setQRCodeUrl(newUrl);
  }

  function handleOptionsChange(newOptions){
    setOptions(newOptions);
  }

  function handleGenerate(){
    QRCode.toDataURL(input, options)
    .then(url => {
      changeQRUrl(url)
    })
    .catch(err => {
      console.error(err)
    })
    // setInput("");
  }

  return (
    <div className="app">
      <Header></Header>
      <main className="main">
        <NavArea />
        <InputArea 
          inputValue={input}
          onInputChange={handleInput}
          onGenerate={handleGenerate}
        />
        <QRCodeArea 
          imgUrl={qRCodeUrl}
          optionsChange={handleOptionsChange}
        />
      </main>
    </div>
  );
}

export default App;
