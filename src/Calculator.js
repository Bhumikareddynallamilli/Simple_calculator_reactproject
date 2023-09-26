import React, { Component } from 'react';
import './Calculator.css';
class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      result: '',
    };
  }

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  calculate = () => {
    try {
      const result = eval(this.state.input);
      this.setState({ result });
    } catch (error) {
      this.setState({ result: 'Error' });
    }
  };

  render() {
    return (
      <div className="calculator">
        <input
          type="text"
          placeholder="Enter an expression"
          value={this.state.input}
          onChange={this.handleInput}
        />
        <button onClick={this.calculate}>=</button>
        <div className="result">{this.state.result}</div>
      </div>
    );
  }
}

export default Calculator;
