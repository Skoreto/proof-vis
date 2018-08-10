import React from 'react';
import {
  initialExerciseState,
  events,
  palette,
} from '../../../functionality/GlobalExerciseConstants';
import { scroller } from 'react-scroll';
import { constants } from './constants';
import {
  updateNode,
  updateEdge,
  addObjectArray,
  clearAllTimers,
  updateCurrentStep,
  handlerSketchAllowance,
  handlerSelectedTool,
  handlerDrawingDialog,
  getScrollOptions,
} from '../../../functionality/GraphFunctions';
import ExerciseWrapper from '../../../UI/ExerciseWrapper/ExerciseWrapper';

class Exercise19 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialExerciseState;
    this.updateNode = updateNode.bind(this);
    this.updateEdge = updateEdge.bind(this);
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
          break;
        } 
        case 1: {
          scroller.scrollTo('proofStepPanel2', getScrollOptions(window.scrollY));
          break;
        }
        case 3: {
          // this.setState(this.step4);
          scroller.scrollTo('proofStepPanel3', getScrollOptions(window.scrollY));
          break;
        }
        case 4: {
          // this.setState(this.step5);
          scroller.scrollTo('proofStepPanel4', getScrollOptions(window.scrollY));
          break;
        }
        // case 5:
        //   // this.setState(this.step4);
        //   // this.setState(this.step6);
        //   scroller.scrollTo('proofStepPanel5', getScrollOptions(window.scrollY));
        //   break;
        case 6: {
          // this.setState(this.step4);
          // this.setState(this.step7);
          scroller.scrollTo('proofStepPanel5', getScrollOptions(window.scrollY));
          break;
        }
        case 7: {
          // this.setState(this.step4);
          // this.setState(this.step7);
          this.setState(this.step8);
          scroller.scrollTo('proofStepPanel7', getScrollOptions(window.scrollY));
          break;
        }
        case 8: {
          this.setState(this.colorReset);
          this.setState(this.step9);
          scroller.scrollTo('proofStepPanel8', getScrollOptions(window.scrollY));
          break;
        }
        case 9: {
          this.setState(this.colorReset);
          this.setState(this.step10);
          scroller.scrollTo('proofStepPanel9', getScrollOptions(window.scrollY));
          break;
        }
        case 10: {
          this.setState(this.colorReset);
          this.setState(this.step11);
          scroller.scrollTo('proofStepPanel10', getScrollOptions(window.scrollY));
          break;
        }
        case 11: {
          this.setState(this.step12);
          scroller.scrollTo('proofStepPanel11', getScrollOptions(window.scrollY));
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
        case 1:
          this.setState({ btnPrevD: true });
          this.setState(this.stepReset);
          break;

        case 2:
          this.setState(this.stepReset);
          this.setState(this.step1SVGContent);
          this.setState(this.step1Texts);
          scroller.scrollTo('proofStepPanel1', getScrollOptions(window.scrollY));
          break;
      
        default:
          break;
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
        { id: 2, from: 2, to: 3, color: { color: palette.green }, width: 3 },
        { id: 3, from: 2, to: 4, color: { color: palette.green }, width: 3 },
        { id: 4, from: 3, to: 5, color: { color: palette.green }, width: 3 },
        { id: 5, from: 4, to: 6, color: { color: palette.green }, width: 3 },
        { id: 6, from: 5, to: 7, color: { color: palette.green }, width: 3, label: 'e' },
        { id: 7, from: 6, to: 7, color: { color: palette.green }, width: 3 },
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
    
    let newEdges = this.updateEdge(state.edges, 5, palette.purple, 3, false, 'e');

    return { nodes: newNodes, edges: newEdges };
  };

  step10 = (state) => {
    let newNodes = this.updateNode(state.nodes, 1, palette.purple, '');
    newNodes = this.updateNode(newNodes, 2, palette.purple, '');
    newNodes = this.updateNode(newNodes, 3, palette.purple, '');
    newNodes = this.updateNode(newNodes, 4, palette.purple, ' x ');
    newNodes = this.updateNode(newNodes, 5, palette.purple, '');
    newNodes = this.updateNode(newNodes, 6, palette.purple, ' y ');
    
    let newEdges = this.updateEdge(state.edges, 1, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 2, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 3, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 4, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 6, palette.purple, 3, false, '');

    return { nodes: newNodes, edges: newEdges };
  };

  step11 = (state) => {
    let newNodes = this.updateNode(state.nodes, 0, palette.yellow, ' u ');
    newNodes = this.updateNode(newNodes, 7, palette.yellow, ' v ');

    return { nodes: newNodes };
  };

  step12 = (state) => {
    let newNodes = this.updateNode(state.nodes, 0, palette.purple, ' u ');
    newNodes = this.updateNode(newNodes, 1, palette.purple, '');
    newNodes = this.updateNode(newNodes, 3, palette.purple, '');
    newNodes = this.updateNode(newNodes, 5, palette.purple, ' x ');
    newNodes = this.updateNode(newNodes, 6, palette.purple, ' y ');
    newNodes = this.updateNode(newNodes, 7, palette.purple, ' v ');
    
    let newEdges = this.updateEdge(state.edges, 0, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 2, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 4, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 5, palette.red, 3, false, 'e');
    newEdges = this.updateEdge(newEdges, 6, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 7, palette.purple, 3, false, '');

    return { nodes: newNodes, edges: newEdges };
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

export default Exercise19;
