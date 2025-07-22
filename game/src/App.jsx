import React from "react";
import Board from "./components/Board";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Tic Tac Toe in <span style={{ color: "#56FFC5" }}>React</span></h1>
      <Board />
    </div>
  );
}

export default App;
