import GraphVis from 'react-graph-vis'
import React, {Component} from 'react';
import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
import {SketchField, Tools} from 'react-sketch';
import {graphVisOptions, handlerSelectedTool, handlerSketchAllowance} from '../../../functionality/GraphFunctions';
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
import faRedoAlt from '@fortawesome/fontawesome-free-solid/faRedoAlt'

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
            btnCircleD: true,
            btnRepeatD: true
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
                                <Col xs={12} md={12} lg={7}>
                                    <main>
                                        {sketch}
                                        <div className="GraphBox">
                                            <GraphVis graph={this.state.graphVis} options={this.state.options}
                                                      events={events} style={{height: "400px"}} />
                                        </div>
                                        <div className="controls-panel">
                                            <span className="step-panel">
                                                <Button disabled={this.state.btnPrevD}>
                                                    <FontAwesomeIcon icon={faChevronLeft}/></Button>
                                                <StepCounter currentStep={this.state.currentStep} stepSum={0} />
                                                <Button disabled={this.state.btnNextD}>
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
                                            <span className='animation-panel'>
                                                <Button disabled={this.state.btnRepeatD}>
                                                    <FontAwesomeIcon icon={faRedoAlt}/></Button>
                                            </span>
                                        </div>
                                        <div>
                                            <h3>Šedý panel ovládání příkladu</h3>
                                            <ul>
                                                <li>Černými šipkami vlevo/vpravo se lze pohybovat v příkladu důkazu o krok zpět/vpřed.
                                                    Aktuální krok z celkového počtu kroků zobrazuje ukazadlo mezi šipkami.
                                                </li>
                                                <li>Tlačítko štětce slouží k volnému <b>kreslení přes plátno</b>. Po aktivaci kreslení jsou 
                                                    zpřístupněny k výběru další kreslící nástroje - čára a kruh. Opětovným stistknutím 
                                                    tlačítka štětce je kreslení deaktivováno a kresba vymazána.
                                                </li>
                                                <li>V průběhu více-krokových animací je aktivní tlačítko "šipky zopakovat" v pravé části panelu.
                                                    Ta slouží k okamžitému <b>zopakování animace</b> od začátku.
                                                </li>
                                            </ul>
                                            <h3>Ovládání plátna</h3>
                                            <ul>
                                                <li>Pro názornost lze přes tlačítko "Upravit" v horní části plátna <b>přidávat
                                                    vrcholy</b> a <b>propojovat je hranami.</b></li>
                                                <li>Po kliknutí na vrchol či hranu je prvek označen a lze je tlačítkem
                                                    "Smazat vybrané" v horní nabídce plátna <b>odebrat</b>.</li>
                                                <li>Otáčením kolečka myši na plátně <i>(aktuálně deaktivováno)</i> či klikáním na tlačítka + a - v
                                                    pravém dolním rohu plátna lze <b>přibližovat/oddalovat</b> pohled kamery.</li>
                                                <li>Tlačítko roztahovaného obdélníku v pravém dolním rohu plátna slouží
                                                    k <b>vycentrování grafu</b> na střed plátna a <b>resetování oddálení
                                                        kamery</b> do výchozí vzdálenosti.</li>
                                                <li>Dlouhým podržením levého tlačítka myši či klikáním při držení levého
                                                    tlačítka CTRL nad vrcholem či hranou lze <b>označit více prvků zároveň</b>.</li>
                                            </ul>
                                        </div>
                                    </main>
                                </Col>
                                <Col xs={12} md={12} lg={5}>
                                    <aside>
                                        <BrowserRouter basename={process.env.PUBLIC_URL}>
                                            <div>
                                                <ListGroup>
                                                    <ListGroupItem bsStyle="success">Důkazy přímo</ListGroupItem>
                                                    <ListGroupItem href={process.env.PUBLIC_URL + "/priklad26v2"}
                                                                   to={process.env.PUBLIC_URL + "/priklad26v2"}>
                                                            Příklad 26 (v2)
                                                    </ListGroupItem>
                                                </ListGroup>
                                                <ListGroup>
                                                    <ListGroupItem bsStyle="warning">Důkazy nepřímo</ListGroupItem>
                                                </ListGroup>
                                                <ListGroup>
                                                    <ListGroupItem bsStyle="danger">
                                                        Důkazy sporem</ListGroupItem>
                                                </ListGroup>
                                                <ListGroup>
                                                    <ListGroupItem bsStyle="info">Ostatní</ListGroupItem>
                                                    <ListGroupItem href={process.env.PUBLIC_URL + "/priklad17a"}
                                                                   to={process.env.PUBLIC_URL + "/priklad17a"}>
                                                        Příklad 17 a) (v1)
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