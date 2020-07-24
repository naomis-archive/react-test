import React from "react";
import "./dice.css";

class DieButtons extends React.Component {

  renderButton(i) {
    return (
      <button className="DiceButton" value={i} onClick={() => this.props.onClick(i)}>
        D{i}
      </button>
    );
  }
  render() {
    return (
      <div id="buttons">
        {this.renderButton(4)}
        {this.renderButton(6)}
        {this.renderButton(8)}
        {this.renderButton(10)}
        {this.renderButton(12)}
        {this.renderButton(20)}
        {this.renderButton(100)}
      </div>
    );
  }
}

class DiceApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "You have not rolled any dice yet.",
      color: "#ff0000"
    };
  }
  roll(num) {
    const random = Math.floor(Math.random() * num) + 1;
    console.log(random)
    const answer = `You rolled a D${num} and got: ${random}`
    let ansColor = random < num/2 ? "#FFFF00" : "#00FF00"
    this.setState({result: answer, color: ansColor});
  }
  render() {
    return (
      <div>
          <h1>D&D Dice Roller</h1>
        <DieButtons onClick={(i) => this.roll(i)}/>
        <div id="result" style={{color: this.state.color}}>{this.state.result}</div>
      </div>
    );
  }
}

export default DiceApp;
