import React, { Component } from 'react';
import ClassComponent from './ClassComponent';

class App extends Component {

  state = {
    showComponent: true
  }

  handleToggle = () => {
    this.setState({showComponent: !this.state.showComponent})
  }


  render() {

    const {showComponent} = this.state;
    
    return (
      <div>
        
        <h1>Hello from Class Component</h1>

        <button onClick={this.handleToggle}>Toggle</button>

        {
          showComponent ? <ClassComponent /> : <p>Component is hidden</p>
        }
      </div>
    );
  }
}

export default App;