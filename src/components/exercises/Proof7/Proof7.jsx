import React from 'react';
import {
  initialExerciseState,
  events,
  palette,
} from '../../../functionality/GlobalExerciseConstants';
import { constants } from './constants';
import {
  updateNode,
  updateEdge,
  updateEdgeWithArrow,
  updateEdgeSmooth,
  addObjectArray,
  clearAllTimers,
  updateCurrentStep,
  handlerSketchAllowance,
  handlerSelectedTool,
  handlerDrawingDialog,
} from '../../../functionality/GraphFunctions';
import ExerciseWrapper from '../../../UI/ExerciseWrapper/ExerciseWrapper';
import MN from '../../../UI/MathJaxNode/MathJaxNode';

class Proof7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialExerciseState;
    this.updateNode = updateNode.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
    this.updateEdgeSmooth = updateEdgeSmooth.bind(this);
    this.addObjectArray = addObjectArray.bind(this);
    this.clearAllTimers = clearAllTimers.bind(this);
    this.updateCurrentStep = updateCurrentStep.bind(this);
    this.handlerSketchAllowance = handlerSketchAllowance.bind(this);
    this.handlerSelectedTool = handlerSelectedTool.bind(this);
    this.handlerDrawingDialog = handlerDrawingDialog.bind(this);
  }

  nextStep = () => {
    if (this.state.currentStep < constants.stepSum) {
      switch (this.state.currentStep) {
        case 0: {
          this.setState({ btnPrevD: false });
          this.setState(this.step1);
          break;
        }
        case 1: {
          this.setState({ btnRepeatD: false });
          this.step2();
          let interval1 = setInterval(this.step2, 8000);
          this.setState({ intervals: [interval1] });
          this.setState(this.step2Texts);
          break;
        }
        case 2: {
          this.clearAllTimers(this.state);
          this.setState(this.stepReset);
          this.setState(this.step1);
          this.step3();
          let interval2 = setInterval(this.step3, 17000);
          this.setState({ intervals: [interval2] });
          break;
        }
        case 3: {
          this.setState({ btnNextD: true });
          break;
        }
        default: {
          break;
        }
      }

      this.updateCurrentStep(this.state.currentStep, 1);
    }
  };

  previousStep = () => {
    if (this.state.currentStep > 0) {
      switch (this.state.currentStep) {
        case 1: {
          this.setState({ btnPrevD: true });
          this.clearAllTimers(this.state);
          this.setState(this.stepReset);
          break;
        }
        case 2: {
          this.setState({ btnRepeatD: true });
          this.clearAllTimers(this.state);
          this.setState(this.stepReset);
          this.setState(this.step1);
          break;
        }
        case 3: {
          this.setState({ btnNextD: false });
          this.setState({ btnRepeatD: false });
          this.clearAllTimers(this.state);
          this.setState(this.stepReset);
          this.setState(this.step1);
          this.step2();
          let interval1 = setInterval(this.step2, 8000);
          this.setState({ intervals: [interval1] });
          this.setState(this.step2Texts);
          break;
        }
        case 4: {
          this.setState({ btnNextD: false });
          break;
        }
        default: {
          break;
        }
      }

      this.updateCurrentStep(this.state.currentStep, -1);
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
    return { nodes: [], edges: [] };
  };

  step1 = () => {
    return {
      nodes: [
        { id: 1, x: -240, y: 0, color: { background: palette.yellow }, label: ' u ' },
        { id: 2, x: 0, y: 0, color: { background: palette.yellow }, label: ' w ' },
        { id: 3, x: 240, y: 0, color: { background: palette.yellow }, label: ' v ' },
      ],
      edges: [
        { id: 1, from: 1, to: 2, label: 'e1' },
        { id: 2, from: 2, to: 3, label: 'e2' },
      ],
    };
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
    let newNodes = this.updateNode(state.nodes, 0, palette.lightpurple, ' u ');
    const description = (
      <p>
        Konstrukce sledu <MN>S_1 = (</MN><MN classes='text-purple'>u</MN><MN>,e_1,w,e_2,v)</MN>
      </p>
    );
    return { nodes: newNodes };
  };

  step2b = (state) => {
    let newEdges = this.updateEdgeWithArrow(
      state.edges, 0, palette.lightpurple, 3, false, ' e1 ', true, false
    );
    const description = (
      <p>
        Konstrukce sledu <MN>S_1 = (</MN><MN classes='text-purple'>u,e_1</MN><MN>,w,e_2,v)</MN>
      </p>
    );
    return { edges: newEdges, description: description };
  };

  step2c = (state) => {
    let newNodes = this.updateNode(state.nodes, 1, palette.lightpurple, ' w ');
    let newEdges = this.updateEdgeWithArrow(
      state.edges, 0, palette.lightpurple, 3, false, ' e1 ', false, false
    );
    const description = (
      <p>
        Konstrukce sledu <MN>S_1 = (</MN><MN classes='text-purple'>u,e_1,w</MN><MN>,e_2,v)</MN>
      </p>
    );
    return { nodes: newNodes, edges: newEdges, description: description };
  };

  step2d = (state) => {
    let newEdges = this.updateEdgeWithArrow(
      state.edges, 1, palette.lightpurple, 3, false, ' e2 ', true, false
    );
    const description = (
      <p>
        Konstrukce sledu <MN>S_1 = (</MN><MN classes='text-purple'>u,e_1,w,e_2</MN><MN>,v)</MN>
      </p>
    );
    return { edges: newEdges, description: description };
  };

  step2e = (state) => {
    let newNodes = this.updateNode(state.nodes, 2, palette.lightpurple, ' v ');
    let newEdges = this.updateEdgeWithArrow(
      state.edges, 1, palette.lightpurple, 3, false, ' e2 ', false, false
    );
    const description = (
      <p>
        Konstrukce sledu <MN>S_1 = (</MN><MN classes='text-purple'>u,e_1,w,e_2,v</MN><MN>)</MN>
      </p>
    );
    return { nodes: newNodes, edges: newEdges, description: description };
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
    let newNodes = this.updateNode(state.nodes, 0, palette.lightpurple, ' u ');
    return { nodes: newNodes };
  };

  step3b = (state) => {
    let newEdges = this.updateEdgeWithArrow(
      state.edges, 0, palette.lightpurple, 3, false, ' e1 ', true, false
    );
    return { edges: newEdges };
  };

  step3c = (state) => {
    let newNodes = this.updateNode(state.nodes, 1, palette.lightpurple, ' w ');
    return { nodes: newNodes };
  };

  step3e = (state) => {
    let newEdges = this.addObjectArray(state.edges, [
      {
        id: 3, 
        from: 2, 
        to: 1, 
        color: { color: palette.lightpurple, hover: palette.lightpurple }, 
        width: 3,
        arrows: { to: { enabled: true } }, 
        smooth: { enabled: true, type: "curvedCW", roundness: 0.3 },
      }
    ]);
    return { edges: newEdges };
  };

  step3f = (state) => {
    let newNodes = this.updateNode(state.nodes, 0, palette.purple, ' u ');
    return { nodes: newNodes };
  };

  step3h = (state) => {
    let newEdges = this.addObjectArray(state.edges, [
      {
        id: 4, 
        from: 1, 
        to: 2, 
        color: { color: palette.lightpurple, hover: palette.lightpurple }, 
        width: 3,
        arrows: { to: { enabled: true } }, 
        smooth: { enabled: true, type: "curvedCW", roundness: 0.3 },
      }
    ]);
    return { edges: newEdges };
  };

  step3i = (state) => {
    let newNodes = this.updateNode(state.nodes, 1, palette.purple, ' w ');
    return { nodes: newNodes };
  }; 

  step3j = (state) => {
    let newEdges = this.updateEdgeWithArrow(
      state.edges, 1, palette.lightpurple, 3, false, ' e2 ', true, false
    );
    return { edges: newEdges };
  };

  step3k = (state) => {
    let newNodes = this.updateNode(state.nodes, 2, palette.lightpurple, ' v ');
    return { nodes: newNodes };
  };

  render() {
    return (
      <ExerciseWrapper 
        {...this.state}
        events={events}
        constants={constants}
        previousStep={this.previousStep}
        nextStep={this.nextStep}
        repeatStep={this.repeatStep}
        handleSketchAllowance={() => this.setState(() => this.handlerSketchAllowance(this.state))}
        handleSketchPencil={() => this.setState(() => this.handlerSelectedTool(1))}
        handleSketchLine={() => this.setState(() => this.handlerSelectedTool(2))}
        handleSketchCircle={() => this.setState(() => this.handlerSelectedTool(3))}
        handleDrawingDialog={
          () => this.setState(() => this.handlerDrawingDialog(this.state.isDrawingDialogOpen))
        }
      />
    );
  }
}

export default Proof7;
