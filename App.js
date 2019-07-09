import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      turn: "X",
      restart: false,
      board: Array(9).fill(""),
      squares: document.querySelector(".square")
    };
  }
  clicked(event) {
    if (this.state.board[event.target.dataset.square] === "") {
      this.state.board[event.target.dataset.square] = this.state.turn;
      event.target.innerText = this.state.turn;
      this.setState({
        turn: this.state.turn === "X" ? "O" : "X",
        board: this.state.board
      });
    }
  }

  restart(event) {
    alert("Are you sure You want to Restart the game ??");
    document.location.reload(true);
    console.log("Game Refreshed");
  }

  render() {
    return (
      <div id="frame">
        <div id="head">Welcome to Himanshu Rai's Tic Tac Toe</div>
        <div id="board" onClick={e => this.clicked(e)}>
          <div className="square" data-square="0" />
          <div className="square" data-square="1" />
          <div className="square" data-square="2" />
          <div className="square" data-square="3" />
          <div className="square" data-square="4" />
          <div className="square" data-square="5" />
          <div className="square" data-square="6" />
          <div className="square" data-square="7" />
          <div className="square" data-square="8" />
        </div>
        <div id="restart" onClick={e => this.restart(e)}>
          <button>Restart</button>
        </div>
      </div>
    );
  }
}

export default App;
