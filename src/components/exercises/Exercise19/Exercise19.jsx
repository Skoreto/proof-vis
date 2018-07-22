import React from 'react';
import {
  initialExerciseState,
  events,
  palette,
} from '../../../functionality/GlobalExerciseConstants';
import { scroller } from 'react-scroll';
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
  addObjectArray,
  clearAllTimers,
  handlerSketchAllowance,
  handlerSelectedTool,
  handlerDrawingDialog,
  getScrollOptions,
} from '../../../functionality/GraphFunctions';
import ExerciseWrapper from '../../../components/UI/ExerciseWrapper/ExerciseWrapper';
import MN from '../../../components/MathJax/MathJaxNode';

class Exercise19 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialExerciseState;
    this.updateNode = updateNode.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.addObjectArray = addObjectArray.bind(this);
    this.clearAllTimers = clearAllTimers.bind(this);
    this.handlerSketchAllowance = handlerSketchAllowance.bind(this);
    this.handlerSelectedTool = handlerSelectedTool.bind(this);
    this.handlerDrawingDialog = handlerDrawingDialog.bind(this);
  }

  nextStep = () => {
    if (this.state.currentStep < 8) {
      switch (this.state.currentStep) {
        case 0:
          this.setState({ btnPrevD: false });
          this.setState(this.step1SVGContent);
          this.setState(this.step1Texts);
          break;

        case 1:
          this.setState(this.step2SVGContent);
          scroller.scrollTo('proofPanel2', getScrollOptions(window.scrollY));
          break;

        case 2:
          this.setState(this.step3SVGContent);
          scroller.scrollTo('proofPanel3', getScrollOptions(window.scrollY));
          break;

        case 3:
          this.setState(this.step4);
          scroller.scrollTo('proofPanel4', getScrollOptions(window.scrollY));
          break;
      
        case 4:
          this.setState(this.step5);
          scroller.scrollTo('proofPanel4', getScrollOptions(window.scrollY));
          break;
      
        default:
          break;
      }

      // Increase currentStep after a step was executed
      this.setState((state) => { return { currentStep: state.currentStep += 1 } });
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
          scroller.scrollTo('proofPanel1', getScrollOptions(window.scrollY));
          break;
      
        default:
          break;
      }

      // Reduce currentStep after a step was executed
      this.setState((state) => { return { currentStep: state.currentStep -= 1 } });
    }
  };

  stepReset = () => {
    return {
      graphVis: { nodes: [], edges: [] },
      description: '',
      isSVGCoverShowed: false,
      repeatBoxHidden: true,
      repeatBoxContent: '',    
    };
  };

  step1SVGContent = () => {
    const svgContent = (
      <svg>
        <text textAnchor={'middle'} x={325} y={40} stroke={'black'} strokeWidth={0} fontSize={28}>
          &forall;<tspan fill={'green'}>A</tspan>⇒<tspan fill={'red'}>B</tspan>
        </text>
        <text textAnchor={'middle'} x={155} y={80} fill={'green'} strokeWidth={0} fontSize={26}>
          A: hrana <tspan fontStyle='italic'>e</tspan> je most
        </text>
        <text textAnchor={'middle'} x={325} y={120} fill={'red'} strokeWidth={0} fontSize={26}>
          B: v grafu <tspan fontStyle='italic'>G</tspan> neexistuje kružnice obsahující hranu <tspan fontStyle='italic'>e</tspan>
        </text>
      </svg>
    );

    return {
      isSVGCoverShowed: true,
      svgContent: svgContent,
      repeatBoxHidden: true,
      repeatBoxContent: '',
    }
  }

  step1Texts = () => {
    const description = (<p>Provedení negace původního výroku.</p>);
    return { description: description };
  };

  step2SVGContent = () => {
    const svgContent = (
      <svg>
        <text textAnchor={'middle'} x={325} y={40} stroke={'black'} strokeWidth={0} fontSize={28}>
          &forall;<tspan fill={'green'}>A</tspan>⇒<tspan fill={'red'}>B</tspan>
        </text>
        <text textAnchor={'middle'} x={155} y={80} fill={'green'} strokeWidth={0} fontSize={26}>
          A: hrana <tspan fontStyle='italic'>e</tspan> je most
        </text>
        <text textAnchor={'middle'} x={325} y={120} fill={'red'} strokeWidth={0} fontSize={26}>
          B: v grafu <tspan fontStyle='italic'>G</tspan> neexistuje kružnice obsahující hranu <tspan fontStyle='italic'>e</tspan>
        </text>
        <text textAnchor={'middle'} x={325} y={170} stroke={'black'} strokeWidth={0} fontSize={28}>
        &not;(&forall;<tspan fill={'green'}>A</tspan>⇒<tspan fill={'red'}>B</tspan>) ⇔ (&exist; A &and; &not; B)  
        </text>
        <text textAnchor={'middle'} x={155} y={220} fill={'green'} strokeWidth={0} fontSize={26}>
          A: hrana <tspan fontStyle='italic'>e</tspan> je most
        </text>
        <text textAnchor={'middle'} x={325} y={260} fill={'red'} strokeWidth={0} fontSize={26}>
          &not;B: v grafu <tspan fontStyle='italic'>G</tspan> existuje kružnice obsahující hranu <tspan fontStyle='italic'>e</tspan>
        </text>
      </svg>
    );

    return {
      isSVGCoverShowed: true,
      svgContent: svgContent,
      repeatBoxHidden: true,
      repeatBoxContent: '',
    }
  }

  step3SVGContent = () => {
    const svgContent = (
      <svg>
        <text textAnchor={'middle'} x={325} y={40} stroke={'black'} strokeWidth={0} fontSize={28}>
          &forall;<tspan fill={'green'}>A</tspan>⇒<tspan fill={'red'}>B</tspan>
        </text>
        <text textAnchor={'middle'} x={155} y={80} fill={'green'} strokeWidth={0} fontSize={26}>
          A: hrana <tspan fontStyle='italic'>e</tspan> je most
        </text>
        <text textAnchor={'middle'} x={325} y={120} fill={'red'} strokeWidth={0} fontSize={26}>
          B: v grafu <tspan fontStyle='italic'>G</tspan> neexistuje kružnice obsahující hranu <tspan fontStyle='italic'>e</tspan>
        </text>
        <text textAnchor={'middle'} x={325} y={170} stroke={'black'} strokeWidth={0} fontSize={28}>
        &not;(&forall;<tspan fill={'green'}>A</tspan>⇒<tspan fill={'red'}>B</tspan>) ⇔ (&exist; A &and; &not; B)  
        </text>
        <text textAnchor={'middle'} x={155} y={220} fill={'green'} strokeWidth={0} fontSize={26}>
          A: hrana <tspan fontStyle='italic'>e</tspan> je most
        </text>
        <text textAnchor={'middle'} x={325} y={260} fill={'red'} strokeWidth={0} fontSize={26}>
          &not;B: v grafu <tspan fontStyle='italic'>G</tspan> existuje kružnice obsahující hranu <tspan fontStyle='italic'>e</tspan>
        </text>
        <text textAnchor={'middle'} x={325} y={330} strokeWidth={0} fontSize={26}>
          Existuje graf G, ve kterém <tspan fill={'green'}>hrana e je most</tspan>, a zároveň 
          <tspan x={325} dy={40} fill={'red'}> v grafu G existuje kružnice obsahující hranu e</tspan>.
        </text>
      </svg>
    );

    return {
      isSVGCoverShowed: true,
      svgContent: svgContent,
      repeatBoxHidden: true,
      repeatBoxContent: '',
    }
  }

  step4 = () => {
    return {
      graphVis: {
        nodes: [
          { id: 1, x: -250, y: 0, color: { background: palette.yellow }, label: '   ' },
          { id: 2, x: -130, y: -80, color: { background: palette.yellow }, label: '   ' },
          { id: 3, x: -130, y: 80, color: { background: palette.yellow }, label: '   ' },
          { id: 4, x: 0, y: -150, color: { background: palette.yellow }, label: '   ' },
          { id: 5, x: 0, y: 150, color: { background: palette.yellow }, label: ' x ' },
          { id: 6, x: 130, y: -80, color: { background: palette.yellow }, label: '   ' },
          { id: 7, x: 130, y: 80, color: { background: palette.yellow }, label: ' y ' },
          { id: 8, x: 250, y: 0, color: { background: palette.yellow }, label: '   ' },
        ],
        edges: [
          { id: 1, from: 1, to: 2 },
          { id: 2, from: 2, to: 3 },
          { id: 3, from: 2, to: 4},
          { id: 4, from: 3, to: 5 },
          { id: 5, from: 4, to: 6 },
          { id: 6, from: 5, to: 7, label: 'e' },
          { id: 7, from: 6, to: 7 },
          { id: 8, from: 7, to: 8 },
        ],
      },
      isSVGCoverShowed: false,
    }
  };

  // step5 = () => {
  //   return {
  //     graphVis: {
  //       nodes: [
  //         { id: 1, x: -250, y: 0, color: { background: palette.yellow }, label: '   ' },
  //         { id: 2, x: -130, y: -80, color: { background: palette.green }, label: '   ' },
  //         { id: 3, x: -130, y: 80, color: { background: palette.green }, label: '   ' },
  //         { id: 4, x: 0, y: -150, color: { background: palette.green }, label: '   ' },
  //         { id: 5, x: 0, y: 150, color: { background: palette.green }, label: ' x ' },
  //         { id: 6, x: 130, y: -80, color: { background: palette.green }, label: '   ' },
  //         { id: 7, x: 130, y: 80, color: { background: palette.green }, label: ' y ' },
  //         { id: 8, x: 250, y: 0, color: { background: palette.yellow }, label: '   ' },
  //       ],
  //       edges: [
  //         { id: 1, from: 1, to: 2 },
  //         { id: 2, from: 2, to: 3 },
  //         { id: 3, from: 2, to: 4},
  //         { id: 4, from: 3, to: 5 },
  //         { id: 5, from: 4, to: 6 },
  //         { id: 6, from: 5, to: 7, label: 'e' },
  //         { id: 7, from: 6, to: 7 },
  //         { id: 8, from: 7, to: 8 },
  //       ],
  //     },
  //     isSVGCoverShowed: false,
  //   }
  // };

  step5 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 1, palette.green, 'x');
    newNodes = this.updateNode(newNodes, 2, palette.green, 'y');
    newNodes = this.updateNode(newNodes, 3, palette.green, '');
    
    let newEdges = this.updateEdge(state.graphVis.edges, 2, palette.green, 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step6 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 4, palette.purple, 'x');
    newNodes = this.updateNode(newNodes, 6, palette.purple, 'y');
    
    let newEdges = this.updateEdge(state.graphVis.edges, 5, palette.purple, 3, false, 'e');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
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
        handleDrawingDialog={
          () => this.setState(() => this.handlerDrawingDialog(this.state.isDrawingDialogOpen))
        }
      />
    );
  }
}

export default Exercise19;
