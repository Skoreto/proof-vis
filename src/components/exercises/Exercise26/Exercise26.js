import GraphVis from 'react-graph-vis'
import React, {Component} from 'react';
import {updateNode, updateEdge, updateEdgeWithArrow, clearAllTimers} from '../../../functionality/GraphFunctions'
import {Row, Col} from 'react-bootstrap';
import {SketchField, Tools} from 'react-sketch';
import M from 'react-mathjax2';
import MN from '../../../components/MathJax/MathJaxNode'
import '../../../customMainTheme.css'
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

class Exercise26 extends Component {
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
                    label: '   ',
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
        this.updateEdge = updateEdge.bind(this);
        this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
        this.clearAllTimers = clearAllTimers.bind(this);
    }

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
        if (this.state.currentStep < 5) {
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
                this.step3();
                let interval1 = setInterval(this.step3, 3000);
                this.setState({intervals: [interval1]});
            }

            if (this.state.currentStep === 3) {
                this.clearAllTimers(this.state);
                this.step4();
                let interval2 = setInterval(this.step4, 3000);
                this.setState({intervals: [interval2]});
                this.setState(this.step4Texts);
            }

            if (this.state.currentStep === 4) {
                this.setState({btnNextD: true});
                this.clearAllTimers(this.state);
                this.setState(this.step4a);
                this.setState(this.step5Texts);
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
                this.clearAllTimers(this.state);
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step2);
                this.setState(this.step2Texts);
            }

            if (this.state.currentStep === 4) {
                this.clearAllTimers(this.state);
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step2);
                this.step3();
                let interval1 = setInterval(this.step3, 3000);
                this.setState({intervals: [interval1]});
            }

            if (this.state.currentStep === 5) {
                this.setState({btnNextD: false});
                this.clearAllTimers(this.state);
                this.step4();
                let interval2 = setInterval(this.step4, 3000);
                this.setState({intervals: [interval2]});
                this.setState(this.step4Texts);
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
                    {id: 1, x: 0, y: -150, color: {background: '#ffff08'}, label: '   '},
                    {id: 2, x: -70, y: -50, color: {background: '#ffff08'}, label: '   '},
                    {id: 3, x: -140, y: 50, color: {background: '#ffff08'}, label: '   '},
                    {id: 4, x: 0, y: 50, color: {background: '#ffff08'}, label: '   '},
                    {id: 5, x: -70, y: 150, color: {background: '#ffff08'}, label: '   '},
                    {id: 6, x: 70, y: 150, color: {background: '#ffff08'}, label: '   '},
                    {id: 7, x: 70, y: -50, color: {background: '#ffff08'}, label: '   '},
                    {id: 8, x: 140, y: 50, color: {background: '#ffff08'}, label: '   '}
                ],
                edges: [
                    {id: 1, from: 1, to: 2},
                    {id: 2, from: 2, to: 3},
                    {id: 3, from: 2, to: 4},
                    {id: 4, from: 4, to: 5},
                    {id: 5, from: 4, to: 6},
                    {id: 6, from: 1, to: 7},
                    {id: 7, from: 7, to: 8}
                ]
            }
        }
    };

    step1Texts = () => {
        const description = (<p>Příklad grafu <MN>G</MN>, který je strom</p>);
        const repeatBox = (
            <div>
                <p>VĚTA O STROMECH (4.1)
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
        let newNodes = this.updateNode(state.graphVis.nodes, 0, '#B39DDB', '   ');
        newNodes = this.updateNode(newNodes, 1, '#B39DDB', '   ');
        newNodes = this.updateNode(newNodes, 3, '#B39DDB', '   ');
        newNodes = this.updateNode(newNodes, 5, '#B39DDB', ' v ');
        newNodes = this.updateNode(newNodes, 6, '#B39DDB', ' u ');

        let newEdges = this.updateEdge(state.graphVis.edges, 0, '#B39DDB', 2, false, undefined);
        newEdges = this.updateEdge(newEdges, 2, '#B39DDB', 2, false, undefined);
        newEdges = this.updateEdge(newEdges, 4, '#B39DDB', 2, false, undefined);
        newEdges = this.updateEdge(newEdges, 5, '#B39DDB', 2, false, undefined);

        return {graphVis: {nodes: newNodes, edges: newEdges}, descriptionBox: ''}
    };

    step2Texts = () => {
        const description = (<p>Mezi libovolně zvolenými vrcholy <MN>u,v</MN> existuje jediná cesta.</p>);
        const repeatBox = (
            <div>
                <p>VĚTA O STROMECH (4.1)
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

    step3 = () => {
        this.setState(this.step3b);
        let timeout3a = setTimeout(()=> {this.setState(this.step3a);}, 1000);
        let timeout3b = setTimeout(()=> {this.setState(this.step3b);}, 2000);

        this.setState({timeouts: [timeout3a, timeout3b], descriptionBox: '', repeatBoxHidden: true,
            repeatBoxContent: ''});
    };

    step3a = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 1, '#B39DDB', ' x ');
        newNodes = this.updateNode(newNodes, 3, '#B39DDB', ' y ');
        let newEdges = this.updateEdge(state.graphVis.edges, 2, '#F06292', 2, [8,8], ' e ');
        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step3b = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 1, '#B39DDB', ' x ');
        newNodes = this.updateNode(newNodes, 3, '#B39DDB', ' y ');
        let newEdges = this.updateEdge(state.graphVis.edges, 2, '#B39DDB', 2, false, ' e ');
        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step4 = () => {
        this.setState(this.step3a);
        let timeout4a = setTimeout(()=> {this.setState(this.step4a);}, 1000);
        let timeout4b = setTimeout(()=> {this.setState(this.step3a);}, 2000);

        this.setState({timeouts: [timeout4a, timeout4b], repeatBoxHidden: true, repeatBoxContent: ''});
    };

    step4a = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 1, '#B39DDB', ' x ');
        newNodes = this.updateNode(newNodes, 3, '#B39DDB', ' y ');
        let newEdges = this.updateEdge(state.graphVis.edges, 2, '#FFFFFF', 2, false, '   ');
        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step4Texts = () => {
        const description = (<p>Odebráním hrany <MN>e</MN> se vrcholy <MN>u</MN> a <MN>v</MN> ocitnou v různých
            komponentách souvislosti.</p>);
        return {descriptionBox: description}
    };

    step5Texts = () => {
        const description = (<p>Graf <MN>G-e</MN> není souvislý a není tedy ani stromem.</p>);
        const repeatBox = (
            <div>
                <p>DEFINICE STROMU (4.3)<br/>
                    Strom je <u>souvislý</u> graf, který neobsahuje kružnici.</p>
            </div>
        );

        return {descriptionBox: description, repeatBoxHidden: false, repeatBoxContent: repeatBox}
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
                        <PageHeading headingTitle={"Příklad 26"} breadcrumbsCurrent={"Důkazy přímo"} />
                        <div className="page-content">
                            <Row className="page-row">
                                <Col xs={12} md={12} lg={12}>
                                    <M.Context input='tex'>
                                        <div className="bg-info" id="definition">
                                            Dokažte přímo tvrzení:
                                            <cite><q>Jestliže graf <MN>G</MN> je strom, pak graf <MN>G-e</MN>, kde <MN>e</MN> je libovolná
                                            hrana grafu <MN>G</MN>, již není strom.</q></cite>
                                            <br/>
                                            (K důkazu použijte známé definice a věty týkající se stromů.)
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
                                                      events={events} style={{width: "650px", height: "400px" }} />
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
                                                <StepCounter currentStep={this.state.currentStep} stepSum={5} />
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
                                            </span>
                                        </div>
                                    </main>
                                </Col>
                                <Col xs={5} md={5} lg={5} smOffset={1} mdOffset={1} lgOffset={1}>
                                    <aside>
                                        <div id="divProofContainer">
                                            <M.Context input='tex'>
                                                <div className="bg-warning" id="proofBox">
                                                    <div className={(1 === this.state.currentStep) ||
                                                    (2 === this.state.currentStep) ? 'proof-active' : ''}>
                                                        <p>Pokud graf <MN>G</MN> je strom <br/>
                                                            <MN>\Rightarrow</MN> pak dle věty o stromech platí, že pro
                                                            každé dva vrcholy v grafu <MN>G</MN> existuje jediná cesta.
                                                        </p>
                                                    </div>
                                                    {/*<div className={2 === this.state.currentStep ? 'proof-active' : ''}>*/}
                                                        {/*<p>Mezi libovolně zvolenými vrcholy <MN>u</MN> a <MN>v</MN> existuje jediná cesta.</p>*/}
                                                    {/*</div>*/}
                                                    <div className={3 === this.state.currentStep ? 'proof-active' : ''}>
                                                        <p><MN>\Rightarrow</MN> Protože existuje právě jediná cesta mezi
                                                            vrcholy <MN>u,v</MN>, musí vždy vést přes libovolně
                                                            zvolenou hranu <MN>{eXY}</MN> z této cesty.</p>
                                                    </div>
                                                    <div className={4 === this.state.currentStep ? ' proof-active' : ''}>
                                                        <p>
                                                            <MN>\Rightarrow</MN> v <MN>G-e</MN> neexistuje
                                                            cesta <MN>u</MN>-<MN>v</MN>
                                                            <br/><MN>\Rightarrow</MN> vrcholy <MN>u</MN>,<MN>v</MN> se
                                                            v <MN>G-e</MN> nacházejí v různých komponentách souvislosti
                                                        </p>
                                                    </div>
                                                    <div className={'borderless' +
                                                    (5 === this.state.currentStep ? ' proof-active' : '')}>
                                                        <p>
                                                            <MN>\Rightarrow</MN> <MN>G-e</MN> není souvislý
                                                            <br/><MN>\Rightarrow</MN> z definice stromu platí,
                                                            že <MN>G-e</MN> není strom
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

export default Exercise26;