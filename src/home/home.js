import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>My React Pages!</h1>
      <p>
        These are the apps I have created during my efforts to learn React!)
      </p>
      <ul>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/ttt"}>Tic-Tac-Toe</NavLink>
          </li><li>
          <NavLink to={process.env.PUBLIC_URL + "/dice"}>Dice Roll Simulator</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Home;