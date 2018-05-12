import GraphVis from 'react-graph-vis'
import React, {Component} from 'react';
import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import {BrowserRouter, Link} from 'react-router-dom';
import {SketchField, Tools} from 'react-sketch';
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
import {graphVisOptions, handlerSelectedTool, handlerSketchAllowance} from "../../../functionality/GraphFunctions";

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphVis: {
                nodes: [],
                edges: []
            },
            options: graphVisOptions,
            currentStep: 0,
            isSketchAllowed: false,
            sketchTool: Tools.Pencil,
            btnPrevD: true,
            btnNextD: true,
            btnSketchA: false,
            btnSketchC: '',
            btnPencilA: false,
            btnPencilD: true,
            btnLineA: false,
            btnLineD: true,
            btnCircleA: false,
            btnCircleD: true
        };
        this.handlerSketchAllowance = handlerSketchAllowance.bind(this);
        this.handlerSelectedTool = handlerSelectedTool.bind(this);
    }

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