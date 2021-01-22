import React from "react";
import HoverImage from "react-hover-image";
import yourFile from "../assets/img/bg1.jpg";
import yourFileHover from "../assets/img/bg2.jpg";


const ItemHoverImage = () => {
  return (
    <HoverImage src={yourFile} hoverSrc={yourFileHover}
      style={{
        resizeMode: "contain",
        height: "100%",
        width: "100%"
      }}
    />
  );
}

export default ItemHoverImage