import React, { useEffect, useState } from "react";

function ContactInput(props) {
  const [contactInput, setContactInput] = useState({
    name: "",
    mobile: "",
    phone: "",
    email: "",
    organization: "",
    website: "",
    street: "",
    city: "",
    district: "",
    postalCode: "",
    country: "",
  });

  // BEGIN:VCARD\r\nVERSION:3.0\r\nN:${name}\r\nFN:${name}\r\nORG:${organization}\r\nTEL;TYPE=cell:${phone}\r\nEMAIL;PREF;INTERNET:${email}\r\nEND:VCARD
  useEffect(() => {
    props.onInputChange(
      "BEGIN:VCARD\r\nVERSION:3.0\r\nN:" +
        contactInput.name +
        "\r\nFN:" +
        contactInput.name +
        "\r\nORG:" +
        contactInput.organization +
        "\r\nTEL;TYPE=cell:" +
        contactInput.mobile +
        "\r\nTEL;TYPE=TEL:" +
        contactInput.phone +
        "\r\nEMAIL;PREF;INTERNET:" +
        contactInput.email +
        "\r\nURL:" +
        contactInput.website +
        "\r\nADR:;;" +
        contactInput.street +
        ";" +
        contactInput.city +
        ";" +
        contactInput.district +
        ";" +
        contactInput.postalCode +
        ";" +
        contactInput.country +
        "\r\nEND:VCARD",
    );
  });

  function handleContactInputChange(event) {
    if (event.target.name === "input-for-name") {
      setContactInput((prevValue) => {
        let newContactInput = { ...prevValue };
        newContactInput.name = event.target.value;
        return newContactInput;
      });
    } else if (event.target.name === "input-for-mobile") {
      setContactInput((prevValue) => {
        let newContactInput = { ...prevValue };
        newContactInput.mobile = event.target.value;
        return newContactInput;
      });
    } else if (event.target.name === "input-for-phone") {
      setContactInput((prevValue) => {
        let newContactInput = { ...prevValue };
        newContactInput.phone = event.target.value;
        return newContactInput;
      });
    } else if (event.target.name === "input-for-email") {
      setContactInput((prevValue) => {
        let newContactInput = { ...prevValue };
        newContactInput.email = event.target.value;
        return newContactInput;
      });
    } else if (event.target.name === "input-for-organization") {
      setContactInput((prevValue) => {
        let newContactInput = { ...prevValue };
        newContactInput.organization = event.target.value;
        return newContactInput;
      });
    } else if (event.target.name === "input-for-website") {
      setContactInput((prevValue) => {
        let newContactInput = { ...prevValue };
        newContactInput.website = event.target.value;
        return newContactInput;
      });
    } else if (event.target.name === "input-for-street") {
      setContactInput((prevValue) => {
        let newContactInput = { ...prevValue };
        newContactInput.street = event.target.value;
        return newContactInput;
      });
    } else if (event.target.name === "input-for-city") {
      setContactInput((prevValue) => {
        let newContactInput = { ...prevValue };
        newContactInput.city = event.target.value;
        return newContactInput;
      });
    } else if (event.target.name === "input-for-district") {
      setContactInput((prevValue) => {
        let newContactInput = { ...prevValue };
        newContactInput.district = event.target.value;
        return newContactInput;
      });
    } else if (event.target.name === "input-for-postal-code") {
      setContactInput((prevValue) => {
        let newContactInput = { ...prevValue };
        newContactInput.postalCode = event.target.value;
        return newContactInput;
      });
    } else if (event.target.name === "input-for-country") {
      setContactInput((prevValue) => {
        let newContactInput = { ...prevValue };
        newContactInput.country = event.target.value;
        return newContactInput;
      });
    }
  }

  //if any input then generate new qr
  function handleContactInputSumbit(event) {
    event.preventDefault();
    if (
      contactInput.name ||
      contactInput.mobile ||
      contactInput.phone ||
      contactInput.email ||
      contactInput.organization ||
      contactInput.website ||
      contactInput.street ||
      contactInput.city ||
      contactInput.district ||
      contactInput.postalCode ||
      contactInput.country
    ) {
      props.onGenerate();
    }
  }

  return (
    <form
      action=""
      onSubmit={handleContactInputSumbit}
      className="contact-input"
    >
      <label htmlFor="input-for-name" className="label">
        Contact Name{" "}
      </label>
      <input
        type="text"
        name="input-for-name"
        className="input"
        id="input-for-name"
        value={contactInput.name}
        onChange={handleContactInputChange}
        autoComplete="off"
      />
      <label htmlFor="input-for-mobile" className="label">
        {" "}
        Mobile{" "}
      </label>
      <input
        type="text"
        name="input-for-mobile"
        className="input"
        id="input-for-mobile"
        value={contactInput.mobile}
        onChange={handleContactInputChange}
        autoComplete="off"
      />
      <label htmlFor="input-for-phone" className="label">
        {" "}
        Phone{" "}
      </label>
      <input
        type="text"
        name="input-for-phone"
        className="input"
        id="input-for-phone"
        value={contactInput.phone}
        onChange={handleContactInputChange}
        autoComplete="off"
      />
      <label htmlFor="input-for-email" className="label">
        {" "}
        Email{" "}
      </label>
      <input
        type="text"
        name="input-for-email"
        className="input"
        id="input-for-email"
        value={contactInput.email}
        onChange={handleContactInputChange}
        autoComplete="off"
      />
      <label htmlFor="input-for-organization" className="label">
        {" "}
        Organization{" "}
      </label>
      <input
        type="text"
        name="input-for-organization"
        className="input"
        id="input-for-organization"
        value={contactInput.organization}
        onChange={handleContactInputChange}
        autoComplete="off"
      />
      <label htmlFor="input-for-website" className="label">
        {" "}
        Website{" "}
      </label>
      <input
        type="text"
        name="input-for-website"
        className="input"
        id="input-for-website"
        value={contactInput.website}
        onChange={handleContactInputChange}
        autoComplete="off"
      />
      <label htmlFor="input-for-street" className="label">
        {" "}
        Street{" "}
      </label>
      <input
        type="text"
        name="input-for-street"
        className="input"
        id="input-for-street"
        value={contactInput.street}
        onChange={handleContactInputChange}
        autoComplete="off"
      />
      <label htmlFor="input-for-city" className="label">
        {" "}
        City{" "}
      </label>
      <input
        type="text"
        name="input-for-city"
        className="input"
        id="input-for-city"
        value={contactInput.city}
        onChange={handleContactInputChange}
        autoComplete="off"
      />
      <label htmlFor="input-for-district" className="label">
        {" "}
        District{" "}
      </label>
      <input
        type="text"
        name="input-for-district"
        className="input"
        id="input-for-district"
        value={contactInput.district}
        onChange={handleContactInputChange}
        autoComplete="off"
      />
      <label htmlFor="input-for-postal-code" className="label">
        {" "}
        Postal Code{" "}
      </label>
      <input
        type="text"
        name="input-for-postal-code"
        className="input"
        id="input-for-postal-code"
        value={contactInput.postalCode}
        onChange={handleContactInputChange}
        autoComplete="off"
      />
      <label htmlFor="input-for-country" className="label">
        {" "}
        Country{" "}
      </label>
      <input
        type="text"
        name="input-for-country"
        className="input"
        id="input-for-country"
        value={contactInput.country}
        onChange={handleContactInputChange}
        autoComplete="off"
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default ContactInput;
