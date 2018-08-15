import React from 'react';
import {
  initialExerciseState,
  events,
  palette,
} from '../../../functionality/GlobalExerciseConstants';
import { scroller } from 'react-scroll';
import { constants, cameraPositions } from './constants';
import {
  updateNode,
  updateEdge,
  updateEdgeWithArrow,
  addObjectArray,
  getNodesWithNewPositions,
  updateNodesWithNewPositions,
  clearAllTimers,
  updateCurrentStep,
  handlerSketchAllowance,
  handlerSelectedTool,
  handlerDrawingDialog,
  getScrollOptions,
} from '../../../functionality/GraphFunctions';
import ExerciseWrapper from '../../../UI/ProofWrapper/ProofWrapper';

class Proof4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialExerciseState;
    this.initNetworkInstance = this.initNetworkInstance.bind(this);
    this.updateNode = updateNode.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
    this.addObjectArray = addObjectArray.bind(this);
    this.getNodesWithNewPositions = getNodesWithNewPositions.bind(this);
    this.updateNodesWithNewPositions = updateNodesWithNewPositions.bind(this);
    this.clearAllTimers = clearAllTimers.bind(this);
    this.updateCurrentStep = updateCurrentStep.bind(this);
    this.handlerSketchAllowance = handlerSketchAllowance.bind(this);
    this.handlerSelectedTool = handlerSelectedTool.bind(this);
    this.handlerDrawingDialog = handlerDrawingDialog.bind(this);
  }

  /**
   * Initialize GraphVis network instance.
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
          this.setState(this.step1SVGContent);
          break;
        }
        case 1: {
          this.setState(this.step2);
          this.network.moveTo(cameraPositions[0]);
          scroller.scrollTo('proofStepPanel2', getScrollOptions(window.scrollY));
          break;
        }
        case 2: {
          this.setState(this.step3);
          scroller.scrollTo('proofStepPanel3', getScrollOptions(window.scrollY));
          break;
        }
        case 3: {
          this.setState(this.step4);
          break;
        }
        case 4: {
          this.setState(this.step5);
          this.network.moveTo(cameraPositions[1]);
          scroller.scrollTo('proofStepPanel4', getScrollOptions(window.scrollY));
          break;
        }
        case 5: {
          this.setState(this.step6);
          this.network.moveTo(cameraPositions[2]);
          scroller.scrollTo('proofStepPanel5', getScrollOptions(window.scrollY));
          break;
        }
        case 6: {
          this.network.moveTo(cameraPositions[0]);
          scroller.scrollTo('proofStepPanel6', getScrollOptions(window.scrollY));
          break;
        }
        case 7: {
          this.setState({ btnNextD: true });
          this.step8();
          let interval1 = setInterval(this.step8, 2000);
          this.setState({ interval1: interval1 });
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
          this.setState(this.step1SVGContent);
          scroller.scrollTo('proofStepPanel1', getScrollOptions(window.scrollY));
          break;
        }
        case 3: {
          this.setState(this.stepReset);
          this.setState(this.step2);
          scroller.scrollTo('proofStepPanel2', getScrollOptions(window.scrollY));
          break;
        }
        case 4: {
          this.setState(this.stepReset);
          this.setState(this.step2);
          this.setState(this.step3);
          break;
        }
        case 5: {
          this.setState(this.stepReset);
          this.setState(this.step2);
          this.setState(this.step3);
          this.setState(this.step4);
          this.network.moveTo(cameraPositions[0]);
          scroller.scrollTo('proofStepPanel3', getScrollOptions(window.scrollY));
          break;
        }
        case 6: {
          this.setState(this.stepReset);
          this.setState(this.step2);
          this.setState(this.step3);
          this.setState(this.step4);
          this.setState(this.step5);
          this.network.moveTo(cameraPositions[1]);
          scroller.scrollTo('proofStepPanel4', getScrollOptions(window.scrollY));
          break;
        }
        case 7: {
          this.network.moveTo(cameraPositions[2]);
          scroller.scrollTo('proofStepPanel5', getScrollOptions(window.scrollY));
          break;
        }
        case 8: {
          this.setState({ btnNextD: false });
          clearInterval(this.state.interval1);
          this.clearAllTimers(this.state);
          this.setState(this.stepReset);
          this.setState(this.step2);
          this.setState(this.step3);
          this.setState(this.step4);
          this.setState(this.step5);
          this.setState(this.step6);
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

  stepReset = () => { 
    return { nodes: [], edges: [], isSVGCoverShowed: false } 
  };

  step1SVGContent = () => {
    const svgContent = (
      <svg>
        <text textAnchor={'middle'} x={318} y={80} fill={'green'} strokeWidth={0} fontSize={26}>
          A: v <tspan fontStyle='italic'>G</tspan> neexistuje kružnice
        </text>
        <text textAnchor={'middle'} x={325} y={110} fill={'red'} strokeWidth={0} fontSize={26}>
          B: každá hrana v <tspan fontStyle='italic'>G</tspan> je most 
        </text>
        <text textAnchor={'middle'} x={325} y={180} stroke={'black'} strokeWidth={0} fontSize={28}>
          (<tspan fill={'green'}>A</tspan>⇒<tspan fill={'red'}>B</tspan>) ⇔ (<tspan fill={'red'}>&not;B</tspan>&rArr;<tspan fill={'green'}>&not;A</tspan>)
        </text>
        <text textAnchor={'middle'} x={325} y={250} fill={'red'} strokeWidth={0} fontSize={26}>
          &not;B: existuje hrana v <tspan fontStyle='italic'>G</tspan>, která není most
        </text>
        <text textAnchor={'middle'} x={245} y={290} fill={'green'} strokeWidth={0} fontSize={26}>
          &not;A: v <tspan fontStyle='italic'>G</tspan> existuje kružnice
        </text>
      </svg>
    );

    return { isSVGCoverShowed: true, svgContent: svgContent }
  }

  step2 = () => {
    return {
      nodes: [
        { id: 1, x: -180, y: -40, color: { background: palette.yellow }, label: '   ' },
        { id: 2, x: -40, y: -100, color: { background: palette.yellow }, label: ' x ' },
        { id: 3, x: -30, y: 50, color: { background: palette.yellow }, label: '   ' },
        { id: 4, x: 110, y: -50, color: { background: palette.yellow }, label: ' y ' },
        { id: 5, x: 120, y: 80, color: { background: palette.yellow }, label: '   ' },
      ],
      edges: [
        { id: 1, from: 1, to: 2 },
        { id: 2, from: 2, to: 3 },
        { id: 3, from: 2, to: 4, label: 'e' },
        { id: 4, from: 3, to: 5 },
        { id: 5, from: 4, to: 5 },
      ],
      isSVGCoverShowed: false,
    }
  };

  step3 = (state) => {
    let newNodes = this.updateNode(state.nodes, 0, palette.yellow, ' u ');
    newNodes = this.updateNode(newNodes, 1, palette.yellow, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.yellow, ' y ');
    newNodes = this.updateNode(newNodes, 4, palette.yellow, ' v ');

    let newEdges = this.updateEdge(state.edges, 2, palette.black, 1, false, ' e ');

    return { nodes: newNodes, edges: newEdges };
  };

  step4 = (state) => {
    let newNodes = this.updateNode(state.nodes, 0, palette.purple, ' u ');
    newNodes = this.updateNode(newNodes, 1, palette.purple, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.purple, ' y ');
    newNodes = this.updateNode(newNodes, 4, palette.purple, ' v ');

    let newEdges = this.updateEdge(state.edges, 0, palette.purple, 2, false, undefined);
    newEdges = this.updateEdge(newEdges, 2, palette.purple, 2, false, ' e ');
    newEdges = this.updateEdge(newEdges, 4, palette.purple, 2, false, undefined);

    return { nodes: newNodes, edges: newEdges };
  };

  step5 = (state) => {
    let newNodes = this.addObjectArray(state.nodes, [
      { id: 6, x: 220, y: -40, color: { background: palette.purple }, label: ' u ' },
      { id: 7, x: 360, y: -100, color: { background: palette.purple }, label: ' x ' },
      { id: 8, x: 370, y: 50, color: { background: palette.purple }, label: '   ' },
      { id: 9, x: 510, y: -50, color: { background: palette.yellow }, label: ' y ' },
      { id: 10, x: 520, y: 80, color: { background: palette.purple }, label: ' v ' },
    ]);

    let newEdges = this.addObjectArray(state.edges, [
      { id: 6, from: 6, to: 7, color: { color: palette.purple, hover: palette.purple }, width: 2 },
      { id: 7, from: 7, to: 8, color: { color: palette.purple, hover: palette.purple }, width: 2 },
      {
        id: 8,
        from: 7,
        to: 9,
        color: { color: palette.red, hover: palette.red },
        width: 2,
        dashes: [8, 8],
        label: ' e ',
      },
      { id: 9, from: 8, to: 10, color: { color: palette.purple, hover: palette.purple }, width: 2 },
      { id: 10, from: 9, to: 10 },
    ]);

    return { nodes: newNodes, edges: newEdges };
  };

  step6 = (state) => {
    let newNodes = this.updateNode(state.nodes, 0, palette.yellow, '   ');
    newNodes = this.updateNode(newNodes, 1, palette.green, ' x ');
    newNodes = this.updateNode(newNodes, 2, palette.green, '   ');
    newNodes = this.updateNode(newNodes, 3, palette.green, ' y ');
    newNodes = this.updateNode(newNodes, 4, palette.green, '   ');
    newNodes = this.updateNode(newNodes, 5, palette.yellow, '   ');
    newNodes = this.updateNode(newNodes, 6, palette.green, ' x ');
    newNodes = this.updateNode(newNodes, 7, palette.green, '   ');
    newNodes = this.updateNode(newNodes, 8, palette.green, ' y ');
    newNodes = this.updateNode(newNodes, 9, palette.green, '   ');

    let newEdges = this.updateEdge(state.edges, 0, palette.black, 1, false, undefined);
    newEdges = this.updateEdge(newEdges, 1, palette.green, 3, false, undefined);
    newEdges = this.updateEdge(newEdges, 2, palette.black, 1, false, ' e ');
    newEdges = this.updateEdge(newEdges, 3, palette.green, 3, false, undefined);
    newEdges = this.updateEdge(newEdges, 4, palette.green, 3, false, undefined);
    newEdges = this.updateEdge(newEdges, 5, palette.black, 1, false, undefined);
    newEdges = this.updateEdge(newEdges, 6, palette.green, 3, false, undefined);
    newEdges = this.updateEdge(newEdges, 7, palette.white, 2, false, '   ');
    newEdges = this.updateEdge(newEdges, 8, palette.green, 3, false, undefined);
    newEdges = this.updateEdge(newEdges, 9, palette.green, 3, false, undefined);

    return { nodes: newNodes, edges: newEdges };
  };

  step8 = () => {
    let timeout1 = setTimeout(() => { this.setState(this.step8a); }, 500);
    let timeout2 = setTimeout(() => { this.setState(this.step8b); }, 2000);

    this.setState({ timeouts: [timeout1, timeout2] });
  };

  step8a = (state) => {
    let newEdges = this.updateEdge(state.edges, 2, palette.green, 3, false, ' e ');
    return { edges: newEdges };
  };

  step8b = (state) => {
    let newEdges = this.updateEdge(state.edges, 2, palette.black, 1, false, ' e ');
    return { edges: newEdges };
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

export default Proof4;
