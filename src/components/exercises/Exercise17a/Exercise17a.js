import GraphVis from 'react-graph-vis'
import React, {Component} from 'react';
import {updateNode, updateEdge, updateEdgeWithArrow, clearAllTimers} from '../../../functionality/GraphFunctions'
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
            descriptionBox: '',
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
                        to: {enabled: false},
                        from: {enabled: false}
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
        this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
        this.clearAllTimers = clearAllTimers.bind(this);
    }

    sketchAllowance = () => {
        this.setState(this.state.isSketchAllowed ? {isSketchAllowed: false} : {isSketchAllowed: true});
    };

    nextStep = () => {
        if (this.state.currentStep <= 5) {
            if (this.state.currentStep === 0) {
                this.setState(this.step1);
                this.setState(this.step1Texts);
            }

            if (this.state.currentStep === 1) {
                this.setState(this.step2);
                let interval1 = setInterval(this.step2, 7000);
                this.setState({intervals: [interval1]});
                this.setState(this.step2Texts);
            }

            if (this.state.currentStep === 2) {
                this.clearAllTimers(this.state);
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step3);
                let interval2 = setInterval(this.step3, 13000);
                this.setState({intervals: [interval2]});
                this.setState(this.step3Texts);
            }

            // Increase currentStep after a step was executed
            this.setState((state) => {return {currentStep: ++state.currentStep}});
        }
    };

    previousStep = () => {
        if (this.state.currentStep > 0) {
            if (this.state.currentStep === 1) {
                this.clearAllTimers(this.state);
                this.setState(this.stepReset);
            }

            if (this.state.currentStep === 2) {
                this.clearAllTimers(this.state);
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step1Texts);
            }

            if (this.state.currentStep === 3) {
                this.clearAllTimers(this.state);
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step2);
                let interval1 = setInterval(this.step2, 7000);
                this.setState({intervals: [interval1]});
                this.setState(this.step2Texts);
            }

            // Reduce currentStep after a step was executed
            this.setState((state) => {return {currentStep: --state.currentStep}});
        }
    };

    stepReset = () => {
        return {graphVis: {nodes: [], edges: []}, descriptionBox: ''}
    };

    step1 = () => {
        const description = (<p>Příklad grafu <MN>G</MN></p>);
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
            },
            descriptionBox: description
        }
    };

    step1Texts = () => {
        const description = (<p>Příklad grafu <MN>G</MN></p>);
        return {descriptionBox: description}
    };

    step2 = () => {
        let timeout2a = setTimeout(()=> {this.setState(this.step2a);}, 1000);
        let timeout2b = setTimeout(()=> {this.setState(this.step2b);}, 2000);
        let timeout2c = setTimeout(()=> {this.setState(this.step2c);}, 3000);
        let timeout2d = setTimeout(()=> {this.setState(this.step2d);}, 4000);
        let timeout2e = setTimeout(()=> {this.setState(this.step2e);}, 5000);
        let timeout2f = setTimeout(()=> {
            this.setState(this.stepReset);
            this.setState(this.step1);
            this.setState(this.step2Texts);
        }, 6000);

        this.setState({timeouts: [timeout2a, timeout2b, timeout2c, timeout2d, timeout2e, timeout2f]});
    };

    step2a = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 0, '#D1C4E9', ' u ');
        return {graphVis: {nodes: newNodes, edges: state.graphVis.edges}}
    };

    step2b = (state) => {
        let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 0, '#D1C4E9', 3, false, ' e1 ', true, false);
        return {graphVis: {nodes: state.graphVis.nodes, edges: newEdges}}
    };

    step2c = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 1, '#D1C4E9', ' w ');
        let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 0, '#D1C4E9', 3, false, ' e1 ', false, false);
        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step2d = (state) => {
        let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 1, '#D1C4E9', 3, false, ' e2 ', true, false);
        return {graphVis: {nodes: state.graphVis.nodes, edges: newEdges}}
    };

    step2e = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 2, '#D1C4E9', ' v ');
        let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 1, '#D1C4E9', 3, false, ' e2 ', false, false);
        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step2Texts = () => {
        const description = (<p>Konstrukce sledu <MN>S_1 = (u,e_1,w,e_2,v)</MN></p>);
        return {descriptionBox: description};
    };

    step3 = () => {
        let timeout3a = setTimeout(()=> {this.setState(this.step2a);}, 1000);
        let timeout3b = setTimeout(()=> {this.setState(this.step2b);}, 2000);
        let timeout3c = setTimeout(()=> {this.setState(this.step2c);}, 3000);
        let timeout3d = setTimeout(()=> {this.setState(this.step3d);}, 4000);
        let timeout3e = setTimeout(()=> {this.setState(this.step3e);}, 5000);
        let timeout3f = setTimeout(()=> {this.setState(this.step3f);}, 6000);
        let timeout3g = setTimeout(()=> {this.setState(this.step3g);}, 7000);
        let timeout3h = setTimeout(()=> {this.setState(this.step3h);}, 8000);
        let timeout3i = setTimeout(()=> {this.setState(this.step3i);}, 9000);
        let timeout3j = setTimeout(()=> {this.setState(this.step3j);}, 10000);
        let timeout3k = setTimeout(()=> {this.setState(this.step3k);}, 11000);
        let timeout3l = setTimeout(()=> {
            this.setState(this.stepReset);
            this.setState(this.step1);
            this.setState(this.step3Texts);
        }, 12000);

        this.setState({timeouts: [timeout3a, timeout3b, timeout3c, timeout3d, timeout3e, timeout3f, timeout3g,
                timeout3h, timeout3i, timeout3j, timeout3k, timeout3l]});
    };

    step3d = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 1, '#B39DDB', ' w ');
        return {graphVis: {nodes: newNodes, edges: this.state.graphVis.edges}}
    };

    step3e = (state) => {
        let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 0, '#B39DDB', 3, false, ' e1 ', false, true);
        return {graphVis: {nodes: state.graphVis.nodes, edges: newEdges}}
    };

    step3f = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 0, '#B39DDB', ' u ');
        let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 0, '#B39DDB', 3, false, ' e1 ', false, false);
        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step3g = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 0, '#9575CD', ' u ');
        return {graphVis: {nodes: newNodes, edges: state.graphVis.edges}}
    };

    step3h = (state) => {
        let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 0, '#9575CD', 3, false, ' e1 ', true, false);
        return {graphVis: {nodes: state.graphVis.nodes, edges: newEdges}}
    };

    step3i = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 1, '#9575CD', ' w ');
        let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 0, '#9575CD', 3, false, ' e1 ', false, false);
        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step3j = (state) => {
        let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 1, '#9575CD', 3, false, ' e2 ', true, false);
        return {graphVis: {nodes: state.graphVis.nodes, edges: newEdges}}
    };

    step3k = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 2, '#9575CD', ' v ');
        let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 1, '#9575CD', 3, false, ' e2 ', false, false);
        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step3Texts = () => {
        const description = (<p>Konstrukce sledu <MN>S_2 = (u,e_1,w,e_1,u,e_1,w,e_2,v)</MN></p>);
        return {descriptionBox: description}
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
                                        <M.Context input='tex'>
                                            <div className={"descriptionBox"}>
                                                {this.state.descriptionBox}
                                            </div>
                                        </M.Context>
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
                                                Dokažte, nebo vyvraťte: když v grafu <MN>G</MN> existují dva
                                                různé <MN>u</MN>-<MN>v</MN> sledy, tak <MN>G</MN> obsahuje kružnici.
                                            </div>
                                        </M.Context>
                                        <br/>
                                        <div id="divProofContainer">
                                            <h3>Důkaz</h3>
                                            <M.Context input='tex'>
                                                <div className="bg-warning" id="proofBox">
                                                    <p className="text-red"><b>Tvrzení:</b></p>
                                                    <p>Když v grafu <MN>G</MN> existují dva
                                                        různé <MN>u</MN>-<MN>v</MN> sledy, tak <MN>G</MN> obsahuje
                                                        kružnici.</p>
                                                    <p className="text-blue">Neplatí, protože existuje
                                                        kontrapříklad.</p>
                                                    <br />
                                                    <p>Existují dva různé <MN>u</MN>-<MN>v</MN> sledy:</p>
                                                    <p id="pCurrent"><MN>S_1 = (u,e_1,w,e_2,v)</MN></p>
                                                </div>
                                            </M.Context>
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