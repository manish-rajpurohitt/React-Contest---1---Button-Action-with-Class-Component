import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			rend: <></>
		  };
	  
	};

	handleFun = () =>{
		this.setState({rend:<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>});
	}
	
    render() {
    	return(
    		<div id="main">
				<button onClick="handleFun" id="click">click</button>
				{ /* Do not remove this main div!! */ }
				{this.state.rend}
    		</div>
    	);
    }
}
