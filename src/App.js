import React, {Component} from 'react';
import logo from './logo.svg';
import cssClasses from './App.css';
import Graph from './components/Graph/Graph';
import Button from './components/UI/Button/Button'

class App extends Component {
    constructor(props) {
        super(props);
        this.nextStep = this.nextStep.bind(this);
        this.state = {
            edges: [
                {x1: 90, y1: 280, x2: 290, y2: 240, strokeColor: 'pink'}
            ],
            nodes: [
                {x: 90, y: 280, fillColor: 'lightgreen'},
                {x: 290, y: 240, fillColor: 'brown'}
            ],
            step: 0
        };
    }

    nextStep = () => {
        this.setState(this.changeNodesState);
    };

    changeNodesState = (state) => {
        let newNodes = [...state.nodes];
        newNodes.push({x: 290, y: 300 + (state.step * 60), fillColor: 'green'});

        return {
            nodes: newNodes,
            step: ++state.step
        };
    };

    render() {
        return (
            <div className={cssClasses.App}>
                <header className={cssClasses["App-header"]}>
                    <img src={logo} className={cssClasses["App-logo"]} alt="logo" />
                    <h1 className={cssClasses["App-title"]}>Welcome to ProofVis</h1>
                </header>
                <p className={cssClasses["App-intro"]}>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <div className={cssClasses.GraphBox}>
                    <Graph width={900} height={600} edges={this.state.edges} nodes={this.state.nodes} />
                </div>

                <Button clicked={this.nextStep}>Další</Button>
            </div>
        );
    }
}

export default App;