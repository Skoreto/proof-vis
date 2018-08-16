import React from 'react';
import {
  initialExerciseState,
  events,
  palette,
} from '../../../functionality/GlobalProofConstants';
import { scroller } from 'react-scroll';
import { constants, cameraPositions } from './constants';
import {
  updateNode,
  updateEdge,
  updateEdgeWithArrow,
  addObjectArray,
  clearAllTimers,
  updateCurrentStep,
  handlerSketchAllowance,
  handlerSelectedTool,
  handlerDrawingDialog,
  getScrollOptions,
} from '../../../functionality/GraphFunctions';
import ExerciseWrapper from '../../../UI/ProofWrapper/ProofWrapper';

class Proof6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialExerciseState;
    this.initNetworkInstance = this.initNetworkInstance.bind(this);
    this.updateNode = updateNode.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
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
          this.setState(this.colorReset);
          this.setState(this.step9);
          scroller.scrollTo('proofStepPanel7', getScrollOptions(window.scrollY));
          break;
        }
        case 9: {
          this.setState(this.colorReset);
          this.setState(this.step10);
          scroller.scrollTo('proofStepPanel8', getScrollOptions(window.scrollY));
          break;
        }
        case 10: {
          this.setState(this.colorReset);
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
          this.setState(this.colorReset);
          this.setState(this.step13);
          scroller.scrollTo('proofStepPanel11', getScrollOptions(window.scrollY));
          break;
        }
        case 13: {
          this.setState(this.colorReset);
          this.step14();
          this.setState({ btnRepeatD: false });
          scroller.scrollTo('proofStepPanel12', getScrollOptions(window.scrollY));
          break;
        }
        case 14: {
          this.clearAllTimers(this.state);
          this.setState(this.colorReset);
          this.setState(this.step12); // Same as step12
          this.setState({ btnRepeatD: true });
          scroller.scrollTo('proofStepPanel13', getScrollOptions(window.scrollY));
          break;
        }
        case 15: {
          this.setState(this.colorReset);
          this.setState(this.step16);
          scroller.scrollTo('proofStepPanel14', getScrollOptions(window.scrollY));
          break;
        }
        case 16: {
          scroller.scrollTo('proofStepPanel15', getScrollOptions(window.scrollY));
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
          this.setState(this.colorReset);
          this.setState(this.step9);
          scroller.scrollTo('proofStepPanel7', getScrollOptions(window.scrollY));
          break;
        }
        case 11: {
          this.setState(this.colorReset);
          this.setState(this.step10);
          scroller.scrollTo('proofStepPanel8', getScrollOptions(window.scrollY));
          break;
        }
        case 12: {
          this.setState(this.colorReset);
          this.setState(this.step11);
          scroller.scrollTo('proofStepPanel9', getScrollOptions(window.scrollY));
          break;
        }
        case 13: {
          this.setState(this.colorReset);
          this.setState(this.step12);
          scroller.scrollTo('proofStepPanel10', getScrollOptions(window.scrollY));
          break;
        }
        case 14: {
          this.clearAllTimers(this.state);
          this.setState(this.colorReset);
          this.setState(this.step13);
          this.setState({ btnRepeatD: true });
          scroller.scrollTo('proofStepPanel11', getScrollOptions(window.scrollY));
          break;
        }
        case 15: {
          this.setState(this.colorReset);
          this.step14();
          this.setState({ btnRepeatD: false });
          scroller.scrollTo('proofStepPanel12', getScrollOptions(window.scrollY));
          break;
        }
        case 16: {  
          this.setState(this.colorReset);
          this.setState(this.step12); // Same as step12
          scroller.scrollTo('proofStepPanel13', getScrollOptions(window.scrollY));
          break;
        }
        case 17: {
          this.setState(this.colorReset);
          this.setState(this.step16);
          scroller.scrollTo('proofStepPanel14', getScrollOptions(window.scrollY));
          break;
        }
        case 18: {
          scroller.scrollTo('proofStepPanel15', getScrollOptions(window.scrollY));
          break;
        }
        default: {
          break;
        }
      }

      this.updateCurrentStep(this.state.currentStep, -1);
    }
  };

  stepReset = () => {
    return { nodes: [], edges: [] };
  };

  colorReset = () => {
    return {
      nodes: [
        { id: 1, color: { background: palette.yellow }, label: '   ' },
        { id: 2,  color: { background: palette.yellow }, label: '   ' },
        { id: 3, color: { background: palette.yellow }, label: '   ' },
        { id: 4, color: { background: palette.yellow }, label: '   ' },
        { id: 5, color: { background: palette.yellow }, label: ' x ' },
        { id: 6, color: { background: palette.yellow }, label: '   ' },
        { id: 7, color: { background: palette.yellow }, label: ' y ' },
        { id: 8, color: { background: palette.yellow }, label: '   ' },
      ],
      edges: [
        { id: 1, from: 1, to: 2, color: { color: palette.black }, width: 1 },
        { id: 2, from: 2, to: 3, color: { color: palette.black }, width: 1 },
        { id: 3, from: 2, to: 4, color: { color: palette.black }, width: 1 },
        { id: 4, from: 3, to: 5, color: { color: palette.black }, width: 1 },
        { id: 5, from: 4, to: 6, color: { color: palette.black }, width: 1 },
        { id: 6, from: 5, to: 7, color: { color: palette.black }, width: 1, label: 'e' },
        { id: 7, from: 6, to: 7, color: { color: palette.black }, width: 1 },
        { id: 8, from: 7, to: 8, color: { color: palette.black }, width: 1 },
      ],
    }
  };

  repeatStep = () => {
    this.clearAllTimers(this.state);

    switch (this.state.currentStep) {
      case 14: {
        this.setState(this.colorReset);
        this.step14();
        break;
      }
      default: {
        break;
      }
    }
  };

  step8 = () => {
    return {
      nodes: [
        { id: 1, x: -250, y: 0, color: { background: palette.yellow }, label: '   ' },
        { id: 2, x: -130, y: -80, color: { background: palette.green }, label: '   ' },
        { id: 3, x: -130, y: 80, color: { background: palette.green }, label: '   ' },
        { id: 4, x: 0, y: -150, color: { background: palette.green }, label: '   ' },
        { id: 5, x: 0, y: 150, color: { background: palette.green }, label: ' x ' },
        { id: 6, x: 130, y: -80, color: { background: palette.green }, label: '   ' },
        { id: 7, x: 130, y: 80, color: { background: palette.green }, label: ' y ' },
        { id: 8, x: 250, y: 0, color: { background: palette.yellow }, label: '   ' },
      ],
      edges: [
        { id: 1, from: 1, to: 2 },
        { id: 2, from: 2, to: 3, color: { color: palette.green }, width: 4 },
        { id: 3, from: 2, to: 4, color: { color: palette.green }, width: 4 },
        { id: 4, from: 3, to: 5, color: { color: palette.green }, width: 4 },
        { id: 5, from: 4, to: 6, color: { color: palette.green }, width: 4 },
        { id: 6, from: 5, to: 7, color: { color: palette.green }, width: 4, label: 'e' },
        { id: 7, from: 6, to: 7, color: { color: palette.green }, width: 4 },
        { id: 8, from: 7, to: 8 },
      ],
    }
  };

  // step5 = (state) => {
  //   let newNodes = this.updateNode(state.nodes, 1, palette.green, '');
  //   newNodes = this.updateNode(newNodes, 2, palette.green, '');
  //   newNodes = this.updateNode(newNodes, 3, palette.green, '');
  //   newNodes = this.updateNode(newNodes, 4, palette.green, ' x ');
  //   newNodes = this.updateNode(newNodes, 5, palette.green, '');
  //   newNodes = this.updateNode(newNodes, 6, palette.green, ' y ');
    
  //   let newEdges = this.updateEdge(state.edges, 1, palette.green, 3, false, '');
  //   newEdges = this.updateEdge(newEdges, 2, palette.green, 3, false, '');
  //   newEdges = this.updateEdge(newEdges, 3, palette.green, 3, false, '');
  //   newEdges = this.updateEdge(newEdges, 4, palette.green, 3, false, '');
  //   newEdges = this.updateEdge(newEdges, 5, palette.green, 3, false, 'e');
  //   newEdges = this.updateEdge(newEdges, 6, palette.green, 3, false, '');

  //   return { nodes: newNodes, edges: newEdges };
  // };

  step9 = (state) => {
    let newNodes = this.updateNode(state.nodes, 4, palette.purple, ' x ');
    newNodes = this.updateNode(newNodes, 6, palette.purple, ' y ');
    
    let newEdges = this.updateEdge(state.edges, 5, palette.purple, 4, false, 'e');

    return { nodes: newNodes, edges: newEdges };
  };

  step10 = (state) => {
    let newNodes = this.updateNode(state.nodes, 1, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 2, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 3, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 4, palette.purple, ' x ');
    newNodes = this.updateNode(newNodes, 5, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 6, palette.purple, ' y ');
    
    let newEdges = this.updateEdge(state.edges, 1, palette.purple, 4, false, '');
    newEdges = this.updateEdge(newEdges, 2, palette.purple, 4, false, '');
    newEdges = this.updateEdge(newEdges, 3, palette.purple, 4, false, '');
    newEdges = this.updateEdge(newEdges, 4, palette.purple, 4, false, '');
    newEdges = this.updateEdge(newEdges, 6, palette.purple, 4, false, '');

    return { nodes: newNodes, edges: newEdges };
  };

  step11 = (state) => {
    let newNodes = this.updateNode(state.nodes, 0, palette.yellow, ' u ');
    newNodes = this.updateNode(newNodes, 7, palette.yellow, ' v ');

    return { nodes: newNodes };
  };

  step12 = (state) => {
    let newNodes = this.updateNode(state.nodes, 0, palette.purple, ' u ');
    newNodes = this.updateNode(newNodes, 1, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 3, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 5, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 6, palette.purple, ' y ');
    newNodes = this.updateNode(newNodes, 7, palette.purple, ' v ');
    
    let newEdges = this.updateEdge(state.edges, 0, palette.purple, 5, false, '');
    newEdges = this.updateEdge(newEdges, 2, palette.purple, 5, false, '');
    newEdges = this.updateEdge(newEdges, 4, palette.purple, 5, false, '');
    newEdges = this.updateEdge(newEdges, 5, palette.red, 5, [12, 12], 'e');
    newEdges = this.updateEdge(newEdges, 6, palette.purple, 5, false, '');
    newEdges = this.updateEdge(newEdges, 7, palette.purple, 5, false, '');

    return { nodes: newNodes, edges: newEdges };
  };

  step13 = (state) => {
    let newNodes = this.updateNode(state.nodes, 0, palette.purple, ' u ');
    newNodes = this.updateNode(newNodes, 1, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 2, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 4, palette.purple, ' x ');
    newNodes = this.updateNode(newNodes, 6, palette.purple, ' y ');
    newNodes = this.updateNode(newNodes, 7, palette.purple, ' v ');
    
    let newEdges = this.updateEdge(state.edges, 0, palette.purple, 5, false, '');
    newEdges = this.updateEdge(newEdges, 1, palette.purple, 5, false, '');
    newEdges = this.updateEdge(newEdges, 3, palette.purple, 5, false, '');
    newEdges = this.updateEdge(newEdges, 5, palette.purple, 5, false, 'e');
    newEdges = this.updateEdge(newEdges, 7, palette.purple, 5, false, '');

    return { nodes: newNodes, edges: newEdges };
  };

  step14 = () => {
    // Preparation before animation
    this.setState(this.step14prep);
    this.setState({ timeouts: [
      setTimeout(() => { this.setState(this.step14a); }, 1000),
      setTimeout(() => { this.setState(this.step14b); }, 2000),
      setTimeout(() => { this.setState(this.step14c); }, 3000), 
      setTimeout(() => { this.setState(this.step14d); }, 4000),
      setTimeout(() => { this.setState(this.step14e); }, 5000),
      setTimeout(() => { this.setState(this.step14f); }, 6000),
      setTimeout(() => { this.setState(this.step14g); }, 7000),
      setTimeout(() => { this.setState(this.step14h); }, 8000),
      setTimeout(() => { this.setState(this.step14i); }, 9000),
      setTimeout(() => { this.setState(this.step14j); }, 10000),
      setTimeout(() => { this.setState(this.step14k); }, 11000),
      setTimeout(() => { this.setState(this.step14l); }, 12000),
      setTimeout(() => { this.setState(this.step14m); }, 13000),
      setTimeout(() => { this.setState(this.step14n); }, 14000),
      setTimeout(() => { this.setState(this.step14o); }, 15000),
      setTimeout(() => { this.setState(this.step14p); }, 16000),
      setTimeout(() => { this.setState(this.step14q); }, 17000),
      setTimeout(() => { this.setState(this.step14r); }, 18000),
      setTimeout(() => { this.setState(this.step14s); }, 19000),
    ] });
  };

  step14prep = (state) => {
    let newNodes = this.updateNode(state.nodes, 0, palette.yellow, ' u ');
    newNodes = this.updateNode(state.nodes, 7, palette.yellow, ' v ');
    return { nodes: newNodes };
  };

  step14a = (state) => {
    return { nodes: this.updateNode(state.nodes, 0, palette.blue, ' u ') };
  };

  step14b = (state) => {
    return {
      edges: this.updateEdgeWithArrow(state.edges, 0, palette.blue, 4, false, '', true, false)
    };
  };

  step14c = (state) => {
    return { nodes: this.updateNode(state.nodes, 1, palette.blue, '   ') };
  };

  step14d = (state) => {
    return {
      edges: this.updateEdgeWithArrow(state.edges, 1, palette.blue, 4, false, '', true, false)
    };
  };

  step14e = (state) => {
    return { nodes: this.updateNode(state.nodes, 2, palette.blue, '   ') };
  };

  step14f = (state) => {
    return {
      edges: this.updateEdgeWithArrow(state.edges, 3, palette.blue, 4, false, '', true, false)
    };
  };

  step14g = (state) => {
    return { nodes: this.updateNode(state.nodes, 4, palette.blue, ' x ') };
  };

  step14h = (state) => {
    return { edges: this.addObjectArray(state.edges, [
      {
        id: 9, 
        from: 5, 
        to: 3, 
        color: { color: palette.blue, hover: palette.blue }, 
        width: 4,
        arrows: { to: { enabled: true } }, 
        smooth: { enabled: true, type: "curvedCCW", roundness: 0.5 },
      }
    ]) };
  };

  step14i = (state) => {
    return { nodes: this.updateNode(state.nodes, 2, palette.darkblue, '   ') };
  };

  step14j = (state) => {
    return { edges: this.addObjectArray(state.edges, [
      {
        id: 10, 
        from: 3, 
        to: 2, 
        color: { color: palette.blue, hover: palette.blue }, 
        width: 4,
        arrows: { to: { enabled: true } }, 
        smooth: { enabled: true, type: "curvedCCW", roundness: 0.5 },
      }
    ]) };
  };

  step14k = (state) => {
    return { nodes: this.updateNode(state.nodes, 1, palette.darkblue, '   ') };
  };

  step14l = (state) => {
    return {
      edges: this.updateEdgeWithArrow(state.edges, 2, palette.blue, 4, false, '', true, false)
    };
  };

  step14m = (state) => {
    return { nodes: this.updateNode(state.nodes, 3, palette.blue, '   ') };
  };

  step14n = (state) => {
    return {
      edges: this.updateEdgeWithArrow(state.edges, 4, palette.blue, 4, false, '', true, false)
    };
  };

  step14o = (state) => {
    return { nodes: this.updateNode(state.nodes, 5, palette.blue, '   ') };
  };

  step14p = (state) => {
    return {
      edges: this.updateEdgeWithArrow(state.edges, 6, palette.blue, 4, false, '', true, false)
    };
  };

  step14q = (state) => {
    return { nodes: this.updateNode(state.nodes, 6, palette.blue, ' y ') };
  };

  step14r = (state) => {
    return {
      edges: this.updateEdgeWithArrow(state.edges, 7, palette.blue, 4, false, '', true, false)
    };
  };

  step14s = (state) => {
    return { nodes: this.updateNode(state.nodes, 7, palette.blue, ' v ') };
  };

  step16 = (state) => {
    return { edges: this.updateEdge(state.edges, 5, palette.white, 4, false, '') };
  };

  render() {
    return (
      <ExerciseWrapper
        {...this.state}
        events={events}
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

export default Proof6;
