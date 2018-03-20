import React from "react";
import { render } from "react-dom";
import Leaderboard from "./Leaderboard";
import "./styles.css";

const App = () => (
  <div>
    <Leaderboard />
    <footer className="footer">
      Made by{" "}
      <a
        href="https://www.freecodecamp.org/war1o"
        target="_blank"
        className="clickable"
      >
        WaR1o
      </a>
    </footer>
  </div>
);

render(<App />, document.getElementById("root"));
