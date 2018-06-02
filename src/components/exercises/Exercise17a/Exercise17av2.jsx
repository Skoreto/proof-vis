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
  updateEdgeSmooth, 
  addObjectArray, 
  clearAllTimers,
  handlerSketchAllowance, 
  handlerSelectedTool,
} from '../../../functionality/GraphFunctions';
import ExerciseWrapper from '../../../components/UI/ExerciseWrapper/ExerciseWrapper';
import DefinitionPanel from '../../../components/UI/DefinitionPanel/DefinitionPanel';
import MN from '../../../components/MathJax/MathJaxNode';

class Exercise17av2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialExerciseState;
    this.updateNode = updateNode.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
    this.updateEdgeSmooth = updateEdgeSmooth.bind(this);
    this.addObjectArray = addObjectArray.bind(this);
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
        let interval2 = setInterval(this.step3, 17000);
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
      let interval2 = setInterval(this.step3, 17000);
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
    const description = (
      <p>
        Konstrukce sledu <MN>S_1 = (</MN><MN classes='text-purple'>u</MN><MN>,e_1,w,e_2,v)</MN>
      </p>
    );
    return { graphVis: { nodes: newNodes, edges: state.graphVis.edges }, description: description };
  };

  step2b = (state) => {
    let newEdges = this.updateEdgeWithArrow(
      state.graphVis.edges, 0, '#D1C4E9', 3, false, ' e1 ', true, false
    );
    const description = (
      <p>
        Konstrukce sledu <MN>S_1 = (</MN><MN classes='text-purple'>u,e_1</MN><MN>,w,e_2,v)</MN>
      </p>
    );
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges }, description: description };
  };

  step2c = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 1, '#D1C4E9', ' w ');
    let newEdges = this.updateEdgeWithArrow(
      state.graphVis.edges, 0, '#D1C4E9', 3, false, ' e1 ', false, false
    );
    const description = (
      <p>
        Konstrukce sledu <MN>S_1 = (</MN><MN classes='text-purple'>u,e_1,w</MN><MN>,e_2,v)</MN>
      </p>
    );
    return { graphVis: { nodes: newNodes, edges: newEdges }, description: description };
  };

  step2d = (state) => {
    let newEdges = this.updateEdgeWithArrow(
      state.graphVis.edges, 1, '#D1C4E9', 3, false, ' e2 ', true, false
    );
    const description = (
      <p>
        Konstrukce sledu <MN>S_1 = (</MN><MN classes='text-purple'>u,e_1,w,e_2</MN><MN>,v)</MN>
      </p>
    );
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges }, description: description };
  };

  step2e = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 2, '#D1C4E9', ' v ');
    let newEdges = this.updateEdgeWithArrow(
      state.graphVis.edges, 1, '#D1C4E9', 3, false, ' e2 ', false, false
    );
    const description = (
      <p>
        Konstrukce sledu <MN>S_1 = (</MN><MN classes='text-purple'>u,e_1,w,e_2,v</MN><MN>)</MN>
      </p>
    );
    return { graphVis: { nodes: newNodes, edges: newEdges }, description: description };
  };

  step2Texts = () => {
    const description = (<p>Konstrukce sledu <MN>S_1 = (u,e_1,w,e_2,v)</MN></p>);
    return { description: description };
  };

  step3 = () => {
    let timeout3a = setTimeout(() => { this.setState(this.step3a); }, 1000);
    let timeout3b = setTimeout(() => { this.setState(this.step3b); }, 2500);
    let timeout3c = setTimeout(() => { this.setState(this.step3c); }, 4000);
    let timeout3e = setTimeout(() => { this.setState(this.step3e); }, 5500);
    let timeout3f = setTimeout(() => { this.setState(this.step3f); }, 7000);
    let timeout3h = setTimeout(() => { this.setState(this.step3h); }, 8500);
    let timeout3i = setTimeout(() => { this.setState(this.step3i); }, 10000);
    let timeout3j = setTimeout(() => { this.setState(this.step3j); }, 11500);
    let timeout3k = setTimeout(() => { this.setState(this.step3k); }, 13000);
    let timeout3l = setTimeout(() => {
      this.setState(this.stepReset);
      this.setState(this.step1);
      this.setState(this.step3Texts);
    }, 16000);

    this.setState({
      timeouts: [
        timeout3a, 
        timeout3b, 
        timeout3c, 
        timeout3e, 
        timeout3f, 
        timeout3h, 
        timeout3i,
        timeout3j, 
        timeout3k, 
        timeout3l,
      ]
    });
  };

  step3a = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, '#D1C4E9', ' u ');
    return { graphVis: { nodes: newNodes, edges: state.graphVis.edges } };
  };

  step3b = (state) => {
    let newEdges = this.updateEdgeWithArrow(
      state.graphVis.edges, 0, '#D1C4E9', 3, false, ' e1 ', true, false
    );
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step3c = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 1, '#D1C4E9', ' w ');
    return { graphVis: { nodes: newNodes, edges: this.state.graphVis.edges } };
  };

  step3e = (state) => {
    let newEdges = this.addObjectArray(state.graphVis.edges, [
      {
        id: 3, 
        from: 2, 
        to: 1, 
        color: { color: '#D1C4E9', hover: '#D1C4E9' }, 
        width: 3,
        arrows: { to: { enabled: true } }, 
        smooth: { enabled: true, type: "curvedCW", roundness: 0.3 },
      }
    ]);
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step3f = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, '#B39DDB', ' u ');
    return { graphVis: { nodes: newNodes, edges: this.state.graphVis.edges } };
  };

  step3h = (state) => {
    let newEdges = this.addObjectArray(state.graphVis.edges, [
      {
        id: 4, 
        from: 1, 
        to: 2, 
        color: { color: '#D1C4E9', hover: '#D1C4E9' }, 
        width: 3,
        arrows: { to: { enabled: true } }, 
        smooth: { enabled: true, type: "curvedCW", roundness: 0.3 },
      }
    ]);
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step3i = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 1, '#B39DDB', ' w ');
    return { graphVis: { nodes: newNodes, edges: state.graphVis.edges } };
  }; 

  step3j = (state) => {
    let newEdges = this.updateEdgeWithArrow(
      state.graphVis.edges, 1, '#D1C4E9', 3, false, ' e2 ', true, false
    );
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step3k = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 2, '#D1C4E9', ' v ');
    return { graphVis: { nodes: newNodes, edges: state.graphVis.edges } };
  };

  step3Texts = () => {
    const description = (<p>Konstrukce sledu <MN>S_2 = (u,e_1,w,e_1,u,e_1,w,e_2,v)</MN></p>);
    return { description: description };
  };

  render() {
    return (
      <ExerciseWrapper 
        {...this.state}
        events={events}
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

export default Exercise17av2;
