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
            texts: [],
            currentStep: 0,
            options: {
                autoResize: true,
                height: '100%',
                width: '100%',
                clickToUse: false,
                physics: false,
                layout: {},
                "edges": {
                    "smooth": {
                        "type": "continuous",
                        "forceDirection": "none",
                        "roundness": 0
                    }
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

            // Reduce currentStep after a step was executed
            this.setState((state) => {return {currentStep: --state.currentStep}});
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
                    { id: 1, x: -180, y: -40, color: { background: '#ffff08', border: '#000000' } },
                    { id: 2, x: -40, y: -100, color: { background: '#ffff08', border: '#000000' } },
                    { id: 3, x: -30, y: 50, color: { background: '#ffff08', border: '#000000' } },
                    { id: 4, x: 110, y: -50, color: { background: '#ffff08', border: '#000000' } },
                    { id: 5, x: 120, y: 80, color: { background: '#ffff08', border: '#000000' } },
                    {id: 6, x: 130, y: 110}
                ],
                edges: [
                    { id: 1, from: 1, to: 2 },
                    { id: 2, from: 2, to: 3 },
                    { id: 3, from: 2, to: 4 },
                    { id: 4, from: 3, to: 5 },
                    { id: 5, from: 4, to: 5 }
                ]
            }
        }
    };

    step2 = (state) => {
        let newNodes = imUpdate(state.graphVis.nodes, {[1]: {x: {$set: 50}}});

        return {
            graphVis: {
                nodes: newNodes,
                edges: state.graphVis.edges
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
                                        <div className={"GraphBox"}>
                                            <GraphVis graph={this.state.graphVis} options={this.state.options} events={events} style={{width: "650px", height: "400px" }} />
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
                <Footer/>
            </div>
        );
    }
}

export default Exercise20vis;