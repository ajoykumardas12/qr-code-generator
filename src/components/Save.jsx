import React from "react";
import "./Save.css";

function Save(props) {
    return (
        <div className="save">
            <a href={props.imgUrl} download="qr-code.png" className="save-button">Save</a>
        </div>
    );
}

export default Save;