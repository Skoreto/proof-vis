import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SvgExample from './components/SVGExample'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ProofVis</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <SvgExample width={400} height={200}/>

      </div>
    );
  }
}

export default App;
