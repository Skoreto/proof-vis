import GraphVis from 'react-graph-vis'
import React, {Component} from 'react';
import {updateNode, updateEdge, updateEdgeWithArrow, addObjectArray, clearAllTimers,
    handlerSketchAllowance, handlerSelectedTool, graphVisOptions} from '../../../functionality/GraphFunctions'
import {Row, Col} from 'react-bootstrap';
import {SketchField, Tools} from 'react-sketch';
import M from 'react-mathjax2';
import MN from '../../../components/MathJax/MathJaxNode'
import '../../../customMainTheme.css'
import PageHeading from "../../../components/UI/PageHeading/PageHeading";
import DefinitionPanel from "../../../components/UI/DefinitionPanel/DefinitionPanel";
import Button from '../../../components/UI/Button/Button'
import StepCounter from '../../../components/UI/StepCounter/StepCounter'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight'
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft'
import faPaintBrush from '@fortawesome/fontawesome-free-solid/faPaintBrush'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus'
import faCircle from '@fortawesome/fontawesome-free-solid/faCircleNotch'

class Exercise20vis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphVis: {
                nodes: [],
                edges: []
            },
            options: graphVisOptions,
            timeouts: [],
            intervals: [],
            currentStep: 0,
            isSketchAllowed: false,
            sketchTool: Tools.Pencil,
            descriptionBox: '',
            btnPrevD: true,
            btnNextD: false,
            btnSketchA: false,
            btnSketchC: '',
            btnPencilA: false,
            btnPencilD: true,
            btnLineA: false,
            btnLineD: true,
            btnCircleA: false,
            btnCircleD: true,
            repeatBoxHidden: true,
            repeatBoxContent: ''
        };
        const network = null;
        this.updateNode = updateNode.bind(this);
        this.updateEdge = updateEdge.bind(this);
        this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
        this.addObjectArray = addObjectArray.bind(this);
        this.clearAllTimers = clearAllTimers.bind(this);
        this.initNetworkInstance = this.initNetworkInstance.bind(this);
        this.handlerSketchAllowance = handlerSketchAllowance.bind(this);
        this.handlerSelectedTool = handlerSelectedTool.bind(this);
    }

    /**
     * Initialize graphVis network instance.
     * @param {Object} networkInstance - Object of network instance returned by getNetwork() callback function.
     */
    initNetworkInstance(networkInstance) {
        this.network = networkInstance;
    }

    tryMoveNetworkCamera = (state) => {
        const newCameraPosition = {
            position: {x: 165, y: -10}, scale: 0.85,
            animation: {duration: 1000, easingFunction: "easeInOutQuad"}
        };
        this.network.moveTo(newCameraPosition);
    };

    nextStep = () => {
        if (this.state.currentStep <= 5) {
            if (this.state.currentStep === 0) {
                this.setState({btnPrevD: false});
                this.setState(this.step1);
                this.setState(this.step1Texts);
            }

            if (this.state.currentStep === 1) {
                this.setState(this.step2);
                this.setState(this.step2Texts);
            }

            if (this.state.currentStep === 2) {
                this.setState(this.step3);
                this.setState(this.step3Texts);
            }

            if (this.state.currentStep === 3) {
                this.setState(this.step4);
                this.setState(this.step4Texts);
            }

            if (this.state.currentStep === 4) {
                this.setState(this.step5);
                this.setState(this.step5Texts);
            }

            if (this.state.currentStep === 5) {
                this.setState({btnNextD: true});
                this.step6();
                let interval1 = setInterval(this.step6, 4000);
                this.setState({interval1: interval1});
                this.setState(this.step6Texts);
            }

            // Increase currentStep after a step was executed
            this.setState((state) => {return {currentStep: ++state.currentStep}});
        }
    };

    previousStep = () => {
        if (this.state.currentStep > 0) {
            if (this.state.currentStep === 1) {
                this.setState({btnPrevD: true});
                this.setState(this.stepReset);
            }

            if (this.state.currentStep === 2) {
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step1Texts);
            }

            if (this.state.currentStep === 3) {
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step2);
                this.setState(this.step2Texts);
            }

            if (this.state.currentStep === 4) {
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step2);
                this.setState(this.step3);
                this.setState(this.step3Texts);
            }

            if (this.state.currentStep === 5) {
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step2);
                this.setState(this.step3);
                this.setState(this.step4);
                this.setState(this.step4Texts);
            }

            if (this.state.currentStep === 6) {
                this.setState({btnNextD: false});
                clearInterval(this.state.interval1);
                this.clearAllTimers(this.state);
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step2);
                this.setState(this.step3);
                this.setState(this.step4);
                this.setState(this.step5);
                this.setState(this.step5Texts);
            }

            // Reduce currentStep after a step was executed
            this.setState((state) => {return {currentStep: --state.currentStep}});
        }
    };

    stepReset = () => {
        return {graphVis: {nodes: [], edges: []}, descriptionBox: '', repeatBoxHidden: true, repeatBoxContent: ''}
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

    step1Texts = () => {
        const description = (<p>Sestrojení příkladu grafu <MN>G</MN></p>);
        const repeatBox = (
            <div>
                <p>DEFINICE MOSTU (1.11)
                    <br/>Nechť je dán graf <MN>G=(V,E)</MN>, vrchol <MN>v \in V</MN> a hrana <MN>e \in E</MN>.
                </p>
                <p>
                    Hrana <MN>e</MN> je most grafu <MN>G</MN>, jestliže graf <MN>G-e</MN> má více komponent než
                    graf <MN>G</MN>.
                </p>
            </div>
        );

        return {descriptionBox: description, repeatBoxHidden: false, repeatBoxContent: repeatBox}
    };

    step2 = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 0, '#ffff08', ' u ');
        newNodes = this.updateNode(newNodes, 1, '#ffff08', ' x ');
        newNodes = this.updateNode(newNodes, 3, '#ffff08', ' y ');
        newNodes = this.updateNode(newNodes, 4, '#ffff08', ' v ');

        let newEdges = this.updateEdge(state.graphVis.edges, 2, '#000000', 1, false, ' e ');

        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step2Texts = () => {
        const description = (<p>Zvolení hrany <MN>e</MN> a libovolných vrcholů <MN>u</MN> a <MN>v</MN></p>);
        return {descriptionBox: description, repeatBoxHidden: true, repeatBoxContent: ''}
    };

    step3 = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 0, '#B39DDB', ' u ');
        newNodes = this.updateNode(newNodes, 1, '#B39DDB', ' x ');
        newNodes = this.updateNode(newNodes, 3, '#B39DDB', ' y ');
        newNodes = this.updateNode(newNodes, 4, '#B39DDB', ' v ');

        let newEdges = this.updateEdge(state.graphVis.edges, 0, '#B39DDB', 2, false, undefined);
        newEdges = this.updateEdge(newEdges, 2, '#B39DDB', 2, false, ' e ');
        newEdges = this.updateEdge(newEdges, 4, '#B39DDB', 2, false, undefined);

        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step3Texts = () => {
        const description = (<p>Sestrojení cesty <MN>P</MN> mezi <MN>u-v</MN> v grafu <MN>G</MN></p>);
        return {descriptionBox: description, repeatBoxHidden: true, repeatBoxContent: ''}
    };

    step4 = (state) => {
        let newNodes = this.addObjectArray(state.graphVis.nodes, [
            {id: 6, x: 220, y: -40, color: {background: '#B39DDB'}, label: ' u '},
            {id: 7, x: 360, y: -100, color: {background: '#B39DDB'}, label: ' x '},
            {id: 8, x: 370, y: 50, color: {background: '#B39DDB'}, label: '   '},
            {id: 9, x: 510, y: -50, color: {background: '#FFFF08'}, label: ' y '},
            {id: 10, x: 520, y: 80, color: {background: '#B39DDB'}, label: ' v '}
        ]);

        let newEdges = this.addObjectArray(state.graphVis.edges, [
            {id: 6, from: 6, to: 7, color: {color: '#B39DDB', hover: '#B39DDB'}, width: 2},
            {id: 7, from: 7, to: 8, color: {color: '#B39DDB', hover: '#B39DDB'}, width: 2},
            {id: 8, from: 7, to: 9, color: {color: 'red', hover: 'red'}, width: 2, dashes: [8, 8], label: ' e '},
            {id: 9, from: 8, to: 10, color: {color: '#B39DDB', hover: '#B39DDB'}, width: 2},
            {id: 10, from: 9, to: 10}
        ]);

        // Move camera to new position
        const newCameraPosition = {
            position: {x: 170, y: -10}, scale: 0.82, 
            animation: {duration: 1000, easingFunction: "easeInOutQuad"}
        };
        this.network.moveTo(newCameraPosition);

        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step4Texts = () => {
        const description = (<p>Když existuje <MN>u-v</MN> cesta <MN>P</MN> v <MN>G</MN>, tak
            existuje <MN>u-v</MN> cesta <MN>P'</MN> v <MN>G-e</MN> (pozn.: nemusí platit <MN>P'=P</MN>)</p>);
        return {descriptionBox: description, repeatBoxHidden: true, repeatBoxContent: ''}
    };

    step5 = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 0, '#FFFF08', '   ');
        newNodes = this.updateNode(newNodes, 1, '#81C784', ' x ');
        newNodes = this.updateNode(newNodes, 2, '#81C784', '   ');
        newNodes = this.updateNode(newNodes, 3, '#81C784', ' y ');
        newNodes = this.updateNode(newNodes, 4, '#81C784', '   ');
        newNodes = this.updateNode(newNodes, 5, '#FFFF08', '   ');
        newNodes = this.updateNode(newNodes, 6, '#81C784', ' x ');
        newNodes = this.updateNode(newNodes, 7, '#81C784', '   ');
        newNodes = this.updateNode(newNodes, 8, '#81C784', ' y ');
        newNodes = this.updateNode(newNodes, 9, '#81C784', '   ');

        let newEdges = this.updateEdge(state.graphVis.edges, 0, '#000000', 1, false, undefined);
        newEdges = this.updateEdge(newEdges, 1, '#81C784', 3, false, undefined);
        newEdges = this.updateEdge(newEdges, 2, '#000000', 1, false, ' e ');
        newEdges = this.updateEdge(newEdges, 3, '#81C784', 3, false, undefined);
        newEdges = this.updateEdge(newEdges, 4, '#81C784', 3, false, undefined);
        newEdges = this.updateEdge(newEdges, 5, '#000000', 1, false, undefined);
        newEdges = this.updateEdge(newEdges, 6, '#81C784', 3, false, undefined);
        newEdges = this.updateEdge(newEdges, 7, 'red', 2, [8, 8], ' e ');
        newEdges = this.updateEdge(newEdges, 8, '#81C784', 3, false, undefined);
        newEdges = this.updateEdge(newEdges, 9, '#81C784', 3, false, undefined);

        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step5Texts = () => {
        const description = (<p>Protože existence cesty platí pro libovolná <MN>u</MN> a <MN>v</MN>, platí také,
            že <MN>\exists</MN> <MN>x-y</MN> cesta <MN>{'P_{xy}'}</MN> v <MN>G</MN> i v <MN>G-e</MN></p>);
        return {descriptionBox: description, repeatBoxHidden: true, repeatBoxContent: ''}
    };

    step6 = () => {
        let timeout1 = setTimeout(()=> {
            this.setState(this.step6a);
        }, 1000);

        let timeout2 = setTimeout(()=> {
            this.setState(this.step6b);
        }, 2000);

        this.setState({timeouts: [timeout1, timeout2]});

        // Move camera to new position
        const newCameraPosition = {
            position: {x: 0, y: -10}, scale: 1.4, 
            animation: {duration: 1500, easingFunction: "easeInOutQuad"}
        };
        this.network.moveTo(newCameraPosition);
    };

    step6a = (state) => {
        let newEdges = this.updateEdge(state.graphVis.edges, 2, '#81C784', 3, false, ' e ');
        return {graphVis: {nodes: state.graphVis.nodes, edges: newEdges}}
    };

    step6b = (state) => {
        let newEdges = this.updateEdge(state.graphVis.edges, 2, '#000000', 1, false, ' e ');
        return {graphVis: {nodes: state.graphVis.nodes, edges: newEdges}}
    };

    step6Texts = () => {
        const description = (<p>Cesta <MN>{'P_{xy}'}</MN> spolu s hranou <MN>{'e=\\{x,y\\}'}</MN> tvoří kružnici v <MN>G</MN> obsahující hranu <MN>e</MN></p>);
        return {descriptionBox: description, repeatBoxHidden: true, repeatBoxContent: ''}
    };

    render() {
        const events = {};
        const isSketchAllowed = this.state.isSketchAllowed;
        const sketch = isSketchAllowed ? (
            <div className={"over-component"}>
                <SketchField width='650px' height='400px' tool={this.state.sketchTool} lineColor='#1E88E5' lineWidth={3}/>
            </div>
        ) : (<div></div>);

        return (
            <div>
                <div className={"container"}>
                    <div className="page-wrapper">
                        <PageHeading headingTitle={"Příklad 20"} breadcrumbsCurrent={"Důkazy přímo"} />
                        <div className="page-content">
                            <DefinitionPanel>
                                <cite><q>Nechť <MN>G</MN> je souvislý graf. Jestliže <MN>e</MN> není most
                                v <MN>G</MN>, pak v <MN>G</MN> existuje kružnice obsahující
                                hranu <MN>e</MN>.</q></cite> Dokažte přímo.
                            </DefinitionPanel>
                            <Row className="page-row">
                                <Col xs={12} md={12} lg={7}>
                                    <main>
                                        {sketch}
                                        <div className="GraphBox">
                                            <GraphVis graph={this.state.graphVis} options={this.state.options}
                                                      events={events} style={{height: "400px"}}
                                                      getNetwork={this.initNetworkInstance} />
                                        </div>
                                        <M.Context input='tex'>
                                            <div className="descriptionBox">
                                                {this.state.descriptionBox}
                                            </div>
                                        </M.Context>
                                        <div className="controls-panel">
                                            <span className="step-panel">
                                                <Button clicked={this.previousStep} disabled={this.state.btnPrevD}>
                                                    <FontAwesomeIcon icon={faChevronLeft}/></Button>
                                                <StepCounter currentStep={this.state.currentStep} stepSum={6} />
                                                <Button clicked={this.nextStep} disabled={this.state.btnNextD}>
                                                    <FontAwesomeIcon icon={faChevronRight}/></Button>
                                            </span>
                                            <span className="sketch-buttons">
                                                <Button clicked={() => this.setState(() => this.handlerSketchAllowance(this.state))}
                                                        active={this.state.btnSketchA} addClass={this.state.btnSketchC}>
                                                    <FontAwesomeIcon icon={faPaintBrush}/></Button>
                                                <Button clicked={() => this.setState(() => this.handlerSelectedTool(1))}
                                                        active={this.state.btnPencilA} disabled={this.state.btnPencilD}>
                                                    <FontAwesomeIcon icon={faPencilAlt}/></Button>
                                                <Button clicked={() => this.setState(() => this.handlerSelectedTool(2))}
                                                        active={this.state.btnLineA} disabled={this.state.btnLineD}>
                                                    <FontAwesomeIcon icon={faMinus}/></Button>
                                                <Button clicked={() => this.setState(() => this.handlerSelectedTool(3))}
                                                        active={this.state.btnCircleA} disabled={this.state.btnCircleD}>
                                                    <FontAwesomeIcon icon={faCircle}/></Button>
                                                <Button clicked={() => this.tryMoveNetworkCamera(this.state)}>Network</Button>
                                            </span>
                                        </div>
                                    </main>
                                </Col>
                                <Col xs={12} md={12} lg={5}>
                                    <aside>
                                        <div id="divProofContainer">
                                            <M.Context input='tex'>
                                                <div className="bg-warning" id="proofBox">
                                                    <div className={1 === this.state.currentStep ? 'proof-active' : ''}>
                                                        <p>
                                                            Pokud <MN>{'e=\\{x,y\\}'}</MN> není most v <MN>G</MN>, poté z definice
                                                            mostu platí, že graf <MN>G-e</MN> má stejný počet komponent
                                                            jako <MN>G</MN> a platí:
                                                        </p>
                                                    </div>
                                                    <div className={(2 === this.state.currentStep) ||
                                                    (3 === this.state.currentStep) ||
                                                    (4 === this.state.currentStep) ? 'proof-active' : ''}>
                                                        <p>Mezi libovolně zvolenými vrcholy <MN>u</MN> a <MN>v</MN> existuje jediná cesta.</p>
                                                        <p><MN>\forall u,v \in V(G):</MN> Když
                                                            existuje <MN>u-v</MN> cesta <MN>P</MN> v <MN>G</MN>, tak
                                                            existuje <MN>u-v</MN> cesta <MN>P'</MN> v <MN>G-e</MN> (pozn
                                                            .: <MN>P'</MN> se nemusí nutně <MN>=P</MN>)</p>
                                                    </div>
                                                    <div className={5 === this.state.currentStep ? 'proof-active' : ''}>
                                                        <p>
                                                            <MN>\implies \exists x-y</MN> cesta <MN>{'P_{xy}'}</MN> v <MN>G-e</MN>
                                                        </p>
                                                        <p>
                                                            <MN>\implies x-y</MN> cesta <MN>{'P_{xy}'}</MN> se nachází
                                                            i v <MN>G</MN> (protože <MN>G</MN> vznikne
                                                            z <MN>G-e</MN> přidáním hrany <MN>e</MN>)
                                                        </p>
                                                    </div>
                                                    <div className={'borderless' +
                                                    (6 === this.state.currentStep ? ' proof-active' : '')}>
                                                        <p>
                                                            <MN>\implies</MN> Poté z definice kružnice platí,
                                                            že <MN>x-y</MN> cesta <MN>{'P_{xy}'}</MN> spolu s
                                                            hranou <MN>{'e=\\{x,y\\}'}</MN> tvoří kružnici v <MN>G</MN> obsahující
                                                            hranu <MN>e</MN>.
                                                        </p>
                                                        <p className="text-center">
                                                            <MN>\dagger</MN> Tím je dokázáno stanovené tvrzení.
                                                        </p>
                                                    </div>
                                                </div>
                                            </M.Context>
                                        </div>
                                        <div className={'repeat-box'} hidden={this.state.repeatBoxHidden}>
                                            <M.Context input='tex'>
                                                <div>
                                                    {this.state.repeatBoxContent}
                                                </div>
                                            </M.Context>
                                        </div>
                                    </aside>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Exercise20vis;