import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import Header from "./Components/Header";
import Images from "./Components/Images";
import images from "./Components/GetImages";

const App = (props) => {
  //initial order/state
  const [imgArr, setImgArr] = useState(images);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedImgArr, setClickedImgArr] = useState([]);
  const [displayImages, setDisplayImages] = useState(true);
  const onMount = useRef(true);
  const [ winner, setWinner ] = useState(false);
  //mix the array and select the first 12 elements to be displayed
  let shuffle = imgArr.sort(() => 0.5 - Math.random()).slice(0, 12);

  //---------------------------------

  const clickedImage = (e) => {
    //click and check if it was clicked previously
    if (clickedImgArr.indexOf(e.target.name) === -1 && displayImages === true) {
      setClickedImgArr((prevState) => [...prevState, e.target.name]);
      setScore(score + 1);
      if (score >= bestScore) {
        setBestScore(score + 1);
      }
    } else {
      alert("Lose");
      setDisplayImages(false);
    }
  };

  useEffect(() => {
    //set initial render
    if (onMount.current) {
      onMount.current = false;
    }
    //runs on updates
    else {
      if (score === 2) {
        alert("win");
        setWinner(true);
        setDisplayImages(false);
      }
    }
  }, [clickedImgArr, score]);

  return (
    <div>
      {winner ? <div> hola </div> : 
      <div>
      <Header score={score} bestScore={bestScore} />
      <Images shuffle={shuffle} mixit={displayImages ? clickedImage : null} />
      </div>}
    </div>
  );
};

export default App;
