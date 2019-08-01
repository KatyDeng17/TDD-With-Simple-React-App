import React from "react";
import "../components/css/Map.css";
function Map(props) {
  let imagePath;
  if (props.imagename) {
    imagePath = "images/" + props.imagename;
    console.log(imagePath);
  } else {
    imagePath = "images/none.png";
    console.log("no imagename passed in " + imagePath);
  }

  return (
    <div className="MapBox">
      <img src={imagePath} alt={props.location} />
    </div>
  );
}

export default Map;
