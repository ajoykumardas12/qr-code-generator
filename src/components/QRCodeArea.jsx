import React from "react";
import "./QRCodeArea.css";

function QRCodeArea(props) {
    return (
        <div className="qr-code-area">
            <img src={props.imgUrl} alt="sample qr code" className="qr-code"/>
        </div>
    );
}

export default QRCodeArea;