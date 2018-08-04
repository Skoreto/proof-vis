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

class Exercise24 extends React.Component {
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
          this.setState(this.step1SVGContent);
          break;
        }
        case 1: {
          this.setState(this.step2);
          scroller.scrollTo('proofStepPanel2', getScrollOptions(window.scrollY));
          break;
        }
        case 2: {
          this.setState(this.step3);
          scroller.scrollTo('proofStepPanel3', getScrollOptions(window.scrollY));
          break;
        }
        case 3: {
          this.step4();
          let interval = setInterval(this.step4, 3000);
          this.setState({ intervals: [interval] });
          scroller.scrollTo('proofStepPanel4', getScrollOptions(window.scrollY));
          break;
        }
        case 4: {
          this.clearAllTimers(this.state);
          this.setState(this.step5);
          scroller.scrollTo('proofStepPanel5', getScrollOptions(window.scrollY));
          break;
        }
        case 5: {
          this.setState(this.step6);
          scroller.scrollTo('proofStepPanel6', getScrollOptions(window.scrollY));
          break;
        }
        case 6: {
          this.setState(this.step7);
          scroller.scrollTo('proofStepPanel7', getScrollOptions(window.scrollY));
          break;
        }
        case 7: {
          this.setState({ btnNextD: true });
          scroller.scrollTo('proofStepPanel8', getScrollOptions(window.scrollY));
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
          this.setState(this.step1SVGContent);
          scroller.scrollTo('proofStepPanel1', getScrollOptions(window.scrollY));
          break;
        }
        case 3: {
          this.setState(this.step2);
          scroller.scrollTo('proofStepPanel2', getScrollOptions(window.scrollY));
          break;
        }
        case 4: {
          this.clearAllTimers(this.state);
          this.setState(this.stepReset);
          this.setState(this.step2);
          this.setState(this.step3);
          scroller.scrollTo('proofStepPanel3', getScrollOptions(window.scrollY));
          break;
        }
        case 5: {
          this.setState(this.stepReset);
          this.setState(this.step2);
          this.setState(this.step3);
          this.step4();
          let interval = setInterval(this.step4, 3000);
          this.setState({ intervals: [interval] });
          scroller.scrollTo('proofStepPanel4', getScrollOptions(window.scrollY));
          break;
        }
        case 6: {
          this.setState(this.step5);
          scroller.scrollTo('proofStepPanel5', getScrollOptions(window.scrollY));
          break;
        }
        case 7: {
          this.setState(this.step6);
          scroller.scrollTo('proofStepPanel6', getScrollOptions(window.scrollY));
          break;
        }
        case 8: {
          this.setState({ btnNextD: false });
          this.setState(this.step7);
          scroller.scrollTo('proofStepPanel7', getScrollOptions(window.scrollY));
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
    return { nodes: [], edges: [], description: '', isSVGCoverShowed: false }; 
  };

  step1SVGContent = () => {
    const svgContent = (
      <svg>
        <text textAnchor={'middle'} x={155} y={40} fill={'green'} strokeWidth={0} fontSize={26}>
          A: graf <tspan fontStyle='italic'>G</tspan> je strom
        </text>
        <text textAnchor={'middle'} x={325} y={80} fill={'red'} strokeWidth={0} fontSize={26}>
          B: graf <tspan fontStyle='italic'>G</tspan> je souvislý a každá jeho hrana je most
        </text>
        <text textAnchor={'middle'} x={325} y={140} stroke={'black'} strokeWidth={0} fontSize={28}>
          (<tspan fill={'green'}>A</tspan>⇒<tspan fill={'red'}>B</tspan>) ⇔ (<tspan fill={'red'}>&not;B</tspan>&rArr;<tspan fill={'green'}>&not;A</tspan>)
        </text>
        <text textAnchor={'middle'} x={180} y={200} fill={'red'} strokeWidth={0} fontSize={26}>
          &not;B: <tspan fontStyle='italic'>G</tspan> není strom
        </text>
        <text textAnchor={'middle'} x={325} y={240} fill={'green'} strokeWidth={0} fontSize={26}>
          &not;A: graf <tspan fontStyle='italic'>G</tspan> je nesouvislý a existuje hrana <tspan fontStyle='italic'>e</tspan>,
        </text>
        <text textAnchor={'middle'} x={275} y={270} fill={'green'} strokeWidth={0} fontSize={26}>
          která není most v grafu <tspan fontStyle='italic'>G</tspan>
        </text>
        <text textAnchor={'middle'} x={325} y={330} strokeWidth={0} fontSize={26}>
          Jestliže <tspan fill={'red'}>G není strom</tspan>, pak <tspan fill={'green'}>graf G je nesouvislý</tspan>
          <tspan x={325} dy={40} fill={'green'}>nebo existuje hrana e, která není most v grafu G</tspan>.
        </text>
      </svg>
    );

    return { isSVGCoverShowed: true, svgContent: svgContent };
  }

  step2 = () => {
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
      ],
      isSVGCoverShowed: false,
    };
  };

  step3 = (state) => {
    let newNodes = this.updateNode(state.nodes, 1, palette.yellow, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.yellow, ' y ');

    let newEdges = this.addObjectArray(state.edges, [
      { id: 7, from: 2, to: 4, label: 'e' },
      { id: 8, from: 4, to: 7 },
    ]);

    return { nodes: newNodes, edges: newEdges };
  };

  step4 = () => {
    this.setState(this.step4a);
    let timeout4a = setTimeout(() => { this.setState(this.step4b); }, 1000);
    let timeout4b = setTimeout(() => { this.setState(this.step4a); }, 2000);

    this.setState({ timeouts: [timeout4a, timeout4b] });
  };

  step4a = (state) => {
    let newEdges = this.updateEdge(state.edges, 6, palette.red, 2, [8, 8], 'e');
    return { edges: newEdges };
  };

  step4b = (state) => {
    let newEdges = this.updateEdge(state.edges, 6, palette.white, 2, false, '');
    return { edges: newEdges };
  };

  step5 = (state) => {
    let newNodes = this.updateNode(state.nodes, 0, palette.green, '   ');
    newNodes = this.updateNode(newNodes, 1, palette.green, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.green, ' y ');
    newNodes = this.updateNode(newNodes, 6, palette.green, '   ');
    
    let newEdges = this.updateEdge(state.edges, 0, palette.green, 3, false, '');
    newEdges = this.updateEdge(newEdges, 4, palette.green, 3, false, '');
    newEdges = this.updateEdge(newEdges, 6, palette.white, 2, false, '');
    newEdges = this.updateEdge(newEdges, 7, palette.green, 3, false, '');
    return { nodes: newNodes, edges: newEdges };
  };

  step6 = (state) => {
    let newEdges = this.updateEdge(state.edges, 6, palette.black, 1, false, 'e');
    return { edges: newEdges };
  };

  step7 = (state) => {
    let newEdges = this.updateEdge(state.edges, 6, palette.green, 3, false, 'e');
    return { edges: newEdges };
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

export default Exercise24;
