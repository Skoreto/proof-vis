import React from 'react';
import { initialExerciseState, events } from '../../../functionality/GlobalExerciseConstants';
import { constants, cameraPositions } from './constants';
import {
  updateNode,
  updateEdge,
  updateEdgeWithArrow,
  addObjectArray,
  clearAllTimers,
  handlerSketchAllowance,
  handlerSelectedTool,
  handlerDrawingDialog,
} from '../../../functionality/GraphFunctions';
import ExerciseWrapper from '../../../components/UI/ExerciseWrapper/ExerciseWrapper';

class Exercise20 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialExerciseState;
    this.initNetworkInstance = this.initNetworkInstance.bind(this);
    this.updateNode = updateNode.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
    this.addObjectArray = addObjectArray.bind(this);
    this.clearAllTimers = clearAllTimers.bind(this);
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
    if (this.state.currentStep <= 6) {
      if (this.state.currentStep === 0) {
        this.setState({ btnPrevD: false });
        this.setState(this.step1);
        this.network.moveTo(cameraPositions[0]);
      }

      if (this.state.currentStep === 1) {
        this.setState(this.step2);
      }

      if (this.state.currentStep === 2) {
        this.setState(this.step3);
      }

      if (this.state.currentStep === 3) {
        this.setState(this.step4);
        this.network.moveTo(cameraPositions[1]);
      }

      if (this.state.currentStep === 4) {
        this.setState(this.step5);
        this.network.moveTo(cameraPositions[2]);
      }

      if (this.state.currentStep === 5) {
        this.network.moveTo(cameraPositions[0]);
      }

      if (this.state.currentStep === 6) {
        this.setState({ btnNextD: true });
        this.step7();
        let interval1 = setInterval(this.step7, 2000);
        this.setState({ interval1: interval1 });
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
      }

      if (this.state.currentStep === 3) {
        this.setState(this.stepReset);
        this.setState(this.step1);
        this.setState(this.step2);
      }

      if (this.state.currentStep === 4) {
        this.setState(this.stepReset);
        this.setState(this.step1);
        this.setState(this.step2);
        this.setState(this.step3);
        this.network.moveTo(cameraPositions[0]);
      }

      if (this.state.currentStep === 5) {
        this.setState(this.stepReset);
        this.setState(this.step1);
        this.setState(this.step2);
        this.setState(this.step3);
        this.setState(this.step4);
        this.network.moveTo(cameraPositions[1]);
      }

      if (this.state.currentStep === 6) {
        this.network.moveTo(cameraPositions[2]);
      }

      if (this.state.currentStep === 7) {
        this.setState({ btnNextD: false });
        clearInterval(this.state.interval1);
        this.clearAllTimers(this.state);
        this.setState(this.stepReset);
        this.setState(this.step1);
        this.setState(this.step2);
        this.setState(this.step3);
        this.setState(this.step4);
        this.setState(this.step5);
      }

      // Reduce currentStep after a step was executed
      this.setState((state) => { return { currentStep: state.currentStep -= 1 } });
    }
  };

  stepReset = () => {
    return {
      graphVis: { nodes: [], edges: [] },
      description: '',
      repeatBoxHidden: true,
      repeatBoxContent: '',
    }
  };

  step1 = () => {
    return {
      graphVis: {
        nodes: [
          { id: 1, x: -180, y: -40, color: { background: '#ffff08' }, label: '   ' },
          { id: 2, x: -40, y: -100, color: { background: '#ffff08' }, label: ' x ' },
          { id: 3, x: -30, y: 50, color: { background: '#ffff08' }, label: '   ' },
          { id: 4, x: 110, y: -50, color: { background: '#ffff08' }, label: ' y ' },
          { id: 5, x: 120, y: 80, color: { background: '#ffff08' }, label: '   ' },
        ],
        edges: [
          { id: 1, from: 1, to: 2 },
          { id: 2, from: 2, to: 3 },
          { id: 3, from: 2, to: 4, label: 'e' },
          { id: 4, from: 3, to: 5 },
          { id: 5, from: 4, to: 5 },
        ],
      },
    }
  };

  step2 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, '#ffff08', ' u ');
    newNodes = this.updateNode(newNodes, 1, '#ffff08', ' x ');
    newNodes = this.updateNode(newNodes, 3, '#ffff08', ' y ');
    newNodes = this.updateNode(newNodes, 4, '#ffff08', ' v ');

    let newEdges = this.updateEdge(state.graphVis.edges, 2, '#000000', 1, false, ' e ');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step3 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, '#B39DDB', ' u ');
    newNodes = this.updateNode(newNodes, 1, '#B39DDB', ' x ');
    newNodes = this.updateNode(newNodes, 3, '#B39DDB', ' y ');
    newNodes = this.updateNode(newNodes, 4, '#B39DDB', ' v ');

    let newEdges = this.updateEdge(state.graphVis.edges, 0, '#B39DDB', 2, false, undefined);
    newEdges = this.updateEdge(newEdges, 2, '#B39DDB', 2, false, ' e ');
    newEdges = this.updateEdge(newEdges, 4, '#B39DDB', 2, false, undefined);

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step4 = (state) => {
    let newNodes = this.addObjectArray(state.graphVis.nodes, [
      { id: 6, x: 220, y: -40, color: { background: '#B39DDB' }, label: ' u ' },
      { id: 7, x: 360, y: -100, color: { background: '#B39DDB' }, label: ' x ' },
      { id: 8, x: 370, y: 50, color: { background: '#B39DDB' }, label: '   ' },
      { id: 9, x: 510, y: -50, color: { background: '#FFFF08' }, label: ' y ' },
      { id: 10, x: 520, y: 80, color: { background: '#B39DDB' }, label: ' v ' },
    ]);

    let newEdges = this.addObjectArray(state.graphVis.edges, [
      { id: 6, from: 6, to: 7, color: { color: '#B39DDB', hover: '#B39DDB' }, width: 2 },
      { id: 7, from: 7, to: 8, color: { color: '#B39DDB', hover: '#B39DDB' }, width: 2 },
      {
        id: 8,
        from: 7,
        to: 9,
        color: { color: 'red', hover: 'red' },
        width: 2,
        dashes: [8, 8],
        label: ' e ',
      },
      { id: 9, from: 8, to: 10, color: { color: '#B39DDB', hover: '#B39DDB' }, width: 2 },
      { id: 10, from: 9, to: 10 },
    ]);

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step5 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, '#FFFF08', '   ');
    newNodes = this.updateNode(newNodes, 1, '#81C784', ' x ');
    newNodes = this.updateNode(newNodes, 2, '#81C784', '   ');
    newNodes = this.updateNode(newNodes, 3, '#81C784', ' y ');
    newNodes = this.updateNode(newNodes, 4, '#81C784', '   ');
    newNodes = this.updateNode(newNodes, 5, '#FFFF08', '   ');
    newNodes = this.updateNode(newNodes, 6, '#81C784', ' x ');
    newNodes = this.updateNode(newNodes, 7, '#81C784', '   ');
    newNodes = this.updateNode(newNodes, 8, '#81C784', ' y ');
    newNodes = this.updateNode(newNodes, 9, '#81C784', '   ');

    let newEdges = this.updateEdge(state.graphVis.edges, 0, '#000000', 1, false, undefined);
    newEdges = this.updateEdge(newEdges, 1, '#81C784', 3, false, undefined);
    newEdges = this.updateEdge(newEdges, 2, '#000000', 1, false, ' e ');
    newEdges = this.updateEdge(newEdges, 3, '#81C784', 3, false, undefined);
    newEdges = this.updateEdge(newEdges, 4, '#81C784', 3, false, undefined);
    newEdges = this.updateEdge(newEdges, 5, '#000000', 1, false, undefined);
    newEdges = this.updateEdge(newEdges, 6, '#81C784', 3, false, undefined);
    newEdges = this.updateEdge(newEdges, 7, '#FFFFFF', 2, false, '   ');
    newEdges = this.updateEdge(newEdges, 8, '#81C784', 3, false, undefined);
    newEdges = this.updateEdge(newEdges, 9, '#81C784', 3, false, undefined);

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step7 = () => {
    let timeout1 = setTimeout(() => { this.setState(this.step7a); }, 500);
    let timeout2 = setTimeout(() => { this.setState(this.step7b); }, 2000);

    this.setState({ timeouts: [timeout1, timeout2] });
  };

  step7a = (state) => {
    let newEdges = this.updateEdge(state.graphVis.edges, 2, '#81C784', 3, false, ' e ');
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step7b = (state) => {
    let newEdges = this.updateEdge(state.graphVis.edges, 2, '#000000', 1, false, ' e ');
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
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

export default Exercise20;
