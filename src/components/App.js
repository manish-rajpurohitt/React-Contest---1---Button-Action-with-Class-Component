import React, { Component } from "react";
import "../styles/App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rend: <></>
    };

    this.handleFun = () => {
      this.setState({
        rend: (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )
      });
    };
  }

  render() {
    return (
      <div id="main">
        <button onClick={this.handleFun.bind(this)} id="click">
          click
        </button>
        {/* Do not remove this main div!! */}
        {this.state.rend}
      </div>
    );
  }
}
