import React from "react";

const Images = (props) => {

  return (
    <div className="imageContainer">
      {props.shuffle.map((e, index) => {
        return <img src={props.shuffle[index]} onClick={props.mixit} alt="" />;
      })}
    </div>
  );
};

export default Images;
