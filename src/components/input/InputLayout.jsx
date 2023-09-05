import React from "react";

function InputLayout(props) {
  return (
    <section className="input-layout">
      <h2 className="input-heading">{props.heading}</h2>
      <p className="input-description">{props.description}</p>
      {props.children}
    </section>
  );
}

export default InputLayout;
