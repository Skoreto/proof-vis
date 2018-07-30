import GraphVis from 'react-graph-vis';
import React from 'react';
import {
  initialExerciseState,
  events,
  palette,
} from '../../../functionality/GlobalExerciseConstants';
import {
  updateNode, 
  updateEdge, 
  updateEdgeWithArrow, 
  clearAllTimers,
  handlerSketchAllowance, 
  handlerSelectedTool,
} from '../../../functionality/GraphFunctions';
import { Row, Col } from 'react-bootstrap';
import { SketchField } from 'react-sketch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import M from 'react-mathjax2';
import MN from '../../../components/MathJax/MathJaxNode';
import '../../../customMainTheme.css';
import PageHeading from "../../../components/UI/PageHeading/PageHeader";
import ClaimPanel from "../../../components/UI/ClaimPanel/ClaimPanel";
import Button from '../../../components/UI/Button/Button';
import StepCounter from '../../../components/UI/StepCounter/StepCounter';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import faPaintBrush from '@fortawesome/fontawesome-free-solid/faPaintBrush';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircleNotch';
import faRedoAlt from '@fortawesome/fontawesome-free-solid/faRedoAlt';

class Exercise17a extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialExerciseState;
    this.updateNode = updateNode.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
    this.clearAllTimers = clearAllTimers.bind(this);
    this.handlerSketchAllowance = handlerSketchAllowance.bind(this);
    this.handlerSelectedTool = handlerSelectedTool.bind(this);
  }

  nextStep = () => {
    if (this.state.currentStep < 4) {
      if (this.state.currentStep === 0) {
        this.setState({ btnPrevD: false });
        this.setState(this.step1);
        this.setState(this.step1Texts);
      }

      if (this.state.currentStep === 1) {
        this.setState({ btnRepeatD: false });
        this.step2();
        let interval1 = setInterval(this.step2, 8000);
        this.setState({ intervals: [interval1] });
        this.setState(this.step2Texts);
      }

      if (this.state.currentStep === 2) {
        this.clearAllTimers(this.state);
        this.setState(this.stepReset);
        this.setState(this.step1);
        this.step3();
        let interval2 = setInterval(this.step3, 14000);
        this.setState({ intervals: [interval2] });
        this.setState(this.step3Texts);
      }

      if (this.state.currentStep === 3) {
        this.setState({ btnNextD: true });
      }

      // Increase currentStep after a step was executed
      this.setState((state) => { return { currentStep: state.currentStep += 1 } });
    }
  };

  previousStep = () => {
    if (this.state.currentStep > 0) {
      if (this.state.currentStep === 1) {
        this.setState({ btnPrevD: true });
        this.clearAllTimers(this.state);
        this.setState(this.stepReset);
      }

      if (this.state.currentStep === 2) {
        this.setState({ btnRepeatD: true });
        this.clearAllTimers(this.state);
        this.setState(this.stepReset);
        this.setState(this.step1);
        this.setState(this.step1Texts);
      }

      if (this.state.currentStep === 3) {
        this.setState({ btnNextD: false });
        this.setState({ btnRepeatD: false });
        this.clearAllTimers(this.state);
        this.setState(this.stepReset);
        this.setState(this.step1);
        this.step2();
        let interval1 = setInterval(this.step2, 8000);
        this.setState({ intervals: [interval1] });
        this.setState(this.step2Texts);
      }

      if (this.state.currentStep === 4) {
        this.setState({ btnNextD: false });
      }

      // Reduce currentStep after a step was executed
      this.setState((state) => { return { currentStep: state.currentStep -= 1 } });
    }
  };

  repeatStep = () => {
    this.clearAllTimers(this.state);
    this.setState(this.step1);

    if (this.state.currentStep === 2) {
      this.step2();
      let interval1 = setInterval(this.step2, 8000);
      this.setState({ intervals: [interval1] });
    }

    if (this.state.currentStep === 3 ||
      this.state.currentStep === 4) {
      this.step3();
      let interval2 = setInterval(this.step3, 14000);
      this.setState({ intervals: [interval2] });
    }
  };

  stepReset = () => {
    return { graphVis: { nodes: [], edges: [] }, description: '' };
  };

  step1 = () => {
    return {
      graphVis: {
        nodes: [
          { id: 1, x: -240, y: 0, color: { background: '#ffff08' }, label: ' u ' },
          { id: 2, x: 0, y: 0, color: { background: '#ffff08' }, label: ' w ' },
          { id: 3, x: 240, y: 0, color: { background: '#ffff08' }, label: ' v ' },
        ],
        edges: [
          { id: 1, from: 1, to: 2, label: 'e1' },
          { id: 2, from: 2, to: 3, label: 'e2' },
        ]
      }
    };
  };

  step1Texts = () => {
    const description = (<p>Příklad grafu <MN>G</MN>, který neobsahuje kružnici.</p>);
    return { description: description };
  };

  step2 = () => {
    let timeout2a = setTimeout(() => { this.setState(this.step2a); }, 1000);
    let timeout2b = setTimeout(() => { this.setState(this.step2b); }, 2000);
    let timeout2c = setTimeout(() => { this.setState(this.step2c); }, 3000);
    let timeout2d = setTimeout(() => { this.setState(this.step2d); }, 4000);
    let timeout2e = setTimeout(() => { this.setState(this.step2e); }, 5000);
    let timeout2f = setTimeout(() => {
      this.setState(this.stepReset);
      this.setState(this.step1);
      this.setState(this.step2Texts);
    }, 7000);

    this.setState({ timeouts: [timeout2a, timeout2b, timeout2c, timeout2d, timeout2e, timeout2f] });
  };

  step2a = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, '#D1C4E9', ' u ');
    return { graphVis: { nodes: newNodes, edges: state.graphVis.edges } };
  };

  step2b = (state) => {
    let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 0, '#D1C4E9', 3, false, ' e1 ', true, false);
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step2c = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 1, '#D1C4E9', ' w ');
    let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 0, '#D1C4E9', 3, false, ' e1 ', false, false);
    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step2d = (state) => {
    let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 1, '#D1C4E9', 3, false, ' e2 ', true, false);
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step2e = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 2, '#D1C4E9', ' v ');
    let newEdges = this.updateEdgeWithArrow(state.graphVis.edges, 1, '#D1C4E9', 3, false, ' e2 ', false, false);
    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step2Texts = () => {
    const description = (<p>Konstrukce sledu <MN>S_1 = (u,e_1,w,e_2,v)</MN></p>);
    return { description: description };
  };

  step3 = () => {
    let timeout3a = setTimeout(() => { this.setState(this.step2a); }, 1000);
    let timeout3b = setTimeout(() => { this.setState(this.step2b); }, 2000);
    let timeout3c = setTimeout(() => { this.setState(this.step2c); }, 3000);
    let timeout3d = setTimeout(() => { this.setState(this.step3d); }, 4000);
    let timeout3e = setTimeout(() => { this.setState(this.step3e); }, 5000);
    let timeout3f = setTimeout(() => { this.setState(this.step3f); }, 6000);
    let timeout3g = setTimeout(() => { this.setState(this.step3g); }, 7000);
    let timeout3h = setTimeout(() => { this.setState(this.step3h); }, 8000);
    let timeout3i = setTimeout(() => { this.setState(this.step3i); }, 9000);
    let timeout3j = setTimeout(() => { this.setState(this.step3j); }, 10000);
    let timeout3k = setTimeout(() => { this.setState(this.step3k); }, 11000);
    let timeout3l = setTimeout(() => {
      this.setState(this.stepReset);
      this.setState(this.step1);
      this.setState(this.step3Texts);
    }, 13000);

    this.setState({
      timeouts: [
        timeout3a, 
        timeout3b, 
        timeout3c, 
        timeout3d, 
        timeout3e, 
        timeout3f, 
        timeout3g,
        timeout3h, 
        timeout3i, 
        timeout3j, 
        timeout3k, 
        timeout3l,
      ]
    });
  };

  step3d = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 1, palette.purple, ' w ');
    return { graphVis: { nodes: newNodes, edges: this.state.graphVis.edges } };
  };

  step3e = (state) => {
    let newEdges = this.updateEdgeWithArrow(
      state.graphVis.edges, 0, palette.purple, 3, false, ' e1 ', false, true
    );
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step3f = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, palette.purple, ' u ');
    let newEdges = this.updateEdgeWithArrow(
      state.graphVis.edges, 0, palette.purple, 3, false, ' e1 ', false, false
    );
    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step3g = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, '#9575CD', ' u ');
    return { graphVis: { nodes: newNodes, edges: state.graphVis.edges } };
  };

  step3h = (state) => {
    let newEdges = this.updateEdgeWithArrow(
      state.graphVis.edges, 0, '#9575CD', 3, false, ' e1 ', true, false
    );
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step3i = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 1, '#9575CD', ' w ');
    let newEdges = this.updateEdgeWithArrow(
      state.graphVis.edges, 0, '#9575CD', 3, false, ' e1 ', false, false
    );
    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step3j = (state) => {
    let newEdges = this.updateEdgeWithArrow(
      state.graphVis.edges, 1, '#9575CD', 3, false, ' e2 ', true, false
    );
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step3k = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 2, '#9575CD', ' v ');
    let newEdges = this.updateEdgeWithArrow(
      state.graphVis.edges, 1, '#9575CD', 3, false, ' e2 ', false, false
    );
    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step3Texts = () => {
    const description = (<p>Konstrukce sledu <MN>S_2 = (u,e_1,w,e_1,u,e_1,w,e_2,v)</MN></p>);
    return { description: description };
  };

  render() {
    const isSketchAllowed = this.state.isSketchAllowed;
    const sketch = isSketchAllowed ? (
      <div className={"over-component"}>
        <SketchField 
          width="650px" 
          height="400px" 
          tool={this.state.sketchTool} 
          lineColor="#1E88E5" 
          lineWidth={3} 
        />
      </div>
    ) : (<div></div>);

    return (
      <div className={"container"}>
        <div className="page-wrapper">
          <PageHeading headingTitle={"Příklad 17 a) (v1)"} breadcrumbsCurrent={"Ostatní příklady"} />
          <div className="page-content">
            <ClaimPanel>
              Dokažte, nebo vyvraťte: <cite><q>Když v grafu <MN>G</MN> existují dva různé <MN>u</MN>-<MN>v</MN> sledy, tak graf <MN>G</MN> obsahuje kružnici.</q></cite>
            </ClaimPanel>
            <Row className="page-row">
              <Col xs={12} md={12} lg={7}>
                <main>
                  {sketch}
                  <div className="GraphBox">
                    <GraphVis
                      graph={this.state.graphVis}
                      options={this.state.options}
                      events={events}
                      style={{ height: "400px" }}
                    />
                  </div>
                  <M.Context input='tex'>
                    <div className="descriptionBox">
                      {this.state.description}
                    </div>
                  </M.Context>
                  <div className="controls-panel">
                    <span className="step-panel">
                      <Button clicked={this.previousStep} disabled={this.state.btnPrevD}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </Button>
                      <StepCounter currentStep={this.state.currentStep} stepSum={4} />
                      <Button clicked={this.nextStep} disabled={this.state.btnNextD}>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Button>
                    </span>
                    <span className="sketch-buttons">
                      <Button 
                        clicked={() => this.setState(() => this.handlerSketchAllowance(this.state))}
                        active={this.state.btnSketchA} 
                        addClass={this.state.btnSketchC}
                      >
                        <FontAwesomeIcon icon={faPaintBrush} />
                      </Button>
                      <Button 
                        clicked={() => this.setState(() => this.handlerSelectedTool(1))}
                        active={this.state.btnPencilA} 
                        disabled={this.state.btnPencilD}
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </Button>
                      <Button 
                        clicked={() => this.setState(() => this.handlerSelectedTool(2))}
                        active={this.state.btnLineA} 
                        disabled={this.state.btnLineD}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                      <Button 
                        clicked={() => this.setState(() => this.handlerSelectedTool(3))}
                        active={this.state.btnCircleA} 
                        disabled={this.state.btnCircleD}
                      >
                        <FontAwesomeIcon icon={faCircle} />
                      </Button>
                    </span>
                    <span className='animation-panel'>
                      <Button clicked={this.repeatStep} disabled={this.state.btnRepeatD}>
                        <FontAwesomeIcon icon={faRedoAlt} />
                      </Button>
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
                          <p>Dané tvrzení neplatí, protože existuje kontra-příklad.</p>
                        </div>
                        <div className={2 === this.state.currentStep ? 'proof-active' : ''}>
                          <p>Existují dva různé <MN>u</MN>-<MN>v</MN> sledy:</p>
                          <p>
                            Příkladem prvního budiž sled <MN>S_1 = (u,e_1,w,e_2,v)</MN>.
                          </p>
                        </div>
                        <div className={3 === this.state.currentStep ? 'proof-active' : ''}>
                          <p>
                            Příkladem druhého může být sled <MN>S_2 = (u,e_1,w,e_1,u,e_1,w,e_2,v)</MN>.
                          </p>
                        </div>
                        <div className={'borderless' +
                          (4 === this.state.currentStep ? ' proof-active' : '')}>
                          <p>Přitom graf <MN>G</MN> neobsahuje kružnici.</p>
                          <p className="text-center">
                            <MN>\dagger</MN> Tím je vyvráceno stanovené tvrzení.
                          </p>
                        </div>
                      </div>
                    </M.Context>
                  </div>
                </aside>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Exercise17a;
