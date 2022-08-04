import React, { Component } from 'react';
import Counter from './Counter';
import CounterFunctional from './CounterFunctional';



class App extends Component {

  state = {
    showComponent: true,
    appTitle: 'Title from parent component'
  }

  handleToggle = () => {
    this.setState({showComponent: !this.state.showComponent})
  }


  render() {

    const {showComponent, appTitle} = this.state;
    
    return (
      <div>
        
        <h1>Hello from Class Component</h1>

        <button onClick={this.handleToggle}>Toggle</button>

        {
          showComponent ? <Counter appTitle={appTitle} /> : <p>Hidden Counter Class Component</p>
        }
        
        <hr />

        {
          showComponent ? <CounterFunctional /> : <p>Hidden Counter Functional Component</p>
        }
      </div>
    );
  }
}

export default App;