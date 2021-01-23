import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "./Components/Header";
import Images from "./Components/Images";
import images from "./Components/GetImages";

const App = (props) => {
  //mix the array and select the first 12 elements to be displayed
  const mixit = () => {
    console.log("mixxin")
    return 0.5 - Math.random();
  };
  let shuffle = images.sort(mixit).slice(0, 12);
  //---------------------------------

 

  return (
    <div>
      <Header />
      <Images shuffle={shuffle} mixit={mixit}/>
    </div>
  );
};

export default App;
