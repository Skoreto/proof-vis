import React, { Component } from 'react';
import imUpdate from 'immutability-helper';
import { Row, Col } from 'react-bootstrap';
import '../../../customMainTheme.css'
import PageHeading from "../../../components/UI/PageHeading/PageHeading";
import Graph from '../../../components/Graph/Graph';
import Button from '../../../components/UI/Button/Button'
import StepCounter from '../../../components/UI/StepCounter/StepCounter'

class Exercise20svg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edges: [],
            nodes: [],
            texts: [],
            timeouts: [],
            currentStep: 0
        };
    }

    // componentDidMount = () => {
    //     let interval1;
    //     // store intervalId in the state so it can be accessed later:
    //     this.setState({interval1: interval1});
    // };

    componentWillUnmount = () => {
        // clearTimeout(timeout1);
        clearInterval(this.state.interval1)
    };

    /**
     * Method for updating edge properties.
     * @param edges Array of edges from the state of component.
     * @param edgeIndex Index of edge in the array.
     * @param strokeColor New strokeColor.
     * @param strokeWidth New strokeWidth.
     * @param dash Receive dashArray.
     * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
     */
    updateEdge = (edges, edgeIndex, strokeColor, strokeWidth, dash) => {
        return imUpdate(edges, {[edgeIndex]: {strokeColor: {$set: strokeColor}, strokeWidth: {$set: strokeWidth},
                dash: {$set: dash}}});
    };

    /**
     * Method for updating node properties.
     * @param nodes Array of nodes from the state of component.
     * @param nodeIndex Index of node in the array.
     * @param fillColor New fillColor.
     * @param label New label of node.
     * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
     */
    updateNode = (nodes, nodeIndex, fillColor, label) => {
        return imUpdate(nodes, {[nodeIndex]: {fillColor: {$set: fillColor}, label: {$set: label}}});
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

            if (this.state.currentStep === 3) {
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step2);
                this.setState(this.step4);
            }

            if (this.state.currentStep === 4) {
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step5);
            }

            if (this.state.currentStep === 5) {
                let interval1 = setInterval(this.step6, 4000);
                this.setState({interval1: interval1});
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

            if (this.state.currentStep === 5) {
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step2);
                this.setState(this.step4);
            }

            if (this.state.currentStep === 6) {
                clearInterval(this.state.interval1);
                this.clearAllTimers(this.state);
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step5);
            }

            // Reduce currentStep after a step was executed
            this.setState((state) => {return {currentStep: --state.currentStep}});
        }
    };

    /**
     * Clears all used Timeouts and Intervals.
     * @param state
     */
    clearAllTimers = (state) => {
        if (state.timeouts.length > 0) {
            state.timeouts.forEach(function (value, index) {
                clearTimeout(value);
            });
        }
    };

    stepReset = () => {
        return {
            edges: [],
            nodes: [],
            texts: []
        }
    };

    step1 = () => {
        return {
            edges: [
                {id: 1, x1: 80, y1: 240, x2: 220, y2: 180, strokeWidth: 2},
                {id: 2, x1: 220, y1: 180, x2: 230, y2: 330, strokeWidth: 2},
                {id: 3, x1: 220, y1: 180, x2: 370, y2: 230, strokeWidth: 2},
                {id: 4, x1: 230, y1: 330, x2: 380, y2: 360, strokeWidth: 2},
                {id: 5, x1: 370, y1: 230, x2: 380, y2: 360, strokeWidth: 2}
            ],
            nodes: [
                {id: 1, x: 80, y: 240, fillColor: '#ffff08'},
                {id: 2, x: 220, y: 180, fillColor: '#ffff08'},
                {id: 3, x: 230, y: 330, fillColor: '#ffff08'},
                {id: 4, x: 370, y: 230, fillColor: '#ffff08'},
                {id: 5, x: 380, y: 360, fillColor: '#ffff08'},
            ]
        }
    };

    step2 = (state) => {
        let newNodes =  this.updateNode(state.nodes, 0, '#ffff08', 'u');
        newNodes = this.updateNode(newNodes, 1, '#ffff08', 'x');
        newNodes = this.updateNode(newNodes, 3, '#ffff08', 'y');
        newNodes = this.updateNode(newNodes, 4, '#ffff08', 'v');

        const newTexts = imUpdate(state.texts, {$push: [{x: 308, y: 200, text: 'e'}]});

        return {
            nodes: newNodes,
            texts: newTexts
        }
    };

    step3 = (state) => {
        let newNodes = this.updateNode(state.nodes, 0, '#B39DDB', 'u');
        newNodes = this.updateNode(newNodes, 1, '#B39DDB', 'x');
        newNodes = this.updateNode(newNodes, 3, '#B39DDB', 'y');
        newNodes = this.updateNode(newNodes, 4, '#B39DDB', 'v');

        let newEdges = this.updateEdge(state.edges, 0, '#B39DDB', 5, 0);
        newEdges = this.updateEdge(newEdges, 2, '#B39DDB', 5, 0);
        newEdges = this.updateEdge(newEdges, 4, '#B39DDB', 5, 0);

        return {
            nodes: newNodes,
            edges: newEdges
        }
    };

    step4 = (state) => {
        let newNodes = this.updateNode(state.nodes, 0, '#B39DDB', 'u');
        newNodes = this.updateNode(newNodes, 1, '#B39DDB', 'x');
        newNodes = this.updateNode(newNodes, 2, '#B39DDB', '');
        newNodes = this.updateNode(newNodes, 3, '#ffff08', 'y');
        newNodes = this.updateNode(newNodes, 4, '#B39DDB', 'v');

        let newEdges = this.updateEdge(state.edges, 0, '#B39DDB', 5, 0);
        newEdges = this.updateEdge(newEdges, 1, '#B39DDB', 5, 0);
        newEdges = this.updateEdge(newEdges, 2, 'red', 2, 10);
        newEdges = this.updateEdge(newEdges, 3, '#B39DDB', 5, 0);

        return {
            nodes: newNodes,
            edges: newEdges
        }
    };

    step5 = (state) => {
        let newNodes = this.updateNode(state.nodes, 1, '#81C784', 'x');
        newNodes = this.updateNode(newNodes, 2, '#81C784', '');
        newNodes = this.updateNode(newNodes, 3, '#81C784', 'y');
        newNodes = this.updateNode(newNodes, 4, '#81C784', '');

        let newEdges = this.updateEdge(state.edges, 1, '#81C784', 5, 0);
        newEdges = this.updateEdge(newEdges, 2, 'red', 2, 10);
        newEdges = this.updateEdge(newEdges, 3, '#81C784', 5, 0);
        newEdges = this.updateEdge(newEdges, 4, '#81C784', 5, 0);

        const newTexts = imUpdate(state.texts, {$push: [{x: 308, y: 200, text: 'e'}]});

        return {
            nodes: newNodes,
            edges: newEdges,
            texts: newTexts
        }
    };

    step6 = () => {
        let timeout1 = setTimeout(()=> {
            this.setState(this.step6a);
        }, 1000);

        let timeout2 = setTimeout(()=> {
            this.setState(this.step6b);
        }, 2000);

        this.setState({timeouts: [timeout1, timeout2]});
    };

    step6a = (state) => {
        let newEdges = this.updateEdge(state.edges, 2, '#81C784', 5, 0);

        return {
            edges: newEdges
        }
    };

    step6b = (state) => {
        let newEdges = this.updateEdge(state.edges, 2, 'red', 2, 10);

        return {
            edges: newEdges
        }
    };

    render() {
        return (
            <div>
                <div className={"container"}>
                    <div className="page-wrapper">
                        <PageHeading headingTitle={"Příklad 20 (SVG)"} breadcrumbsCurrent={"Důkazy přímo"} />
                        <div className="page-content">
                            <Row className="page-row">
                                <main>
                                    <Col xs={6} md={6} lg={6}>
                                        <div className={"GraphBox"}>
                                            <Graph width={650} height={400} edges={this.state.edges} nodes={this.state.nodes}
                                                   texts={this.state.texts} />
                                        </div>
                                    </Col>
                                </main>
                                <aside>
                                    <Col xs={5} md={5} lg={5} smOffset={1} mdOffset={1} lgOffset={1}>
                                        <div className="bg-info" id="definition">
                                            Nechť $G$ je souvislý graf. Jestliže $e$ není most v $G$, pak v $G$ existuje
                                            kružnice
                                            obsahující hranu $e$. Dokažte přímo.
                                        </div>
                                        <br/>
                                        <div id="divProofContainer">
                                            <h3>Důkaz přímo</h3>
                                            <div className="bg-warning" id="proofBox"></div>
                                        </div>
                                        <br/>
                                        <div id="divStepButtons">
                                            <Button clicked={this.previousStep}>Předchozí</Button>
                                            <StepCounter currentStep={this.state.currentStep} stepSum={6} />
                                            <Button clicked={this.nextStep}>Další</Button>
                                        </div>
                                    </Col>
                                </aside>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Exercise20svg;