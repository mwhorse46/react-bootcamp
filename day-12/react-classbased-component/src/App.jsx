import React, { Component } from 'react';
import './App.css';
import CardNum from './CardNum';
import OddOrEven from './OddOrEven';


class App extends Component {

  // 1st way
  // state = {count: 0}
  // handleIncrement() {
  //   this.setState({count: this.state.count + 1});
  // }
  // handleDecrement() {
  //   this.setState({count: this.state.count - 1});
  // }
  // handleReset() {
  //   this.setState({count: 0});
  // }




  // 2nd way
  // state = {count: 0}
  // handleIncrement = () => {
  //   this.setState({count: this.state.count + 1});
  // }
  // handleDecrement = () => {
  //   this.setState({count: this.state.count - 1});
  // }
  // handleReset = () => {
  //   this.setState({count: 0});
  // }



  // 3rd way
  constructor(props) {

    super(props);
    this.state = {
      count: 0,
      randomNumbers: [1, 3, 5, 8, 10],
      pickedValue: null
    }

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleIncrement() {
    this.setState({count: this.state.count + 1});
  }
  handleDecrement() {
    this.setState((prevState, props) => {
      return {count: prevState.count - 1}
    });
  }
  handleReset() {
    this.setState({count: 0});
  }

  handlePickNum = (pickedNum) => {
    this.setState({pickedValue: pickedNum});
  }


  render() {
    const {count, randomNumbers, pickedValue} = this.state;
    
    return (
      <div>

        {/* <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement.bind(this)}>Increment</button>
        <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
        <button onClick={this.handleReset.bind(this)}>Reset</button> */}


        <h1>{count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>

        <OddOrEven count={count} pickedValue={pickedValue} />
        <hr />
        {
          randomNumbers.map((cardNum, i) => <CardNum key={i} cardNum={cardNum} handlePickNum={this.handlePickNum} />)
        }
        

      </div>
    );
  }
}

export default App;