import React from "react";

const Loser = (props) => {
  return (
    <div className="winnerScreen">
      <h1 className="loser">You Lose!</h1>
      <p className="loserMessage">You Best Score is: {props.bestScore}</p>
      <button onClick={props.playAgain}>Try Again ?</button>
    </div>
  );
};

export default Loser;
