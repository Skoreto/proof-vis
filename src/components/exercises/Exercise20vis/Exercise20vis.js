import GraphVis from 'react-graph-vis'
import React, {Component} from 'react';
import {updateNode, addObjectArray, updateEdge, updateEdgeWithArrow, clearAllTimers} from '../../../functionality/GraphFunctions'
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
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight'
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft'
import faPaintBrush from '@fortawesome/fontawesome-free-solid/faPaintBrush'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus'
import faCircle from '@fortawesome/fontawesome-free-solid/faCircleNotch'

const locales = {
    cs: {
        edit: 'Upravit',
        del: 'Smazat vybrané',
        back: 'Zpět',
        addNode: 'Přidat vrchol',
        addEdge: 'Přidat hranu',
        editNode: 'Upravit vrchol',
        editEdge: 'Upravit hranu',
        addDescription: 'Klikněte do prázdného prostoru pro umístění nového vrcholu.',
        edgeDescription: 'Táhnutím hrany od vybraného vrcholu ji spojte s jiným vrcholem.',
        editEdgeDescription: 'Přetáhněte konec hrany na vrchol, se kterým ji chcete spojit.',
        createEdgeError: 'Nelze připojit hrany ke clusteru.',
        deleteClusterError: 'Clustery nemohou být smazány.',
        editClusterError: 'Clustery nemohou být upraveny.'
    }
};

const eXY = 'e=\\{x,y\\}';
const Pxy = 'P_{xy}';

class Exercise20vis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphVis: {
                nodes: [],
                edges: []
            },
            network: null,
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
            repeatBoxContent: '',
            options: {
                autoResize: true,
                height: '100%',
                width: '100%',
                locale: 'cs',
                locales: locales,
                clickToUse: false,
                physics: false,
                layout: {},
                nodes: {
                    shape: 'circle',
                    color: {background: '#ffff08', border: '#000000'},
                    label: '   ',
                    margin: 12,
                    font: {size: 18}
                },
                edges: {
                    arrows: {
                        to: {enabled: false, scaleFactor: 2},
                        from: {enabled: false, scaleFactor: 2}
                    },
                    color: {color: '#000000', hover: '#000000'},
                    width: 1,
                    dashes: false,
                    label: undefined,
                    font: {align: 'top', size: 18}
                },
                configure: {
                    enabled: false,
                    filter: 'nodes,edges',
                    showButton: true
                },
                manipulation: {
                    enabled: true,
                    initiallyActive: false,
                    addNode: function(nodeData, callback) {
                        // Nastaveni parametru noveho vrcholu
                        let color = { background:'#FFFF00', border:'#000000' };
                        let shadow = { enabled: false };
                        nodeData.shape = 'dot';
                        nodeData.size = 18;
                        nodeData.label = null;
                        nodeData.color = color;
                        nodeData.borderWidth = 1;
                        nodeData.shadow = shadow;
                        callback(nodeData);
                    },
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
                    tooltipDelay: 300,
                    zoomView: true
                }
            },
        };
        this.updateNode = updateNode.bind(this);
        this.addObjectArray = addObjectArray.bind(this);
        this.updateEdge = updateEdge.bind(this);
        this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
        this.clearAllTimers = clearAllTimers.bind(this);
        this.initNetworkInstance = this.initNetworkInstance.bind(this);
    }

    /**
     * Initialize graphVis network instance.
     * @param {Object} network - Object of network instance returned by getNetwork() callback function.
     */
    initNetworkInstance(network) {
        this.setState({network: network});
    }

    tryNetwork = (state) => {
        const newOptions = {
            position: {x: 165, y: -10},
            scale: 0.85,
            offset: {x: 0, y: 0},
            animation: {duration: 1000, easingFunction: "easeInOutQuad"}
        };
        this.setState({
            network: state.network.moveTo(newOptions)
        });
    };

    /**
     * Handler for activating drawing over graph.
     * @param state - State of the component.
     */
    handlerSketchAllowance = (state) => {
        if (state.isSketchAllowed) {
            this.setState({
                isSketchAllowed: false,
                btnSketchA: false,
                btnSketchC: '',
                btnPencilD: true,
                btnLineD: true,
                btnCircleD: true
            })
        } else {
            const isAnyToolActive = state.btnLineA || state.btnCircleA;
            this.setState({
                isSketchAllowed: true,
                btnSketchA: true,
                btnSketchC: 'btnSketchActive',
                btnPencilA: !isAnyToolActive,
                btnPencilD: false,
                btnLineD: false,
                btnCircleD: false
            })
        }
    };

    /**
     * Handler for changing drawing tool.
     * Activates the right tool button and deactivates others.
     * @param {number} tool - Number for assigned tool.
     */
    handlerSelectedTool = (tool) => {
        switch (tool) {
            case 1: {
                this.setState({
                    sketchTool: Tools.Pencil,
                    btnPencilA: true,
                    btnLineA: false,
                    btnCircleA: false
                });
                break;
            }
            case 2: {
                this.setState({
                    sketchTool: Tools.Line,
                    btnPencilA: false,
                    btnLineA: true,
                    btnCircleA: false
                });
                break;
            }
            case 3: {
                this.setState({
                    sketchTool: Tools.Circle,
                    btnPencilA: false,
                    btnLineA: false,
                    btnCircleA: true
                });
                break;
            }
            default: {
                this.setState({
                    sketchTool: Tools.Pencil,
                    btnPencilA: true,
                    btnLineA: false,
                    btnCircleA: false
                });
                break;
            }
        }
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
                this.setState({btnNextD: false});
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
                <p>DEFINICE MOSTU
                    <br/>Pro každý graf <MN>G=(V,E)</MN> jsou následující podmínky ekvivalentní:</p>
                <p>
                    I. graf <MN>G</MN> je strom.<br/>
                    II. Pro každé dva vrcholy <MN>x,y \in V</MN> existuje
                    právě jedna cesta z vrcholu <MN>x</MN> do vrcholu <MN>y</MN>.
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
        const newOptions = {
            position: {x: 170, y: -10},
            scale: 0.82,
            offset: {x: 0, y: 0},
            animation: {duration: 1000, easingFunction: "easeInOutQuad"}
        };

        return {graphVis: {nodes: newNodes, edges: newEdges}, network: state.network.moveTo(newOptions)}
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
            že <MN>\exists</MN> <MN>x-y</MN> cesta <MN>{Pxy}</MN> v <MN>G</MN> i v <MN>G-e</MN></p>);
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
    };

    step6a = (state) => {
        let newEdges = this.updateEdge(state.graphVis.edges, 2, '#81C784', 3, false, ' e ');
        // Move camera to new position
        const newOptions = {
            position: { x: 0, y: -10 },
            scale: 1.4,
            offset: { x: 0, y: 0 },
            animation: {duration: 1500, easingFunction: "easeInOutQuad"}
        };
        // return {graphVis: {nodes: state.graphVis.nodes, edges: newEdges}, network: state.network.moveTo(newOptions)}
        return {graphVis: {nodes: state.graphVis.nodes, edges: newEdges}}
    };

    step6b = (state) => {
        let newEdges = this.updateEdge(state.graphVis.edges, 2, '#000000', 1, false, ' e ');
        return {graphVis: {nodes: state.graphVis.nodes, edges: newEdges}}
    };

    step6Texts = () => {
        const description = (<p>Cesta <MN>{Pxy}</MN> spolu s hranou <MN>{eXY}</MN> tvoří kružnici v <MN>G</MN> obsahující hranu <MN>e</MN></p>);
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
                            <Row className="page-row">
                                <Col xs={12} md={12} lg={12}>
                                    <M.Context input='tex'>
                                        <div className="bg-info" id="definition">
                                            <cite><q>Nechť <MN>G</MN> je souvislý graf. Jestliže <MN>e</MN> není most
                                            v <MN>G</MN>, pak v <MN>G</MN> existuje kružnice obsahující
                                            hranu <MN>e</MN>.</q></cite> Dokažte přímo.
                                        </div>
                                    </M.Context>
                                </Col>
                            </Row>
                            <Row className="page-row">
                                <Col xs={6} md={6} lg={6}>
                                    <main>
                                        {sketch}
                                        <div className="GraphBox">
                                            <GraphVis graph={this.state.graphVis} options={this.state.options}
                                                      events={events} style={{width: "650px", height: "400px"}}
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
                                                <Button clicked={() => this.handlerSketchAllowance(this.state)}
                                                        active={this.state.btnSketchA} addClass={this.state.btnSketchC}>
                                                    <FontAwesomeIcon icon={faPaintBrush}/></Button>
                                                <Button clicked={() => this.handlerSelectedTool(1)}
                                                        active={this.state.btnPencilA} disabled={this.state.btnPencilD}>
                                                    <FontAwesomeIcon icon={faPencilAlt}/></Button>
                                                <Button clicked={() => this.handlerSelectedTool(2)}
                                                        active={this.state.btnLineA} disabled={this.state.btnLineD}>
                                                    <FontAwesomeIcon icon={faMinus}/></Button>
                                                <Button clicked={() => this.handlerSelectedTool(3)}
                                                        active={this.state.btnCircleA} disabled={this.state.btnCircleD}>
                                                    <FontAwesomeIcon icon={faCircle}/></Button>
                                                <Button clicked={() => this.tryNetwork(this.state)}>Network</Button>
                                            </span>
                                        </div>
                                    </main>
                                </Col>
                                <Col xs={5} md={5} lg={5} smOffset={1} mdOffset={1} lgOffset={1}>
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
                                                    <div className={2 === this.state.currentStep ? 'proof-active' : ''}>
                                                        <p>Mezi libovolně zvolenými vrcholy <MN>u</MN> a <MN>v</MN> existuje jediná cesta.</p>
                                                        <p><MN>\forall u,v \in V(G):</MN> Když
                                                            existuje <MN>u-v</MN> cesta <MN>P</MN> v <MN>G</MN>, tak
                                                            existuje <MN>u-v</MN> cesta <MN>P'</MN> v <MN>G-e</MN> (pozn
                                                            .: <MN>P'</MN> se nemusí nutně <MN>=P</MN>)</p>
                                                    </div>
                                                    <div className={3 === this.state.currentStep ? 'proof-active' : ''}>

                                                    </div>
                                                    <div className={4 === this.state.currentStep ? 'proof-active' : ''}>

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