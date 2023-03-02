import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./QRCodeArea.css";

function QRCodeArea(props) {
    const [imageOptions, setImageOptions] = useState({
        width: 600,
        margin: 4,
        color: {
            dark: '#93BFCF',
            light: '#ffffff'
        }
    });
    const [fileName, setFileName] = useState("QR-code");

    function incrementWidth(){
        if(imageOptions.width < 2000){
            setImageOptions((prevValue) => {
                let newOptions = {...prevValue};
                newOptions.width += 100;
                return newOptions;
            })
        }
    }
    function decrementWidth(){
        if(imageOptions.width > 100){
            setImageOptions((prevValue) => {
                let newOptions = {...prevValue};
                newOptions.width -= 100;
                return newOptions;
            })
        }
    }

    function handleColorChange(event){
        let newColor = event.target.value;
        let newColorField = event.target.name;
        if(newColorField === "light-color"){
            setImageOptions((prevValue) => {
                let newOptions = {...prevValue};
                newOptions.color.light = newColor;
                return newOptions;
            })
        }else{
            setImageOptions((prevValue) => {
                let newOptions = {...prevValue};
                newOptions.color.dark = newColor;
                return newOptions;
            })
        }
    }

    function handleFileName(event) {
        setFileName(event.target.value);
    }

    function applyChanges(){
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
            <img src={props.imgUrl} alt="sample qr code" className="qr-code"/>
            <a href={props.imgUrl} download={fileName} className="button save-button">Save</a>
            <div className="options">
                <div className="image-width">
                    <label htmlFor="image-width-input">Width:</label>
                    <div className="width-value-control">
                    <div className="width-value-decrement" onClick={decrementWidth}>
                        <ion-icon name="remove-outline"></ion-icon>
                    </div>
                    <div className="width-value" name="image-width-input">{imageOptions.width}px</div>
                    <div className="width-value-increment" onClick={incrementWidth}>
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    </div>
                </div>
                {/* Later */}
                {/* <div className="image-margin">
                    <label htmlFor="image-margin-input">Outer Margin:</label>
                    <select name="margin-input" id="margin-input">
                        <option value="0">No Margin</option>
                        <option value="1">Smaller</option>
                        <option value="2">Small</option>
                        <option value="4">Default</option>
                        <option value="5">Large</option>
                        <option value="6">Larger</option>
                    </select>
                </div> */}
                <div className="image-color">
                    <span>Color:</span>
                    <div className="colors">
                        <div className="image-color-background">
                            <div className="color-box background-color" style={{"background": imageOptions.color.light}}>
                                <input type="color" name="light-color" value={imageOptions.color.light} onChange={handleColorChange}/>
                            </div>
                            <span>Background</span>
                        </div>
                        <div className="image-color-pixels">
                            <div className="color-box pixels-color" style={{"background": imageOptions.color.dark}}>
                                <input type="color" name="dark-color" value={imageOptions.color.dark} onChange={handleColorChange}/>
                            </div>
                            <span>Pixels</span>
                        </div>
                    </div>
                </div>
                <div className="image-file-name">
                    <label htmlFor="image-file-name-input">File Name:</label>
                    <input type="text" name="image-file-name-input" className="input" value={fileName} onChange={handleFileName}/>
                </div>
            </div>
            <button className="button apply-changes" onClick={applyChanges}>Apply Changes</button>
            <ToastContainer/>
        </div>
    );
}

export default QRCodeArea;