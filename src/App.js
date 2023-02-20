import React, { useState } from "react";
import InputArea from "./components/InputArea";
import QRCodeArea from "./components/QRCodeArea";
import Save from "./components/Save";

// import generateQR from "./generateQR";
import QRCode from "qrcode";
import sampleQR from "./images/sample-qr.png";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [qRCodeUrl, setQRCodeUrl] = useState(sampleQR);

  function handleInput(event){
    setInput(event.target.value);
  }

  function changeQRUrl(newUrl){
    setQRCodeUrl(newUrl);
  }

  function handleGenerate(event){
    event.preventDefault();
    
    if(input){
      QRCode.toDataURL(input)
      .then(url => {
        changeQRUrl(url)
      })
      .catch(err => {
        console.error(err)
      })
    }
  }

  return (
    <main>
      <div className="app">
      <InputArea 
        inputValue={input}
        onInputChange={handleInput}
        onGenerate={handleGenerate}
      />
      <QRCodeArea imgUrl={qRCodeUrl}/>
      <Save/>
    </div>
    </main>
  );
}

export default App;
