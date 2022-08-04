import React, { Component } from 'react';

class ClassComponent extends Component {
  state = {
    count: 0,
    title: ''
  }

  handleIncrement = () => {
    this.setState((prevSTate) => {
      return {count: prevSTate.count + 1}
    })

    // force update
    this.forceUpdate();
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


  static getDerivedStateFromProps(props, state) {

    // props hisebe jodi kuno data ase ar sei datar upor base kore jodi state update korte chai
    // manipulate state based on parent props

    console.log('getDerivedStateFromProps');
    return {
      title: props.appTitle
    };
  }

  componentDidMount() {
    // API request
    // side effects (accessing dom, subscription)

    console.log('componentDidMount');
  }



  // updating stage
  shouldComponentUpdate() {
    // component update hobe ki hobe na. bole deya jay

    console.log('shouldComponentUpdate');
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // manual DOM selection, updating

    console.log('getSnapshotBeforeUpdate');
    return 'something';
  }

  componentDidUpdate(props, state, snapShot) {
    // same to componentDidMount

    console.log(props, 'props');
    console.log(state, 'state');
    console.log(snapShot, 'snapShot');
    console.log('componentDidUpdate');
  }





  // unmounting stage
  componentWillUnmount() {

    console.log("componentWillUnmount");
  }


  render() {
    const {count, title} = this.state;

    console.log('Render');

    return (
      <div>
        
        <h1>{title}</h1>
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
         <button onClick={this.handleDecrement}>Decrement</button>
         <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default ClassComponent;