import GraphVis from 'react-graph-vis'
import React, { Component } from 'react';
import imUpdate from 'immutability-helper';
import { Row, Col } from 'react-bootstrap';
import '../../../App.css';
import '../../../customMainTheme.css'
import '../../../main.css'
import MainHeader from "../../../components/UI/MainHeader/MainHeader";
import CustomNavbar from "../../../components/UI/CustomNavbar/CustomNavbar";
import PageHeading from "../../../components/UI/PageHeading/PageHeading";
import Footer from "../../../components/UI/Footer/Footer";
import Button from '../../../components/UI/Button/Button'
import StepCounter from '../../../components/UI/StepCounter/StepCounter'

const events = {
    select: function(event) {
        let { nodes, edges } = event;
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
    }
};

class Exercise20vis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphVis: {
                nodes: [],
                edges: []
            },
            timeouts: [],
            currentStep: 0,
            options: {
                autoResize: true,
                height: '100%',
                width: '100%',
                clickToUse: false,
                physics: false,
                layout: {},
                nodes: {
                    shape: 'circle',
                    color: {background: '#ffff08', border: '#000000'},
                    label: '   ',
                    margin: 10,
                    font: {size: 16, }
                },
                edges: {
                    arrows: {
                        to: {enabled: false}
                    },
                    color: {color: '#000000', hover: '#000000'},
                    width: 1,
                    dashes: false,
                    label: undefined,
                    font: {align: 'top'}
                },
                configure: {
                    enabled: false,
                    filter: 'nodes,edges',
                    showButton: true
                },
                manipulation: {
                    enabled: true,
                    initiallyActive: false,
                    editEdge: true,
                    deleteNode: true,
                    deleteEdge: true,
                    controlNodeStyle: {}
                },
                interaction: {
                    dragNodes: true,
                    dragView: true,
                    hideEdgesOnDrag: false,
                    hideNodesOnDrag: false,
                    hover: true,
                    hoverConnectedEdges: false,
                    keyboard: {
                        enabled: false,
                        speed: {x: 10, y: 10, zoom: 0.02},
                        bindToWindow: true
                    },
                    multiselect: true,
                    navigationButtons: true,
                    selectable: true,
                    selectConnectedEdges: false,
                    tooltipDelay: 0,
                    zoomView: true
                }
            },
        };
    }

    /**
     * Method for updating node properties.
     * @param nodes
     * @param nodeIndex
     * @param background
     * @param label
     * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
     */
    updateNode = (nodes, nodeIndex, background, label) => {
        return imUpdate(nodes, {[nodeIndex]: {color: {$set: {background: background}}, label: {$set: label}}});
    };

    /**
     * Method for updating edge properties.
     * @param edges
     * @param edgeIndex
     * @param color
     * @param width
     * @param dashes
     * @param label
     * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
     */
    updateEdge = (edges, edgeIndex, color, width, dashes, label) => {
        return imUpdate(edges, {[edgeIndex]: {color: {$set: {color: color, highlight: color, hover: color}},
                width: {$set: width}, dashes: {$set: dashes}, label: {$set: label}}});
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
            graphVis: {
                nodes: [],
                edges: []
            }
        }
    };

    step1 = () => {
        return {
            graphVis: {
                nodes: [
                    {id: 1, x: -180, y: -40, color: {background: '#ffff08'}, label: '   '},
                    {id: 2, x: -40, y: -100, color: {background: '#ffff08'}, label: '   '},
                    {id: 3, x: -30, y: 50, color: {background: '#ffff08'}, label: '   '},
                    {id: 4, x: 110, y: -50, color: {background: '#ffff08'}, label: '   '},
                    {id: 5, x: 120, y: 80, color: {background: '#ffff08'}, label: '   '}
                ],
                edges: [
                    {id: 1, from: 1, to: 2 },
                    {id: 2, from: 2, to: 3 },
                    {id: 3, from: 2, to: 4 },
                    {id: 4, from: 3, to: 5 },
                    {id: 5, from: 4, to: 5 }
                ]
            }
        }
    };

    step2 = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 0, '#ffff08', ' u ');
        newNodes = this.updateNode(newNodes, 1, '#ffff08', ' x ');
        newNodes = this.updateNode(newNodes, 3, '#ffff08', ' y ');
        newNodes = this.updateNode(newNodes, 4, '#ffff08', ' v ');

        let newEdges = this.updateEdge(state.graphVis.edges, 2, '#000000', 1, false, ' e ');

        return {
            graphVis: {
                nodes: newNodes,
                edges: newEdges
            }
        }
    };

    step3 = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 0, '#B39DDB', ' u ');
        newNodes = this.updateNode(newNodes, 1, '#B39DDB', ' x ');
        newNodes = this.updateNode(newNodes, 3, '#B39DDB', ' y ');
        newNodes = this.updateNode(newNodes, 4, '#B39DDB', ' v ');

        let newEdges = this.updateEdge(state.graphVis.edges, 0, '#B39DDB', 2, false, undefined);
        newEdges = this.updateEdge(newEdges, 2, '#B39DDB', 2, [8, 8], ' e ');
        newEdges = this.updateEdge(newEdges, 4, '#B39DDB', 2, false, undefined);

        return {
            graphVis: {
                nodes: newNodes,
                edges: newEdges
            }
        }
    };

    step4 = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 0, '#B39DDB', ' u ');
        newNodes = this.updateNode(newNodes, 1, '#B39DDB', ' x ');
        newNodes = this.updateNode(newNodes, 2, '#B39DDB', '   ');
        newNodes = this.updateNode(newNodes, 3, '#ffff08', ' y ');
        newNodes = this.updateNode(newNodes, 4, '#B39DDB', ' v ');

        let newEdges = this.updateEdge(state.graphVis.edges, 0, '#B39DDB', 2, false, undefined);
        newEdges = this.updateEdge(newEdges, 1, '#B39DDB', 2, false, undefined);
        newEdges = this.updateEdge(newEdges, 2, 'red', 2, [8, 8], ' e ');
        newEdges = this.updateEdge(newEdges, 3, '#B39DDB', 2, false, undefined);

        return {
            graphVis: {
                nodes: newNodes,
                edges: newEdges
            }
        }
    };

    step5 = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 1, '#81C784', ' x ');
        newNodes = this.updateNode(newNodes, 2, '#81C784', '   ');
        newNodes = this.updateNode(newNodes, 3, '#81C784', ' y ');
        newNodes = this.updateNode(newNodes, 4, '#81C784', '   ');

        let newEdges = this.updateEdge(state.graphVis.edges, 1, '#81C784', 2, false, undefined);
        newEdges = this.updateEdge(newEdges, 2, 'red', 2, [8, 8], ' e ');
        newEdges = this.updateEdge(newEdges, 3, '#81C784', 2, false, undefined);
        newEdges = this.updateEdge(newEdges, 4, '#81C784', 2, false, undefined);

        return {
            graphVis: {
                nodes: newNodes,
                edges: newEdges
            }
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
        let newEdges = this.updateEdge(state.graphVis.edges, 2, '#81C784', 2, false, ' e ');

        return {
            graphVis: {
                nodes: state.graphVis.nodes,
                edges: newEdges
            }
        }
    };

    step6b = (state) => {
        let newEdges = this.updateEdge(state.graphVis.edges, 2, 'red', 2, [8, 8], ' e ');

        return {
            graphVis: {
                nodes: state.graphVis.nodes,
                edges: newEdges
            }
        }
    };

    render() {
        return (
            <div>
                <MainHeader/>
                <CustomNavbar/>
                <div className={"container"}>
                    <div className="page-wrapper">
                        <PageHeading headingTitle={"Příklad 20 vis.js"} breadcrumbsCurrent={"Důkazy přímo"} />
                        <div className="page-content">
                            <Row className="page-row">
                                <main>
                                    <Col xs={6} md={6} lg={6}>
                                        <div className={"over-component"}></div>
                                        <div className={"GraphBox"}>
                                            <GraphVis graph={this.state.graphVis} options={this.state.options}
                                                      events={events} style={{width: "650px", height: "400px" }} />

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
                                        <Button>Kreslit</Button>
                                    </Col>
                                </aside>
                            </Row>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Exercise20vis;