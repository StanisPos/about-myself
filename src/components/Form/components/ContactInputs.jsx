import React from "react";

function ContactsInputs(props) {
  return (
    <>
      <label>{props.label}</label>
      <input type="text" placeholder={props.text} />
    </>
  );
}

export default ContactsInputs;
