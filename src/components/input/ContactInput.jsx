import React, { useEffect, useState } from "react";

function ContactInput(props) {
    const [contactInput, setContactInput] = useState({
        name: "",
        email: "",
        phone: "",
        organization: ""
    });
    
    // BEGIN:VCARD\r\nVERSION:3.0\r\nN:${name}\r\nFN:${name}\r\nORG:${organization}\r\nTEL;TYPE=cell:${phone}\r\nEMAIL;PREF;INTERNET:${email}\r\nEND:VCARD
    useEffect(() => {
        props.onInputChange("BEGIN:VCARD\r\nVERSION:3.0\r\nN:" + contactInput.name + "\r\nFN:" + contactInput.name + "\r\nORG:" + contactInput.organization + "\r\nTEL;TYPE=cell:" + contactInput.phone + "\r\nEMAIL;PREF;INTERNET:" + contactInput.email + "\r\nEND:VCARD");
    })

    function handleContactInputChange(event){
        if(event.target.name === "input-for-name"){
            setContactInput((prevValue) => {
                let newContactInput = {...prevValue};
                newContactInput.name = event.target.value;
                return  newContactInput;
            });
        }else if(event.target.name === "input-for-phone"){
            setContactInput((prevValue) => {
                let newContactInput = {...prevValue};
                newContactInput.phone = event.target.value;
                return  newContactInput;
            });
        }else if(event.target.name === "input-for-email"){
            setContactInput((prevValue) => {
                let newContactInput = {...prevValue};
                newContactInput.email = event.target.value;
                return  newContactInput;
            });
        }else if(event.target.name === "input-for-organization"){
            setContactInput((prevValue) => {
                let newContactInput = {...prevValue};
                newContactInput.organization = event.target.value;
                return  newContactInput;
            });
        }
    }

    //if any input then generate new qr
    function handleContactInputSumbit(event){
        event.preventDefault();
        if(contactInput.name || contactInput.phone || contactInput.email || contactInput.organization){
            props.onGenerate();
        };
    }

    return (
        <form action=""  onSubmit={handleContactInputSumbit}>
            <label htmlFor="input-for-name" className="label">Name </label>
            <input type="text" name="input-for-name" className="input" id="input-for-name" value={contactInput.name} onChange={handleContactInputChange} autoComplete="off" />
            <label htmlFor="input-for-phone" className="label"> Phone </label>
            <input type="text" name="input-for-phone" className="input" id="input-for-phone" value={contactInput.phone} onChange={handleContactInputChange} autoComplete="off" />
            <label htmlFor="input-for-email" className="label"> Email </label>
            <input type="text" name="input-for-email" className="input" id="input-for-email" value={contactInput.email} onChange={handleContactInputChange} autoComplete="off" />
            <label htmlFor="input-for-organization" className="label"> Organization </label>
            <input type="text" name="input-for-organization" className="input" id="input-for-organization" value={contactInput.organization} onChange={handleContactInputChange} autoComplete="off" />
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
}

export default ContactInput;