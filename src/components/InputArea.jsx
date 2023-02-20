import React from "react";
import "./InputArea.css";

function InputArea(props) {
    return (
        <div className="input-area">
            <form action=""  onSubmit={props.onGenerate}>
                <label htmlFor="input-for-qr"> Input </label>
                <input type="text" name="input-for-qr" id="input-for-qr" value={props.inpuValue} onChange={props.onInputChange}/>
                <button type="submit" className="generate-button">Generate QR Code</button>
            </form>
        </div>
    );
}

export default InputArea;