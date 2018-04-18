import React, {Component} from 'react';
import logo from './logo.svg';
import cssClasses from './App.css';
import Graph from './components/Graph/Graph';
import Button from './components/UI/Button/Button'
import StepCounter from './components/UI/StepCounter/StepCounter'

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
            currentStep: 0
        };
    }

    nextStep = () => {
        if (this.state.currentStep <= 5) {
            if (this.state.currentStep === 0) {
                this.setState(this.step1);
            }

            if (this.state.currentStep === 1) {
                this.setState(this.step2);
            }

            if (this.state.currentStep === 2) {
                this.setState(this.step3);
            }

            // Increase currentStep after a step was executed
            this.setState((state) => {return {currentStep: ++state.currentStep}});
        }
    };

    previousStep = () => {
        if (this.state.currentStep > 0) {
            if (this.state.currentStep === 1) {
                this.setState(this.stepReset);
            }

            if (this.state.currentStep === 2) {
                this.setState(this.stepReset);
                this.setState(this.step1);
            }

            if (this.state.currentStep === 3) {
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step2);
            }

            if (this.state.currentStep === 4) {
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step2);
                this.setState(this.step3);
            }

            // Reduce currentStep after a step was executed
            this.setState((state) => {return {currentStep: --state.currentStep}});
        }
    };

    stepReset = () => {
        return {
            edges: [
                {x1: 90, y1: 280, x2: 290, y2: 240, strokeColor: 'pink'}
            ],
            nodes: [
                {x: 90, y: 280, fillColor: 'lightgreen'},
                {x: 290, y: 240, fillColor: 'brown'}
            ],
        };
    };

    step1 = (state) => {
        let newEdges = [...state.edges];
        newEdges.push({x1: 290, y1: 380, x2: 490, y2: 340, strokeColor: 'brown'});

        return {
            edges: newEdges
        };
    };

    step2 = (state) => {
        let newNodes = [...state.nodes];
        newNodes.push({x: 290, y: 380, fillColor: 'green'});

        return {
            nodes: newNodes
        };
    };

    step3 = (state) => {
        let newNodes = [...state.nodes];
        newNodes.push({x: 490, y: 340, fillColor: 'orange'});

        return {
            nodes: newNodes
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

                <Button clicked={this.previousStep}>Předchozí</Button>
                <StepCounter currentStep={this.state.currentStep} stepSum={4} />
                <Button clicked={this.nextStep}>Další</Button>
            </div>
        );
    }
}

export default App;