import React from "react";


const Header = () => {

    return(
        <nav className="navContainer">
        <h1 className="title">Memory Game</h1>
        <p>Click each card only once! if you click the same card you lose!</p>
        <p className="score">Score: 00</p>
        <p className="bestScore">Best Score: 00</p>
      </nav>
    )
}

export default Header;