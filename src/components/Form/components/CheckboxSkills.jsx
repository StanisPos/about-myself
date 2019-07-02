import React from "react";

function CheckboxSkills(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.text}</label>
      <input id={props.id} type="checkbox" />
    </>
  );
}

export default CheckboxSkills;
