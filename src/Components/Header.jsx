import React from "react";


const Header = props => {

    return(
        <nav className="navContainer">
        <h1 className="title">Memory Game</h1>
        <p>Click each card only once! if you click the same card you lose!</p>
        <p className="score">Score: {props.score}</p>
        <p className="bestScore">Best Score: {props.bestScore}</p>
      </nav>
    )
}

export default Header;