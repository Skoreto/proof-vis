import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './components/Graph/Graph';
import Button from './components/UI/Button/Button'

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

                <div className="GraphBox">
                    <Graph width={900} height={600} />
                </div>

                <Button>Další</Button>
            </div>
        );
    }
}

export default App;
