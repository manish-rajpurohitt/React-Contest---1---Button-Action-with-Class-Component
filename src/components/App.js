import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rend: false
    };
    this.handleFun = () => {
      this.setState({
        rend: true
      });
    };
    this.handleFun = this.handleFun.bind(this);
  }

  render() {
    return (
      <div id="main">
        <button onClick={() => this.handleFun()} id="click">
          click
        </button>
        {/* Do not remove this main div!! */}
        {this.state.rend ? (
          <>
            <p id="para">
              Hello, I've learnt to use the full-stack evaluation tool. This
              makes me so happy
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;
