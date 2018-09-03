import React, { Component } from 'react';

import './App.css';


import NavBar from './components/NavBar/navbar';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      react: 'REACT',
    };
  }

  render() {
    const { react } = this.state;
    return (
      <div className="fluid-container">
        <NavBar />
        <footer>
          <p>{react}</p>
        </footer>
      </div>
    );
  }
}

export default App;
