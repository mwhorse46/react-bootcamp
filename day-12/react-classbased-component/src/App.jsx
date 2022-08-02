import React, { Component } from 'react';



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
    this.state = {count: 0}

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


  render() {

    
    return (
      <div>

        {/* <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement.bind(this)}>Increment</button>
        <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
        <button onClick={this.handleReset.bind(this)}>Reset</button> */}


        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>



      </div>
    );
  }
}

export default App;