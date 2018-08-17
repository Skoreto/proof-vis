import React from 'react';
import { initialProofState, palette } from '../../../functionality/globalProofConstants';
import { constants } from './constants';
import {
  updateNode,
  updateEdge,
  updateEdgeWithArrow,
} from '../../../functionality/graphFunctions';
import {
  clearAllTimers,
  updateCurrentStep,
  handlerSketchAllowance,
  handlerSelectedTool,
  handlerDrawingDialog,
} from '../../../functionality/proofFunctions';
import ProofWrapper from '../../../UI/ProofWrapper/ProofWrapper';

class Proof3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialProofState;
    this.updateNode = updateNode.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
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
          this.setState(this.step2);
          break;
        }
        case 2: {
          this.step3();
          let interval1 = setInterval(this.step3, 3000);
          this.setState({ intervals: [interval1] });
          break;
        }
        case 3: {
          this.clearAllTimers(this.state);
          this.step4();
          let interval2 = setInterval(this.step4, 3000);
          this.setState({ intervals: [interval2] });
          break;
        }
        case 4: {
          this.setState({ btnNextD: true });
          this.clearAllTimers(this.state);
          this.setState(this.step4a);
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
          this.setState(this.stepReset);
          break;
        }
        case 2: {
          this.setState(this.stepReset);
          this.setState(this.step1);
          break;
        }
        case 3: {
          this.clearAllTimers(this.state);
          this.setState(this.stepReset);
          this.setState(this.step1);
          this.setState(this.step2);
          break;
        }
        case 4: {
          this.clearAllTimers(this.state);
          this.setState(this.stepReset);
          this.setState(this.step1);
          this.setState(this.step2);
          this.step3();
          let interval1 = setInterval(this.step3, 3000);
          this.setState({ intervals: [interval1] });
          break;
        }
        case 5: {
          this.setState({ btnNextD: false });
          this.clearAllTimers(this.state);
          this.step4();
          let interval2 = setInterval(this.step4, 3000);
          this.setState({ intervals: [interval2] });
          break;
        }
        default: {
          break;
        }
      }

      this.updateCurrentStep(this.state.currentStep, -1);
    }
  };

  repeatStep = () => { };

  stepReset = () => {
    return { nodes: [], edges: [] };
  };

  step1 = () => {
    return {
      nodes: [
        { id: 1, x: 0, y: -150, color: { background: palette.yellow }, label: '   ' },
        { id: 2, x: -70, y: -50, color: { background: palette.yellow }, label: '   ' },
        { id: 3, x: -140, y: 50, color: { background: palette.yellow }, label: '   ' },
        { id: 4, x: 0, y: 50, color: { background: palette.yellow }, label: '   ' },
        { id: 5, x: -70, y: 150, color: { background: palette.yellow }, label: '   ' },
        { id: 6, x: 70, y: 150, color: { background: palette.yellow }, label: '   ' },
        { id: 7, x: 70, y: -50, color: { background: palette.yellow }, label: '   ' },
        { id: 8, x: 140, y: 50, color: { background: palette.yellow }, label: '   ' },
      ],
      edges: [
        { id: 1, from: 1, to: 2 },
        { id: 2, from: 2, to: 3 },
        { id: 3, from: 2, to: 4 },
        { id: 4, from: 4, to: 5 },
        { id: 5, from: 4, to: 6 },
        { id: 6, from: 1, to: 7 },
        { id: 7, from: 7, to: 8 },
      ],
    };
  };

  step2 = (state) => {
    let newNodes = this.updateNode(state.nodes, 0, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 1, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 3, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 5, palette.purple, ' v ');
    newNodes = this.updateNode(newNodes, 6, palette.purple, ' u ');

    let newEdges = this.updateEdge(state.edges, 0, palette.purple, 4, false, undefined);
    newEdges = this.updateEdge(newEdges, 2, palette.purple, 4, false, undefined);
    newEdges = this.updateEdge(newEdges, 4, palette.purple, 4, false, undefined);
    newEdges = this.updateEdge(newEdges, 5, palette.purple, 4, false, undefined);

    return { nodes: newNodes, edges: newEdges };
  };

  step3 = () => {
    this.setState(this.step3b);
    let timeout3a = setTimeout(() => { this.setState(this.step3a); }, 1000);
    let timeout3b = setTimeout(() => { this.setState(this.step3b); }, 2000);

    this.setState({ timeouts: [timeout3a, timeout3b] });
  };

  step3a = (state) => {
    let newNodes = this.updateNode(state.nodes, 1, palette.purple, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.purple, ' y ');
    let newEdges = this.updateEdge(state.edges, 2, palette.red, 4, [10, 10], ' e ');
    return { nodes: newNodes, edges: newEdges };
  };

  step3b = (state) => {
    let newNodes = this.updateNode(state.nodes, 1, palette.purple, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.purple, ' y ');
    let newEdges = this.updateEdge(state.edges, 2, palette.purple, 4, false, ' e ');
    return { nodes: newNodes, edges: newEdges };
  };

  step4 = () => {
    this.setState(this.step3a);
    let timeout4a = setTimeout(() => { this.setState(this.step4a); }, 1000);
    let timeout4b = setTimeout(() => { this.setState(this.step3a); }, 2000);

    this.setState({ timeouts: [timeout4a, timeout4b] });
  };

  step4a = (state) => {
    let newNodes = this.updateNode(state.nodes, 1, palette.purple, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.purple, ' y ');
    let newEdges = this.updateEdge(state.edges, 2, palette.white, 2, false, '   ');
    return { nodes: newNodes, edges: newEdges };
  };

  render() {
    return (
      <ProofWrapper
        {...this.state}
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

export default Proof3;
