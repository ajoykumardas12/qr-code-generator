import React from "react";
import "./InputArea.css";

function InputArea(props) {
    return (
        <div className="input-area">
            <form action=""  onSubmit={props.onGenerate}>
                <label htmlFor="input-for-qr"> Input </label>
                <input type="text" name="input-for-qr" id="input-for-qr" value={props.inputValue} onChange={props.onInputChange} autoComplete="off" />
            </form>
        </div>
    );
}

export default InputArea;