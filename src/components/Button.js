import React from "react";
import "../components/css/Button.css";

function Button(props) {
  return (
    <button
      value={props.location}
      onClick={props.handleClick}
      className="location-button"
    >
      {props.location ? props.location : "All Locations"}
    </button>
  );
}

export default Button;
