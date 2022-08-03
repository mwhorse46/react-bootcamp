import React, { Component } from 'react';

class ClassComponent extends Component {
  state = {
    count: 0
  }

  handleIncrement = () => {
    this.setState((prevSTate) => {
      return {count: prevSTate.count + 1}
    })
  }


  handleDecrement = () => {
    this.setState((prevSTate) => {
      return {count: prevSTate.count - 1}
    })
  }


  handleReset = () => {
    this.setState((prevSTate) => {
      return {count: 0}
    })
  }

  // lifecycle method

  // mounting
  // updating
  // unmounting

  constructor() {

    // initialization
    // state declaration

    super()
    console.log('Constructor method');
  }


  static getDerivedStateFromProps() {

    // props hisebe jodi kuno data ase ar sei datar upor base kore jodi state update korte chai
    // manipulate state based on parent props

    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    // API request
    // side effects (accessing dom, subscription)

    console.log('componentDidMount');
  }

  componentWillUnmount() {

    console.log("componentWillUnmount");
  }





  render() {
    const {count} = this.state;

    console.log('Render');

    return (
      <div>
        
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
         <button onClick={this.handleDecrement}>Decrement</button>
         <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default ClassComponent;