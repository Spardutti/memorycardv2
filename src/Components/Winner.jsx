import React from "react";

const Winner = (props) => {
  return (
    <div className="winnerScreen">
      <h1 id="winner" className="winner">
        You Win!
      </h1>
      <p className="winnerMessage">Congratulations!!</p>
      <button onClick={props.playAgain}>Play Again!</button>
    </div>
  );
};

export default Winner;
