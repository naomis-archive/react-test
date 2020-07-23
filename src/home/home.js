import React from "react";
import "./home.css";

function Home() {
  return (
    <div>
      <h1>My React Pages!</h1>
      <p>
        These are the apps I have created during my efforts to learn React!
      </p>
      <ul>
        <li>
          <a href="./ttt">Tic-Tac-Toe (under construction)</a>
        </li>
      </ul>
      <a href="./clear"><em>click here to clear the current app</em></a>
    </div>
  );
}

export default Home;