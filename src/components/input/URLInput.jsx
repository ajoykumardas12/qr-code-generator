import React, {useState, useEffect} from "react";

function URLInput(props) {
    const [urlInput, setURLInput] = useState("");

    useEffect(() => {
        props.onInputChange("https://" + urlInput);
    })

    function handleURLInputChange(event){
        setURLInput(event.target.value);
    }

    return (
        <form action=""  onSubmit={props.onGenerate}>
            <label htmlFor="input-for-qr" className="label">URL Input </label>
            <input type="text" name="input-for-qr" className="input" id="input-for-qr" value={urlInput} onChange={handleURLInputChange} autoComplete="off" />
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
}

export default URLInput;