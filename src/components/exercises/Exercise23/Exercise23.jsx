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

const cameraPosition3 = {
  position: { x: 0, y: 200 }, 
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
        this.step2Animation();
        let interval1 = setInterval(this.step2Animation, 6000);
        this.setState({ intervals: [interval1] });
        this.setState(this.step2Texts);
        this.network.moveTo(cameraPosition2);
      }

      if (this.state.currentStep === 2) {
        this.clearAllTimers(this.state);
        this.setState(this.step1);
        this.setState(this.step3);
        this.setState(this.step3Texts);
      }

      if (this.state.currentStep === 3) {
        this.setState(this.step4);
        this.setState(this.step4Texts);
        this.network.moveTo(cameraPosition3);
      }

      if (this.state.currentStep === 4) {
        this.setState(this.step5);
        this.setState(this.step5Texts);
      }

      if (this.state.currentStep === 5) {
        this.setState(this.step6);
        this.setState(this.step6Texts);
      }

      if (this.state.currentStep === 6) {
        this.setState(this.step1);
        this.setState(this.step7);
        this.setState(this.step7Texts);
      }

      if (this.state.currentStep === 7) {
        this.setState(this.step8);
        this.setState(this.step8Texts);
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
        this.clearAllTimers(this.state);
        this.setState(this.step1);
        this.setState(this.step1Texts);
        this.network.moveTo(cameraPosition1);
      }

      if (this.state.currentStep === 3) {
        this.setState(this.step1);
        this.step2Animation();
        let interval1 = setInterval(this.step2Animation, 6000);
        this.setState({ intervals: [interval1] });
        this.setState(this.step2Texts);
      }

      if (this.state.currentStep === 4) {
        this.clearAllTimers(this.state);
        this.setState(this.step1);
        this.setState(this.step3);
        this.setState(this.step3Texts);
        this.network.moveTo(cameraPosition2);
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
          { id: 4, x: 0, y: -200, color: { background: '#ffff08' }, label: ' u ' },
          { id: 5, x: 0, y: -80, color: { background: '#ffff08' }, label: ' v ' },
          { id: 6, x: 140, y: -260, color: { background: '#ffff08' }, label: '   ' },
          { id: 7, x: 140, y: -20, color: { background: '#ffff08' }, label: '   ' },
          { id: 8, x: 240, y: -140, color: { background: '#ffff08' }, label: '   ' },
          { id: 9, x: -240, y: 195, color: { background: '#ffff08' }, label: ' u ' },
          { id: 10, x: -130, y: 100, color: { background: '#ffff08' }, label: '   ' },
          { id: 11, x: -130, y: 290, color: { background: '#ffff08' }, label: '   ' },
          { id: 12, x: 0, y: 195, color: { background: '#ffff08' }, label: ' v ' },
          { id: 13, x: 130, y: 100, color: { background: '#ffff08' }, label: '   ' },
          { id: 14, x: 130, y: 290, color: { background: '#ffff08' }, label: '   ' },
          { id: 15, x: 240, y: 195, color: { background: '#ffff08' }, label: '   ' },
        ],
        edges: [
          { id: 1, from: 1, to: 2 },
          { id: 2, from: 1, to: 3 },
          { id: 3, from: 2, to: 4 },
          { id: 4, from: 3, to: 5 },
          { id: 5, from: 4, to: 5, label: 'e' },
          { id: 6, from: 4, to: 6 },
          { id: 7, from: 5, to: 7 },
          { id: 8, from: 6, to: 8 },
          { id: 9, from: 7, to: 8 },
          { id: 10, from: 9, to: 10 },
          { id: 11, from: 9, to: 11 },
          { id: 12, from: 9, to: 12, label: 'e' },
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
    return { description: description };
  };

  step2Animation = () => {
    let timeout1 = setTimeout(() => { this.setState(this.step2a); }, 1000);
    let timeout2 = setTimeout(() => { this.setState(this.step1); }, 2500);
    let timeout3 = setTimeout(() => { this.setState(this.step2c); }, 3000);
    let timeout4 = setTimeout(() => { this.setState(this.step1); }, 4500);

    this.setState({ timeouts: [timeout1, timeout2, timeout3, timeout4] });
  };

  step2a = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, '#EC407A', '   ');
    newNodes = this.updateNode(newNodes, 1, '#EC407A', '   ');
    newNodes = this.updateNode(newNodes, 2, '#EC407A', '   ');
    newNodes = this.updateNode(newNodes, 3, '#EC407A', ' u ');
    newNodes = this.updateNode(newNodes, 4, '#EC407A', ' v ');

    let newEdges = this.updateEdge(state.graphVis.edges, 0, '#EC407A', 3, false, '');
    newEdges = this.updateEdge(newEdges, 1, '#EC407A', 3, false, '');
    newEdges = this.updateEdge(newEdges, 2, '#EC407A', 3, false, '');
    newEdges = this.updateEdge(newEdges, 3, '#EC407A', 3, false, '');
    newEdges = this.updateEdge(newEdges, 4, '#EC407A', 3, false, 'e');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step2c = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 3, '#4DB6AC', ' u ');
    newNodes = this.updateNode(newNodes, 4, '#4DB6AC', ' v ');
    newNodes = this.updateNode(newNodes, 5, '#4DB6AC', '   ');
    newNodes = this.updateNode(newNodes, 6, '#4DB6AC', '   ');
    newNodes = this.updateNode(newNodes, 7, '#4DB6AC', '   ');

    let newEdges = this.updateEdge(state.graphVis.edges, 4, '#4DB6AC', 3, false, 'e');
    newEdges = this.updateEdge(newEdges, 5, '#4DB6AC', 3, false, '');
    newEdges = this.updateEdge(newEdges, 6, '#4DB6AC', 3, false, '');
    newEdges = this.updateEdge(newEdges, 7, '#4DB6AC', 3, false, '');
    newEdges = this.updateEdge(newEdges, 8, '#4DB6AC', 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step2Texts = () => {
    const description = (
      <p>
        Příklad grafu <MN>G</MN>, kde kružnice <MN>C_1</MN> a <MN>C_2</MN> sdílejí hranu <MN>e</MN>.
      </p>
    );

    return { description: description, repeatBoxHidden: true };
  };

  step3 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, '#FF7043', '   ');
    newNodes = this.updateNode(newNodes, 1, '#FF7043', '   ');
    newNodes = this.updateNode(newNodes, 2, '#FF7043', '   ');
    newNodes = this.updateNode(newNodes, 3, '#FF7043', ' u ');
    newNodes = this.updateNode(newNodes, 4, '#FF7043', ' v ');
    newNodes = this.updateNode(newNodes, 5, '#FF7043', '   ');
    newNodes = this.updateNode(newNodes, 6, '#FF7043', '   ');
    newNodes = this.updateNode(newNodes, 7, '#FF7043', '   ');

    let newEdges = this.updateEdge(state.graphVis.edges, 0, '#FF7043', 3, false, '');
    newEdges = this.updateEdge(newEdges, 1, '#FF7043', 3, false, '');
    newEdges = this.updateEdge(newEdges, 2, '#FF7043', 3, false, '');
    newEdges = this.updateEdge(newEdges, 3, '#FF7043', 3, false, '');
    newEdges = this.updateEdge(newEdges, 5, '#FF7043', 3, false, '');
    newEdges = this.updateEdge(newEdges, 6, '#FF7043', 3, false, '');
    newEdges = this.updateEdge(newEdges, 7, '#FF7043', 3, false, '');
    newEdges = this.updateEdge(newEdges, 8, '#FF7043', 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step3Texts = () => {
    const description = (
      <p>
        Poté v grafu <MN>G</MN> existuje také kružnice <MN>C_3</MN> neobsahující hranu <MN>e</MN>.
      </p>
    );
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

  step4 = (state) => {
    let newEdges = this.updateEdge(state.graphVis.edges, 14, '#000000', 1, false, 'e1');
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step4Texts = () => {
    const description = (
      <p>
        Příklad grafu <MN>G</MN>, kde kružnice <MN>C_1</MN> a <MN>C_2</MN> sdílejí hranu <MN>e</MN> a navíc další hranu <MN>e_1</MN>.
      </p>
    );
    return { description: description };
  };

  step5 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 8, '#EC407A', ' u ');
    newNodes = this.updateNode(newNodes, 9, '#EC407A', '   ');
    newNodes = this.updateNode(newNodes, 11, '#EC407A', ' v ');
    newNodes = this.updateNode(newNodes, 12, '#EC407A', '   ');
    newNodes = this.updateNode(newNodes, 14, '#EC407A', '   ');

    let newEdges = this.updateEdge(state.graphVis.edges, 9, '#EC407A', 3, false, '');
    newEdges = this.updateEdge(newEdges, 11, '#EC407A', 3, false, '');
    newEdges = this.updateEdge(newEdges, 12, '#EC407A', 3, false, '');
    newEdges = this.updateEdge(newEdges, 14, '#EC407A', 3, false, '');
    newEdges = this.updateEdge(newEdges, 15, '#EC407A', 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step5Texts = () => {
    const description = (<p>Vyznačení kružnice <MN>C_1</MN>.</p>);
    return { description: description };
  };

  step6 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 8, '#B388FF', ' u ');
    newNodes = this.updateNode(newNodes, 9, '#B388FF', '   ');
    newNodes = this.updateNode(newNodes, 11, '#B388FF', ' v ');
    newNodes = this.updateNode(newNodes, 12, '#B388FF', '   ');
    newNodes = this.updateNode(newNodes, 14, '#B388FF', '   ');

    let newEdges = this.updateEdge(state.graphVis.edges, 9, '#B388FF', 3, false, '');
    newEdges = this.updateEdge(newEdges, 11, '#000000', 1, false, '');
    newEdges = this.updateEdge(newEdges, 12, '#B388FF', 3, false, '');
    newEdges = this.updateEdge(newEdges, 14, '#B388FF', 3, false, '');
    newEdges = this.updateEdge(newEdges, 15, '#B388FF', 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step6Texts = () => {
    const description = (
      <p>
        Vyznačení cesty <MN>P_1=C_1 - e</MN>, tedy přes kružnici <MN>C_1</MN> bez hrany <MN>e</MN>.
      </p>
    );
    return { description: description };
  };

  step7 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 8, '#EC407A', ' u ');
    newNodes = this.updateNode(newNodes, 10, '#EC407A', '   ');
    newNodes = this.updateNode(newNodes, 11, '#EC407A', ' v ');
    newNodes = this.updateNode(newNodes, 13, '#EC407A', '   ');
    newNodes = this.updateNode(newNodes, 14, '#EC407A', '   ');

    let newEdges = this.updateEdge(state.graphVis.edges, 10, '#EC407A', 3, false, '');
    newEdges = this.updateEdge(newEdges, 11, '#EC407A', 3, false, '');
    newEdges = this.updateEdge(newEdges, 13, '#EC407A', 3, false, '');
    newEdges = this.updateEdge(newEdges, 14, '#EC407A', 3, false, '');
    newEdges = this.updateEdge(newEdges, 16, '#EC407A', 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step7Texts = () => {
    const description = (<p>Vyznačení kružnice <MN>C_2</MN>.</p>);
    return { description: description };
  };

  step8 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 8, '#B388FF', ' u ');
    newNodes = this.updateNode(newNodes, 10, '#B388FF', '   ');
    newNodes = this.updateNode(newNodes, 11, '#B388FF', ' v ');
    newNodes = this.updateNode(newNodes, 13, '#B388FF', '   ');
    newNodes = this.updateNode(newNodes, 14, '#B388FF', '   ');

    let newEdges = this.updateEdge(state.graphVis.edges, 10, '#B388FF', 3, false, '');
    newEdges = this.updateEdge(newEdges, 11, '#000000', 1, false, '');
    newEdges = this.updateEdge(newEdges, 13, '#B388FF', 3, false, '');
    newEdges = this.updateEdge(newEdges, 14, '#B388FF', 3, false, '');
    newEdges = this.updateEdge(newEdges, 16, '#B388FF', 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step8Texts = () => {
    const description = (
      <p>
        Vyznačení cesty <MN>P_2=C_2 - e</MN>, tedy přes kružnici <MN>C_2</MN> bez hrany <MN>e</MN>.
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
