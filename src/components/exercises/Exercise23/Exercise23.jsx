import React from 'react';
import { initialExerciseState, events } from '../../../functionality/GlobalExerciseConstants';
import {
  headingTitle,
  breadcrumbsCurrent,
  stepSum,
  definitionPanel,
  getProofBox,
} from './constants';
import {
  updateNode,
  updateEdge,
  updateEdgeWithArrow,
  clearAllTimers,
  handlerSketchAllowance,
  handlerSelectedTool,
} from '../../../functionality/GraphFunctions';
import ExerciseWrapper from '../../../components/UI/ExerciseWrapper/ExerciseWrapper';
import MN from '../../../components/MathJax/MathJaxNode';

const cameraPosition1 = {
  position: { x: 0, y: 15 }, 
  scale: 0.65,
  animation: { duration: 1500, easingFunction: "easeInOutQuad" },
};

const cameraPosition2 = {
  position: { x: 0, y: -130 }, 
  scale: 1.15,
  animation: { duration: 1500, easingFunction: "easeInOutQuad" },
};

class Exercise23 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialExerciseState;
    const network = null;
    this.initNetworkInstance = this.initNetworkInstance.bind(this);
    this.updateNode = updateNode.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
    this.clearAllTimers = clearAllTimers.bind(this);
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

  nextStep = () => {
    if (this.state.currentStep < 10) {
      if (this.state.currentStep === 0) {
        this.setState({ btnPrevD: false });
        this.setState(this.step1);
        this.setState(this.step1Texts);
        this.network.moveTo(cameraPosition1);
      }

      if (this.state.currentStep === 1) {
        this.setState(this.step2preset);
        this.setState(this.step2Texts);
        this.network.moveTo(cameraPosition2);
      }

      // Increase currentStep after a step was executed
      this.setState((state) => { return { currentStep: state.currentStep += 1 } });
    }
  };

  previousStep = () => {
    if (this.state.currentStep > 0) {
      if (this.state.currentStep === 1) {
        this.setState({ btnPrevD: true });
        this.setState(this.stepReset);
      }

      if (this.state.currentStep === 2) {
        this.setState(this.stepReset);
        this.setState(this.step1);
        this.setState(this.step1Texts);
        this.network.moveTo(cameraPosition1);
      }

      // Reduce currentStep after a step was executed
      this.setState((state) => { return { currentStep: state.currentStep -= 1 } });
    }
  };

  repeatStep = () => { };

  stepReset = () => {
    return {
      graphVis: { nodes: [], edges: [] },
      description: '',
      repeatBoxHidden: true,
      repeatBoxContent: '',
    };
  };

  step1 = () => {
    return {
      graphVis: {
        nodes: [
          { id: 1, x: -240, y: -140, color: { background: '#ffff08' }, label: '   ' },
          { id: 2, x: -140, y: -260, color: { background: '#ffff08' }, label: '   ' },
          { id: 3, x: -140, y: -20, color: { background: '#ffff08' }, label: '   ' },
          { id: 4, x: 0, y: -200, color: { background: '#ffff08' }, label: '   ' },
          { id: 5, x: 0, y: -80, color: { background: '#ffff08' }, label: '   ' },
          { id: 6, x: 140, y: -260, color: { background: '#ffff08' }, label: '   ' },
          { id: 7, x: 140, y: -20, color: { background: '#ffff08' }, label: '   ' },
          { id: 8, x: 240, y: -140, color: { background: '#ffff08' }, label: '   ' },
          { id: 9, x: -240, y: 195, color: { background: '#ffff08' }, label: '   ' },
          { id: 10, x: -130, y: 100, color: { background: '#ffff08' }, label: '   ' },
          { id: 11, x: -130, y: 290, color: { background: '#ffff08' }, label: '   ' },
          { id: 12, x: 0, y: 195, color: { background: '#ffff08' }, label: '   ' },
          { id: 13, x: 130, y: 100, color: { background: '#ffff08' }, label: '   ' },
          { id: 14, x: 130, y: 290, color: { background: '#ffff08' }, label: '   ' },
          { id: 15, x: 240, y: 195, color: { background: '#ffff08' }, label: '   ' },
        ],
        edges: [
          { id: 1, from: 1, to: 2 },
          { id: 2, from: 1, to: 3 },
          { id: 3, from: 2, to: 4 },
          { id: 4, from: 3, to: 5 },
          { id: 5, from: 4, to: 5 },
          { id: 6, from: 4, to: 6 },
          { id: 7, from: 5, to: 7 },
          { id: 8, from: 6, to: 8 },
          { id: 9, from: 7, to: 8 },
          { id: 10, from: 9, to: 10 },
          { id: 11, from: 9, to: 11 },
          { id: 12, from: 9, to: 12 },
          { id: 13, from: 10, to: 13 },
          { id: 14, from: 11, to: 14 },
          { id: 15, from: 12, to: 15 },
          { id: 16, from: 13, to: 15 },
          { id: 17, from: 14, to: 15 },
        ]
      }
    };
  };

  step1Texts = () => {
    const description = (<p>Příklad dvou grafů obsahujících kružnice.</p>);
    const repeatBox = (
      <div>
        <p>
          KRUŽNICE (Definice 1.8)
          <br />Kružnice délky <MN>k, k \geq 3</MN>, v grafu <MN>G</MN> je posloupnost <MN>{'(v_{0}, e_{1}, v_{1},...,e_{k}, v_{0})'}</MN>, kde <MN>{'e_{i}=\\{v_{i-1}, v_{i}\\}'}</MN>, <MN>i=1,...,k-1</MN>, <MN>{'e_{k}=\\{v_{k-1}, v_{0}\\}'}</MN> a pro <MN>i \neq j</MN> platí <MN>{'v_{i} \\neq v_{j}'}</MN>.
        </p>
      </div>
    );

    return { description: description, repeatBoxHidden: false, repeatBoxContent: repeatBox };
  };

  step2preset = (state) => {
    let newEdges = this.updateEdge(state.graphVis.edges, 4, '#000000', 1, false, 'e');
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step2Texts = () => {
    const description = (
      <p>
        Příklad grafu <MN>G</MN>, kde kružnice <MN>C_1</MN> a <MN>C_2</MN> sdílejí hranu <MN>e</MN>.
      </p>
    );

    return { description: description, repeatBoxHidden: true };
  };

  step3Texts = () => {
    const description = (
      <p>
        Poté v grafu <MN>G</MN> existuje také kružnice <MN>C_3</MN> neobsahující hranu <MN>e</MN>.
      </p>
    );

    return { description: description };
  };

  render() {
    return (
      <ExerciseWrapper
        {...this.state}
        events={events}
        initNetworkInstance={this.initNetworkInstance}
        headingTitle={headingTitle}
        breadcrumbsCurrent={breadcrumbsCurrent}
        definitionPanel={definitionPanel}
        proofBox={getProofBox(this.state.currentStep)}
        stepSum={stepSum}
        previousStep={this.previousStep}
        nextStep={this.nextStep}
        repeatStep={this.repeatStep}
        handleSketchAllowance={() => this.setState(() => this.handlerSketchAllowance(this.state))}
        handleSketchPencil={() => this.setState(() => this.handlerSelectedTool(1))}
        handleSketchLine={() => this.setState(() => this.handlerSelectedTool(2))}
        handleSketchCircle={() => this.setState(() => this.handlerSelectedTool(3))}
      />
    );
  }
}

export default Exercise23;
