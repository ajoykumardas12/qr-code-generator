import React, {useState, useEffect} from "react";

function PhoneInput(props) {
    const [phoneInput, setPhoneInput] = useState("");

    useEffect(() => {
        props.onInputChange("tel:" + phoneInput);
    })

    function handlePhoneInputChange(event){
        setPhoneInput(event.target.value);
    }

    //if any input then generate new qr
    function handlePhoneInputSumbit(event){
        event.preventDefault();
        if(phoneInput){
            props.onGenerate();
        };
    }

    return (
        <form action=""  onSubmit={handlePhoneInputSumbit}>
            <label htmlFor="input-for-qr" className="label">Phone Input </label>
            <input type="text" name="input-for-qr" className="input" id="input-for-qr" value={phoneInput} onChange={handlePhoneInputChange} autoComplete="off" />
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
}

export default PhoneInput;