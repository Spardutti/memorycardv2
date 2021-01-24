import React from "react";

const Header = (props) => {
  return (
    <nav className="navContainer">
      <h1 className="title">Memory Game</h1>
      <p className="rules">
        Click each card only once! <br /> if you click the same <br/> 
        card twice you lose!
      </p>
      <p className="score">Score: {props.score}</p>
      <p className="bestScore">Best Score: {props.bestScore}</p>
    </nav>
  );
};

export default Header;
