import React from "react";

function RadioButtons(props) {
  return (
    <>
      <label htmlFor={props.value}>{props.text}</label>
      <input
        id={props.value}
        type="radio"
        value={props.value}
        checked={props.check}
      />
    </>
  );
}

export default RadioButtons;
