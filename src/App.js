import React, {Component} from 'react';
import update from 'immutability-helper';
import logo from './logo.svg';
import cssClasses from './App.css';
import Graph from './components/Graph/Graph';
import Button from './components/UI/Button/Button'
import StepCounter from './components/UI/StepCounter/StepCounter'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edges: [],
            nodes: [],
            currentStep: 0
        };
    }

    /**
     * Method for updating node properties.
     * @param state State of component.
     * @param nodeIndex Index of node in an array.
     * @param fillColor New fillColor.
     * @param label New label of node.
     */
    updateNode = (nodes, nodeIndex, fillColor, label) => {
        const newNodes = update(nodes,
            {[nodeIndex]: {fillColor: {$set: fillColor}, label: {$set: label}}});

        return newNodes;
    };

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
        this.setState({
            edges: [
                {id: 1, x1: 80, y1: 240, x2: 220, y2: 180},
                {id: 2, x1: 220, y1: 180, x2: 230, y2: 330},
                {id: 3, x1: 220, y1: 180, x2: 370, y2: 230},
                {id: 4, x1: 230, y1: 330, x2: 380, y2: 360},
                {id: 5, x1: 370, y1: 230, x2: 380, y2: 360}
            ],
            nodes: [
                {id: 1, x: 80, y: 240, fillColor: '#ffff08'},
                {id: 2, x: 220, y: 180, fillColor: '#ffff08'},
                {id: 3, x: 230, y: 330, fillColor: '#ffff08'},
                {id: 4, x: 370, y: 230, fillColor: '#ffff08'},
                {id: 5, x: 380, y: 360, fillColor: '#ffff08'},
            ]
        })
    };

    step1 = () => {
        this.setState({
            edges: [
                {id: 1, x1: 80, y1: 240, x2: 220, y2: 180},
                {id: 2, x1: 220, y1: 180, x2: 230, y2: 330},
                {id: 3, x1: 220, y1: 180, x2: 370, y2: 230},
                {id: 4, x1: 230, y1: 330, x2: 380, y2: 360},
                {id: 5, x1: 370, y1: 230, x2: 380, y2: 360}
            ],
            nodes: [
                {id: 1, x: 80, y: 240, fillColor: '#ffff08'},
                {id: 2, x: 220, y: 180, fillColor: '#ffff08'},
                {id: 3, x: 230, y: 330, fillColor: '#ffff08'},
                {id: 4, x: 370, y: 230, fillColor: '#ffff08'},
                {id: 5, x: 380, y: 360, fillColor: '#ffff08'},
            ]
        })
    };

    step2 = (state) => {
        let newNodes =  this.updateNode(state.nodes, 0, '#ffff08', 'u');
        newNodes = this.updateNode(newNodes, 1, '#ffff08', 'x');
        newNodes = this.updateNode(newNodes, 3, '#ffff08', 'y');
        newNodes = this.updateNode(newNodes, 4, '#ffff08', 'v');

        this.setState({nodes: newNodes})
    };

    step3 = (state) => {
        let newNodes =  this.updateNode(state.nodes, 0, '#B39DDB', 'u');
        newNodes = this.updateNode(newNodes, 1, '#B39DDB', 'x');
        newNodes = this.updateNode(newNodes, 3, '#B39DDB', 'y');
        newNodes = this.updateNode(newNodes, 4, '#B39DDB', 'v');

        this.setState({nodes: newNodes})
    };

    // step7 = (state) => {
    //     const newNodes = update(state.nodes, {$push: [{id: 6, x: 220, y: 480, fillColor: 'blue'}]});
    //
    //     return {
    //         nodes: newNodes
    //     };
    // };

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