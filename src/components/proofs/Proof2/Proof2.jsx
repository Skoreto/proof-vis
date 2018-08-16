import React from 'react';
import { scroller } from 'react-scroll';
import { constants, cameraPositions } from './constants';
import { initialProofState, palette } from '../../../functionality/globalProofConstants';
import {
  updateNode,
  updateNodeShape,
  getNodesWithNewPositions,
  updateEdge,
  updateEdgeWithArrow,
  updateNodesWithNewPositions,
} from '../../../functionality/graphFunctions';
import {
  clearAllTimers,
  updateCurrentStep,
  handlerSketchAllowance,
  handlerSelectedTool,
  handlerDrawingDialog,
  getScrollOptions,
} from '../../../functionality/proofFunctions';
import ProofWrapper from '../../../UI/ProofWrapper/ProofWrapper';

class Proof2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialProofState;
    this.initNetworkInstance = this.initNetworkInstance.bind(this);
    this.updateNode = updateNode.bind(this);
    this.updateNodeShape = updateNodeShape.bind(this);
    this.getNodesWithNewPositions = getNodesWithNewPositions.bind(this);
    this.updateNodesWithNewPositions = updateNodesWithNewPositions.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
    this.clearAllTimers = clearAllTimers.bind(this);
    this.updateCurrentStep = updateCurrentStep.bind(this);
    this.handlerSketchAllowance = handlerSketchAllowance.bind(this);
    this.handlerSelectedTool = handlerSelectedTool.bind(this);
    this.handlerDrawingDialog = handlerDrawingDialog.bind(this);
  }

  /**
   * Initialize graphVis network instance.
   * @param {Object} networkInstance - Object of network instance returned by getNetwork() callback function.
   */
  initNetworkInstance(networkInstance) {
    this.network = networkInstance;
  }

  nextStep = () => {
    if (this.state.currentStep < constants.stepSum) {
      this.updateNodesWithNewPositions(this.network.getPositions(), this.state.nodes);

      switch (this.state.currentStep) {
        case 0: {
          this.setState({ btnPrevD: false });
          this.setState(this.step1);
          this.network.moveTo(cameraPositions[0]);
          break;
        }
        case 1: {
          this.step2Animation();
          let interval1 = setInterval(this.step2Animation, 6000);
          this.setState({ intervals: [interval1] });
          this.network.moveTo(cameraPositions[1]);
          scroller.scrollTo('proofStepPanel2', getScrollOptions(window.scrollY));
          break;
        }
        case 2: {
          this.clearAllTimers(this.state);
          this.setState(this.colorsReset);
          this.setState(this.step3);
          scroller.scrollTo('proofStepPanel3', getScrollOptions(window.scrollY));
          break;
        }
        case 3: {
          this.setState(this.step4);
          this.network.moveTo(cameraPositions[2]);
          scroller.scrollTo('proofStepPanel4', getScrollOptions(window.scrollY));
          break;
        }
        case 4: {
          this.setState(this.step5);
          scroller.scrollTo('proofStepPanel5', getScrollOptions(window.scrollY));
          break;
        }
        case 5: {
          this.setState(this.step6);
          break;
        }
        case 6: {
          this.setState(this.colorsReset);
          this.setState(this.step7);
          break;
        }
        case 7: {
          this.setState(this.step8);
          break;
        }
        case 8: {
          this.setState(this.colorsReset);
          this.setState(this.step9);
          scroller.scrollTo('proofStepPanel6', getScrollOptions(window.scrollY));
          break;
        }
        case 9: {
          this.setState({ btnNextD: true });
          this.setState(this.step10);
          scroller.scrollTo('proofStepPanel7', getScrollOptions(window.scrollY));
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
      this.updateNodesWithNewPositions(this.network.getPositions(), this.state.nodes);

      switch (this.state.currentStep) {
        case 1: {
          this.setState({ btnPrevD: true });
          this.setState(this.stepReset);
          break;
        }
        case 2: {
          this.clearAllTimers(this.state);
          this.setState(this.colorsReset);
          this.network.moveTo(cameraPositions[0]);
          scroller.scrollTo('proofStepPanel1', getScrollOptions(window.scrollY));
          break;
        }
        case 3: {
          this.setState(this.colorsReset);
          this.step2Animation();
          let interval1 = setInterval(this.step2Animation, 6000);
          this.setState({ intervals: [interval1] });
          scroller.scrollTo('proofStepPanel2', getScrollOptions(window.scrollY));
          break;
        }
        case 4: {
          this.clearAllTimers(this.state);
          this.setState(this.colorsReset);
          this.setState(this.step3);
          this.network.moveTo(cameraPositions[1]);
          scroller.scrollTo('proofStepPanel3', getScrollOptions(window.scrollY));
          break;
        }
        case 5: {
          this.setState(this.colorsReset);
          this.setState(this.step4);
          scroller.scrollTo('proofStepPanel4', getScrollOptions(window.scrollY));
          break;
        }
        case 6: {
          this.setState(this.step5);
          break;
        }
        case 7: {
          this.setState(this.colorsReset);
          this.setState(this.step6);
          break;
        }
        case 8: {
          this.setState(this.colorsReset);
          this.setState(this.step7);
          break;
        }
        case 9: {
          this.setState(this.colorsReset);
          this.setState(this.step8);
          scroller.scrollTo('proofStepPanel5', getScrollOptions(window.scrollY));
          break;
        }
        case 10: {
          this.setState({ btnNextD: false });
          this.setState(this.colorsReset);
          this.setState(this.step9);
          scroller.scrollTo('proofStepPanel6', getScrollOptions(window.scrollY));
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

  colorsReset = () => {
    return {
      nodes: [
        { id: 1, color: { background: palette.yellow }, label: '   ' },
        { id: 2, color: { background: palette.yellow }, label: '   ' },
        { id: 3, color: { background: palette.yellow }, label: '   ' },
        { id: 4, color: { background: palette.yellow }, label: ' u ' },
        { id: 5, color: { background: palette.yellow }, label: ' v ' },
        { id: 6, color: { background: palette.yellow }, label: '   ' },
        { id: 7, color: { background: palette.yellow }, label: '   ' },
        { id: 8, color: { background: palette.yellow }, label: '   ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 9, color: { background: palette.yellow }, label: ' u ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 10, color: { background: palette.yellow }, label: '   ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 11, color: { background: palette.yellow }, label: '   ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 12, color: { background: palette.yellow }, label: ' v ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 13, color: { background: palette.yellow }, label: '   ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 14, color: { background: palette.yellow }, label: '   ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 15, color: { background: palette.yellow }, label: '   ',
        font: { vadjust: 0 }, shape: 'circle' },
      ],
      edges: [
        { id: 1, from: 1, to: 2, color: { color: palette.black }, width: 1 },
        { id: 2, from: 1, to: 3, color: { color: palette.black }, width: 1 },
        { id: 3, from: 2, to: 4, color: { color: palette.black }, width: 1 },
        { id: 4, from: 3, to: 5, color: { color: palette.black }, width: 1 },
        { id: 5, from: 4, to: 5, color: { color: palette.black }, width: 1, label: 'e' },
        { id: 6, from: 4, to: 6, color: { color: palette.black }, width: 1 },
        { id: 7, from: 5, to: 7, color: { color: palette.black }, width: 1 },
        { id: 8, from: 6, to: 8, color: { color: palette.black }, width: 1 },
        { id: 9, from: 7, to: 8, color: { color: palette.black }, width: 1 },
        { id: 10, from: 9, to: 10, color: { color: palette.black }, width: 1 },
        { id: 11, from: 9, to: 11, color: { color: palette.black }, width: 1 },
        { id: 12, from: 9, to: 12, color: { color: palette.black }, width: 1, label: 'e' },
        { id: 13, from: 10, to: 13, color: { color: palette.black }, width: 1 },
        { id: 14, from: 11, to: 14, color: { color: palette.black }, width: 1 },
        { id: 15, from: 12, to: 15, color: { color: palette.black }, width: 1 },
        { id: 16, from: 13, to: 15, color: { color: palette.black }, width: 1 },
        { id: 17, from: 14, to: 15, color: { color: palette.black }, width: 1 },
      ],
    };
  };

  step1 = () => {
    return {
      nodes: [
        { id: 1, x: -240, y: -140, color: { background: palette.yellow }, label: '   ' },
        { id: 2, x: -140, y: -260, color: { background: palette.yellow }, label: '   ' },
        { id: 3, x: -140, y: -20, color: { background: palette.yellow }, label: '   ' },
        { id: 4, x: 0, y: -200, color: { background: palette.yellow }, label: ' u ' },
        { id: 5, x: 0, y: -80, color: { background: palette.yellow }, label: ' v ' },
        { id: 6, x: 140, y: -260, color: { background: palette.yellow }, label: '   ' },
        { id: 7, x: 140, y: -20, color: { background: palette.yellow }, label: '   ' },
        { id: 8, x: 240, y: -140, color: { background: palette.yellow }, label: '   ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 9, x: -240, y: 195, color: { background: palette.yellow }, label: ' u ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 10, x: -130, y: 100, color: { background: palette.yellow }, label: '   ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 11, x: -130, y: 290, color: { background: palette.yellow }, label: '   ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 12, x: 0, y: 195, color: { background: palette.yellow }, label: ' v ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 13, x: 130, y: 100, color: { background: palette.yellow }, label: '   ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 14, x: 130, y: 290, color: { background: palette.yellow }, label: '   ',
        font: { vadjust: 0 }, shape: 'circle' },
        { id: 15, x: 240, y: 195, color: { background: palette.yellow }, label: '   ',
        font: { vadjust: 0 }, shape: 'circle' },
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
      ],
    };
  };

  step2Animation = () => {
    let timeout1 = setTimeout(() => { this.setState(this.step2a); }, 1000);
    let timeout2 = setTimeout(() => { this.setState(this.colorsReset); }, 2500);
    let timeout3 = setTimeout(() => { this.setState(this.step2c); }, 3000);
    let timeout4 = setTimeout(() => { this.setState(this.colorsReset); }, 4500);

    this.setState({ timeouts: [timeout1, timeout2, timeout3, timeout4] });
  };

  step2a = (state) => {
    let newNodes = this.getNodesWithNewPositions(this.network.getPositions(), state.nodes);
    newNodes = this.updateNode(newNodes, 0, palette.ruby, '   ');
    newNodes = this.updateNode(newNodes, 1, palette.ruby, '   ');
    newNodes = this.updateNode(newNodes, 2, palette.ruby, '   ');
    newNodes = this.updateNode(newNodes, 3, palette.ruby, ' u ');
    newNodes = this.updateNode(newNodes, 4, palette.ruby, ' v ');

    let newEdges = this.updateEdge(state.edges, 0, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 1, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 2, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 3, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 4, palette.ruby, 3, false, 'e');

    return { nodes: newNodes, edges: newEdges };
  };

  step2c = (state) => {
    let newNodes = this.getNodesWithNewPositions(this.network.getPositions(), state.nodes);
    newNodes = this.updateNode(newNodes, 3, palette.jade, ' u ');
    newNodes = this.updateNode(newNodes, 4, palette.jade, ' v ');
    newNodes = this.updateNode(newNodes, 5, palette.jade, '   ');
    newNodes = this.updateNode(newNodes, 6, palette.jade, '   ');
    newNodes = this.updateNode(newNodes, 7, palette.jade, '   ');

    let newEdges = this.updateEdge(state.edges, 4, palette.jade, 3, false, 'e');
    newEdges = this.updateEdge(newEdges, 5, palette.jade, 3, false, '');
    newEdges = this.updateEdge(newEdges, 6, palette.jade, 3, false, '');
    newEdges = this.updateEdge(newEdges, 7, palette.jade, 3, false, '');
    newEdges = this.updateEdge(newEdges, 8, palette.jade, 3, false, '');

    return { nodes: newNodes, edges: newEdges };
  };

  step3 = (state) => {
    let newNodes = this.updateNode(state.nodes, 0, palette.orange, '   ');
    newNodes = this.updateNode(newNodes, 1, palette.orange, '   ');
    newNodes = this.updateNode(newNodes, 2, palette.orange, '   ');
    newNodes = this.updateNode(newNodes, 3, palette.orange, ' u ');
    newNodes = this.updateNode(newNodes, 4, palette.orange, ' v ');
    newNodes = this.updateNode(newNodes, 5, palette.orange, '   ');
    newNodes = this.updateNode(newNodes, 6, palette.orange, '   ');
    newNodes = this.updateNode(newNodes, 7, palette.orange, '   ');

    let newEdges = this.updateEdge(state.edges, 0, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 1, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 2, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 3, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 5, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 6, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 7, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 8, palette.orange, 3, false, '');

    return { nodes: newNodes, edges: newEdges };
  };

  step4 = (state) => {
    let newEdges = this.updateEdge(state.edges, 14, palette.black, 1, false, 'e1');
    return { edges: newEdges };
  };

  step5 = (state) => {
    let newNodes = this.updateNode(state.nodes, 8, palette.ruby, ' u ');
    newNodes = this.updateNode(newNodes, 9, palette.ruby, '   ');
    newNodes = this.updateNode(newNodes, 11, palette.ruby, ' v ');
    newNodes = this.updateNode(newNodes, 12, palette.ruby, '   ');
    newNodes = this.updateNode(newNodes, 14, palette.ruby, '   ');

    let newEdges = this.updateEdge(state.edges, 9, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 11, palette.ruby, 3, false, 'e');
    newEdges = this.updateEdge(newEdges, 12, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 14, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 15, palette.ruby, 3, false, '');

    return { nodes: newNodes, edges: newEdges };
  };

  step6 = (state) => {
    let newNodes = this.updateNodeShape(
      state.nodes,
      8,
      palette.purple,
      'u = x1',
      -75,
      'dot',
      21
    );
    newNodes = this.updateNodeShape(newNodes, 9, palette.purple, 'x2', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 11, palette.purple, 'v = x5', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 12, palette.purple, 'x3', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 14, palette.purple, 'x4', -75, 'dot', 21);

    let newEdges = this.updateEdge(state.edges, 9, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 11, palette.black, 1, false, 'e');
    newEdges = this.updateEdge(newEdges, 12, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 14, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 15, palette.purple, 3, false, '');

    return { nodes: newNodes, edges: newEdges };
  };

  step7 = (state) => {
    let newNodes = this.updateNode(state.nodes, 8, palette.jade, ' u ');
    newNodes = this.updateNode(newNodes, 10, palette.jade, '   ');
    newNodes = this.updateNode(newNodes, 11, palette.jade, ' v ');
    newNodes = this.updateNode(newNodes, 13, palette.jade, '   ');
    newNodes = this.updateNode(newNodes, 14, palette.jade, '   ');

    let newEdges = this.updateEdge(state.edges, 10, palette.jade, 3, false, '');
    newEdges = this.updateEdge(newEdges, 11, palette.jade, 3, false, 'e');
    newEdges = this.updateEdge(newEdges, 13, palette.jade, 3, false, '');
    newEdges = this.updateEdge(newEdges, 14, palette.jade, 3, false, '');
    newEdges = this.updateEdge(newEdges, 16, palette.jade, 3, false, '');

    return { nodes: newNodes, edges: newEdges };
  };

  step8 = (state) => {
    let newNodes = this.updateNodeShape(
      state.nodes,
      8,
      palette.purple,
      'u = y1',
      -75,
      'dot',
      21,
    );
    newNodes = this.updateNodeShape(newNodes, 10, palette.purple, 'y2', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 11, palette.purple, 'v = y5', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 13, palette.purple, 'y3', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 14, palette.purple, 'y4', -75, 'dot', 21);

    let newEdges = this.updateEdge(state.edges, 10, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 11, palette.black, 1, false, 'e');
    newEdges = this.updateEdge(newEdges, 13, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 14, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 16, palette.purple, 3, false, '');

    return { nodes: newNodes, edges: newEdges };
  };

  step9 = (state) => {
    let newNodes = this.updateNodeShape(
      state.nodes,
      8,
      palette.orange,
      'x1 = y1',
      -75,
      'dot',
      21,
    );
    newNodes = this.updateNodeShape(newNodes, 14, palette.orange, 'x4 = y4', -75, 'dot', 21);

    return { nodes: newNodes };
  };

  step10 = (state) => {
    let newNodes = this.updateNodeShape(
      state.nodes,
      8,
      palette.orange,
      'x1 = y1',
      -75,
      'dot',
      21,
    );
    newNodes = this.updateNodeShape(newNodes, 9, palette.orange, 'x2', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 10, palette.orange, 'y2', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 12, palette.orange, 'x3', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 13, palette.orange, 'y3', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 14, palette.orange, 'x4 = y4', -75, 'dot', 21);

    let newEdges = this.updateEdge(state.edges, 9, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 10, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 12, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 13, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 15, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 16, palette.orange, 3, false, '');

    return { nodes: newNodes, edges: newEdges };
  };

  render() {
    return (
      <ProofWrapper
        {...this.state}
        initNetworkInstance={this.initNetworkInstance}
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

export default Proof2;
