import React from 'react';
import { initialProofState, palette } from '../../../functionality/globalProofConstants';
import { scroller } from 'react-scroll';
import { constants, cameraPositions } from './constants';
import {
  updateNode,
  getNodesWithNewPositions,
  updateEdge,
  addObjectArray,
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

class Proof5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialProofState;
    this.initNetworkInstance = this.initNetworkInstance.bind(this);
    this.updateNode = updateNode.bind(this);
    this.getNodesWithNewPositions = getNodesWithNewPositions.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.addObjectArray = addObjectArray.bind(this);
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
      switch (this.state.currentStep) {
        case 0: {
          this.setState({ btnPrevD: false });
          break;
        }
        case 1: {
          scroller.scrollTo('proofStepPanel2', getScrollOptions(window.scrollY));
          break;
        }
        case 3: {
          scroller.scrollTo('proofStepPanel3', getScrollOptions(window.scrollY));
          break;
        }
        case 4: {
          scroller.scrollTo('proofStepPanel4', getScrollOptions(window.scrollY));
          break;
        }
        case 6: {
          scroller.scrollTo('proofStepPanel5', getScrollOptions(window.scrollY));
          break;
        }
        case 7: {
          this.setState(this.step8);
          this.network.moveTo(cameraPositions[0]);
          scroller.scrollTo('proofStepPanel6', getScrollOptions(window.scrollY));
          break;
        }
        case 8: {
          this.setState(this.step9);
          scroller.scrollTo('proofStepPanel7', getScrollOptions(window.scrollY));
          break;
        }
        case 9: {
          this.step10();
          let interval = setInterval(this.step10, 3000);
          this.setState({ intervals: [interval] });
          scroller.scrollTo('proofStepPanel8', getScrollOptions(window.scrollY));
          break;
        }
        case 10: {
          this.clearAllTimers(this.state);
          this.setState(this.step11);
          scroller.scrollTo('proofStepPanel9', getScrollOptions(window.scrollY));
          break;
        }
        case 11: {
          this.setState(this.step12);
          scroller.scrollTo('proofStepPanel10', getScrollOptions(window.scrollY));
          break;
        }
        case 12: {
          this.setState(this.step13);
          scroller.scrollTo('proofStepPanel11', getScrollOptions(window.scrollY));
          break;
        }
        case 13: {
          this.setState({ btnNextD: true });
          scroller.scrollTo('proofStepPanel12', getScrollOptions(window.scrollY));
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
          scroller.scrollTo('proofStepPanel1', getScrollOptions(window.scrollY));
          break;
        }
        case 4: {
          scroller.scrollTo('proofStepPanel2', getScrollOptions(window.scrollY));
          break;
        }
        case 5: {
          scroller.scrollTo('proofStepPanel3', getScrollOptions(window.scrollY));
          break;
        }
        case 7: {
          scroller.scrollTo('proofStepPanel4', getScrollOptions(window.scrollY));
          break;
        }
        case 8: {
          scroller.scrollTo('proofStepPanel5', getScrollOptions(window.scrollY));
          break;
        }
        case 9: {
          this.setState(this.step8);
          scroller.scrollTo('proofStepPanel6', getScrollOptions(window.scrollY));
          break;
        }
        case 10: {
          this.clearAllTimers(this.state);
          this.setState(this.colorReset);
          this.setState(this.step8);
          this.setState(this.step9);
          scroller.scrollTo('proofStepPanel7', getScrollOptions(window.scrollY));
          break;
        }
        case 11: {
          this.setState(this.colorReset);
          this.setState(this.step8);
          this.setState(this.step9);
          this.step10();
          let interval = setInterval(this.step10, 3000);
          this.setState({ intervals: [interval] });
          scroller.scrollTo('proofStepPanel8', getScrollOptions(window.scrollY));
          break;
        }
        case 12: {
          this.setState(this.step11);
          scroller.scrollTo('proofStepPanel9', getScrollOptions(window.scrollY));
          break;
        }
        case 13: {
          this.setState(this.step12);
          scroller.scrollTo('proofStepPanel10', getScrollOptions(window.scrollY));
          break;
        }
        case 14: {
          this.setState({ btnNextD: false });
          this.setState(this.step13);
          scroller.scrollTo('proofStepPanel11', getScrollOptions(window.scrollY));
          break;
        }
        default: {
          break;
        }
      }

      this.updateCurrentStep(this.state.currentStep, -1);
    }
  };

  step8 = () => {
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
        { id: 3, from: 4, to: 5 },
        { id: 4, from: 4, to: 6 },
        { id: 5, from: 1, to: 7 },
        { id: 6, from: 7, to: 8 },
        { 
          id: 7,
          from: 2,
          to: 4,
          color: { color: palette.white, highlight: palette.white, hover: palette.white }
        },
        { 
          id: 8,
          from: 4,
          to: 7,
          color: { color: palette.white, highlight: palette.white, hover: palette.white }
        },
      ],
    };
  };

  colorReset = () => {
    return {
      nodes: [
        { id: 1, color: { background: palette.yellow }, label: '   ' },
        { id: 2, color: { background: palette.yellow }, label: '   ' },
        { id: 3, color: { background: palette.yellow }, label: '   ' },
        { id: 4, color: { background: palette.yellow }, label: '   ' },
        { id: 5, color: { background: palette.yellow }, label: '   ' },
        { id: 6, color: { background: palette.yellow }, label: '   ' },
        { id: 7, color: { background: palette.yellow }, label: '   ' },
        { id: 8, color: { background: palette.yellow }, label: '   ' },
      ],
      edges: [
        { id: 1, from: 1, to: 2 },
        { id: 2, from: 2, to: 3 },
        { id: 3, from: 4, to: 5 },
        { id: 4, from: 4, to: 6 },
        { id: 5, from: 1, to: 7 },
        { id: 6, from: 7, to: 8 },
        { 
          id: 7,
          from: 2,
          to: 4,
          color: { color: palette.white, highlight: palette.white, hover: palette.white },
          label: '',
        },
        { 
          id: 8,
          from: 4,
          to: 7,
          color: { color: palette.white, highlight: palette.white, hover: palette.white },
          label: '',
        },
      ],
    };
  };

  step9 = (state) => {
    let newNodes = this.getNodesWithNewPositions(this.network.getPositions(), state.nodes);
    newNodes = this.updateNode(newNodes, 1, palette.yellow, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.yellow, ' y ');

    let newEdges = this.updateEdge(state.edges, 6, palette.black, 1, false, 'e');
    newEdges = this.updateEdge(newEdges, 7, palette.black, 1, false, '');

    return { nodes: newNodes, edges: newEdges };
  };

  step10 = () => {
    this.setState(this.step10a);
    this.setState({ 
      timeouts: [
        setTimeout(() => { this.setState(this.step10b); }, 1000),
        setTimeout(() => { this.setState(this.step10a); }, 2000),
      ] });
  };

  step10a = (state) => {
    let newEdges = this.updateEdge(state.edges, 6, palette.red, 4, [10, 10], 'e');
    return { edges: newEdges };
  };

  step10b = (state) => {
    let newEdges = this.updateEdge(state.edges, 6, palette.white, 1, false, '');
    return { edges: newEdges };
  };

  step11 = (state) => {
    let newNodes = this.getNodesWithNewPositions(this.network.getPositions(), state.nodes);
    newNodes = this.updateNode(newNodes, 0, palette.green, '   ');
    newNodes = this.updateNode(newNodes, 1, palette.green, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.green, ' y ');
    newNodes = this.updateNode(newNodes, 6, palette.green, '   ');
    
    let newEdges = this.updateEdge(state.edges, 0, palette.green, 4, false, '');
    newEdges = this.updateEdge(newEdges, 4, palette.green, 4, false, '');
    newEdges = this.updateEdge(newEdges, 6, palette.white, 1, false, '');
    newEdges = this.updateEdge(newEdges, 7, palette.green, 4, false, '');
    return { nodes: newNodes, edges: newEdges };
  };

  step12 = (state) => {
    let newEdges = this.updateEdge(state.edges, 6, palette.black, 1, false, 'e');
    return { edges: newEdges };
  };

  step13 = (state) => {
    let newEdges = this.updateEdge(state.edges, 6, palette.green, 4, false, 'e');
    return { edges: newEdges };
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

export default Proof5;
