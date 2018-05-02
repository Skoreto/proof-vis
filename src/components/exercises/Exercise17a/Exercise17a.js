import GraphVis from 'react-graph-vis'
import React, {Component} from 'react';
import {updateNode, updateEdge} from '../../../functionality/GraphFunctions'
import {Row, Col} from 'react-bootstrap';
import {SketchField, Tools} from 'react-sketch';
import M from 'react-mathjax2';
import MN from '../../../components/MathJax/MathJaxNode'
import '../../../App.css';
import '../../../customMainTheme.css'
import '../../../main.css'
import PageHeading from "../../../components/UI/PageHeading/PageHeading";
import Button from '../../../components/UI/Button/Button'
import StepCounter from '../../../components/UI/StepCounter/StepCounter'

class Exercise17a extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphVis: {
                nodes: [],
                edges: []
            },
            timeouts: [],
            intervals: [],
            currentStep: 0,
            isSketchAllowed: false,
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
        this.updateNode = updateNode.bind(this);
        this.updateEdge = updateEdge.bind(this);
    }

    sketchAllowance = () => {
        this.setState(this.state.isSketchAllowed ? {isSketchAllowed: false} : {isSketchAllowed: true});
    };

    nextStep = () => {
        if (this.state.currentStep <= 5) {
            if (this.state.currentStep === 0) {
                this.setState(this.step1);
            }

            if (this.state.currentStep === 1) {
                this.setState(this.step2);
                let interval1 = setInterval(this.step2, 4000);
                this.setState({intervals: [interval1]});
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
        if (state.intervals.length > 0) {
            state.intervals.forEach(function (value, index) {
                clearInterval(value);
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
                    {id: 1, x: -200, y: 0, color: {background: '#ffff08'}, label: ' u '},
                    {id: 2, x: 0, y: 0, color: {background: '#ffff08'}, label: ' w '},
                    {id: 3, x: 200, y: 0, color: {background: '#ffff08'}, label: ' v '}
                ],
                edges: [
                    {id: 1, from: 1, to: 2, label: 'e1' },
                    {id: 2, from: 2, to: 3, label: 'e2' }
                ]
            }
        }
    };

    step2 = () => {
        let timeout1 = setTimeout(()=> {
            this.setState(this.step2a);
        }, 1000);

        let timeout2 = setTimeout(()=> {
            this.setState(this.step2b);
        }, 2000);

        this.setState({timeouts: [timeout1, timeout2]});
    };

    step2a = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 0, '#9575CD', ' u ');
        return {
            graphVis: {nodes: newNodes, edges: state.graphVis.edges}
        }
    };

    step2b = (state) => {
        let newEdges = this.updateEdge(state.graphVis.edges, 0, '#9575CD', 2, false, ' e1 ');
        return {
            graphVis: {nodes: state.graphVis.nodes, edges: newEdges}
        }
    };

    render() {
        const events = {
            select: function(event) {
                let {nodes, edges} = event;
            }
        };

        const isSketchAllowed = this.state.isSketchAllowed;
        const sketch = isSketchAllowed ? (
            <div className={"over-component"}>
                <SketchField width='650px' height='400px' tool={Tools.Pencil} lineColor='#1E88E5' lineWidth={3}/>
            </div>
        ) : (<div></div>);

        return (
            <div>
                <div className={"container"}>
                    <div className="page-wrapper">
                        <PageHeading headingTitle={"Příklad 17 a)"} breadcrumbsCurrent={"Ostatní příklady"} />
                        <div className="page-content">
                            <Row className="page-row">
                                <main>
                                    <Col xs={6} md={6} lg={6}>
                                        {sketch}
                                        <div className={"GraphBox"}>
                                            <GraphVis graph={this.state.graphVis} options={this.state.options}
                                                      events={events} style={{width: "650px", height: "400px" }} />
                                        </div>
                                        <div className={"controls-panel"}>
                                            <div id="divStepButtons">
                                                <Button clicked={this.previousStep}>Předchozí</Button>
                                                <StepCounter currentStep={this.state.currentStep} stepSum={3} />
                                                <Button clicked={this.nextStep}>Další</Button>
                                                <Button clicked={this.sketchAllowance}>Kreslit</Button>
                                            </div>
                                        </div>
                                    </Col>
                                </main>
                                <aside>
                                    <Col xs={5} md={5} lg={5} smOffset={1} mdOffset={1} lgOffset={1}>
                                        <M.Context input='tex'>
                                            <div className="bg-info" id="definition">
                                                Nechť <MN>G</MN> je souvislý graf. Jestliže <MN>e</MN> není most
                                                v <MN>G</MN>, pak v <MN>G</MN> existuje kružnice obsahující
                                                hranu <MN>e</MN>. Dokažte přímo.
                                            </div>
                                        </M.Context>
                                        <br/>
                                        <div id="divProofContainer">
                                            <h3>Důkaz přímo</h3>
                                            <div className="bg-warning" id="proofBox"></div>
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

export default Exercise17a;