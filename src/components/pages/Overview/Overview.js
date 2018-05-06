import GraphVis from 'react-graph-vis'
import React, {Component} from 'react';
import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import {BrowserRouter, Link} from 'react-router-dom';
import {SketchField, Tools} from 'react-sketch';
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

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphVis: {
                nodes: [],
                edges: []
            },
            currentStep: 0,
            isSketchAllowed: false,
            sketchTool: Tools.Pencil,
            btnPrevD: false,
            btnNextD: false,
            btnSketchA: false,
            btnSketchC: '',
            btnPencilA: false,
            btnPencilD: true,
            btnLineA: false,
            btnLineD: true,
            btnCircleA: false,
            btnCircleD: true,
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
                    initiallyActive: true,
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
                        <PageHeading headingTitle={"Zkušební kreslící plátno"} breadcrumbsCurrent={"Přehled"} />
                        <div className="page-content">
                            <Row className="page-row">
                                <Col xs={6} md={6} lg={6}>
                                    <main>
                                        {sketch}
                                        <div className="GraphBox">
                                            <GraphVis graph={this.state.graphVis} options={this.state.options}
                                                      events={events} style={{width: "650px", height: "400px" }} />
                                        </div>
                                        <div className="controls-panel">
                                            <span className="step-panel">
                                                <Button clicked={this.previousStep} disabled={this.state.btnPrevD}>
                                                    <FontAwesomeIcon icon={faChevronLeft}/></Button>
                                                <StepCounter currentStep={this.state.currentStep} stepSum={0} />
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
                                        <div>
                                            <h3>Poznámky k ovládání plátna</h3>
                                            <ul>
                                                <li>Tlačítky v horní části plátna lze <b>přidávat
                                                    vrcholy</b> a <b>propojovat je hranami.</b></li>
                                                <li>Po kliknutí na vrchol či hranu je prvek označen a lze je tlačítkem
                                                    "Smazat vybrané" v horní nabídce plátna <b>odebrat</b>.</li>
                                                <li>Dále je možné tlačítky "Upravit hranu" či "Upravit vrchol" <b>změnit
                                                    propojení hrany</b> a u vrcholu lze prozatím <b>měnit
                                                    barvu</b> nebo <b>přidat popisek</b>.</li>
                                                <li>Otáčením kolečka myši na plátně či klikáním na tlačítka + a - v
                                                    pravém dolním rohu plátna lze <b>přibližovat/oddalovat</b> pohled
                                                    kamery.</li>
                                                <li>Dlouhým podržením levého tlačítka myši či klikáním při držení levého
                                                    tlačítka CTRL nad vrcholem či hranou lze <b>označit více prvků
                                                        zároveň</b>.</li>
                                                <li>Tlačítko roztahovaného obdélníku v pravém dolním rohu plátna slouží
                                                    k <b>vycentrování grafu</b> na střed plátna a <b>resetování oddálení
                                                        kamery</b> do výchozí vzdálenosti.</li>
                                            </ul>
                                        </div>
                                    </main>
                                </Col>
                                <Col xs={5} md={5} lg={5} smOffset={1} mdOffset={1} lgOffset={1}>
                                    <aside>
                                        <BrowserRouter basename={process.env.PUBLIC_URL}>
                                            <div>
                                                <ListGroup>
                                                    <ListGroupItem bsStyle="success">Důkazy přímo</ListGroupItem>
                                                    <ListGroupItem>
                                                        Příklad 26
                                                    </ListGroupItem>
                                                </ListGroup>
                                                <ListGroup>
                                                    <ListGroupItem bsStyle="warning">Důkazy nepřímo</ListGroupItem>
                                                </ListGroup>
                                                <ListGroup>
                                                    <ListGroupItem bsStyle="danger">Důkazy sporem</ListGroupItem>
                                                </ListGroup>
                                                <ListGroup>
                                                    <ListGroupItem bsStyle="info">Ostatní</ListGroupItem>
                                                    <ListGroupItem>
                                                        Příklad 17 a)
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </BrowserRouter>
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

export default Overview;