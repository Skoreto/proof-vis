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
  claimPanel,
  proofPanels,
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

class Exercise24 extends React.Component {
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
          this.setState(this.step2);
          this.setState(this.step2Texts);
          scroller.scrollTo('proofPanel2', getScrollOptions(window.scrollY));
          break;
      
        case 2:
          this.setState(this.step3);
          this.setState(this.step3Texts);
          scroller.scrollTo('proofPanel3', getScrollOptions(window.scrollY));
          break;

        case 3:
          this.step4();
          let interval = setInterval(this.step4, 3000);
          this.setState({ intervals: [interval] });
          this.setState(this.step4Texts);
          scroller.scrollTo('proofPanel4', getScrollOptions(window.scrollY));
          break;

        case 4:
          this.clearAllTimers(this.state);
          this.setState(this.step5);
          this.setState(this.step5Texts);
          scroller.scrollTo('proofPanel5', getScrollOptions(window.scrollY));
          break;

        case 5:
          this.setState(this.step6);
          this.setState(this.step6Texts);
          scroller.scrollTo('proofPanel6', getScrollOptions(window.scrollY));
          break;

        case 6:
          this.setState(this.step7);
          this.setState(this.step7Texts);
          scroller.scrollTo('proofPanel7', getScrollOptions(window.scrollY));
          break;

        case 7:
          this.setState({ btnNextD: true });
          this.setState(this.step8Texts);
          scroller.scrollTo('proofPanel8', getScrollOptions(window.scrollY));
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
      
        case 3:
          this.setState(this.step2);
          this.setState(this.step2Texts);
          scroller.scrollTo('proofPanel2', getScrollOptions(window.scrollY));
          break;

        case 4:
          this.clearAllTimers(this.state);
          this.setState(this.stepReset);
          this.setState(this.step2);
          this.setState(this.step3);
          this.setState(this.step3Texts);
          scroller.scrollTo('proofPanel3', getScrollOptions(window.scrollY));
          break;

        case 5:
          this.setState(this.stepReset);
          this.setState(this.step2);
          this.setState(this.step3);
          this.step4();
          let interval = setInterval(this.step4, 3000);
          this.setState({ intervals: [interval] });
          this.setState(this.step4Texts);
          scroller.scrollTo('proofPanel4', getScrollOptions(window.scrollY));
          break;

        case 6:
          this.setState(this.step5);
          this.setState(this.step5Texts);
          scroller.scrollTo('proofPanel5', getScrollOptions(window.scrollY));
          break;

        case 7:
          this.setState(this.step6);
          this.setState(this.step6Texts);
          scroller.scrollTo('proofPanel6', getScrollOptions(window.scrollY));
          break;

        case 8:
          this.setState({ btnNextD: false });
          this.setState(this.step7);
          this.setState(this.step7Texts);
          scroller.scrollTo('proofPanel7', getScrollOptions(window.scrollY));
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

    return {
      isSVGCoverShowed: true,
      svgContent: svgContent,
      repeatBoxHidden: true,
      repeatBoxContent: '',
    }
  }

  step1Texts = () => {
    const description = (<p>Provedení obměny původního výroku.</p>);
    return { description: description };
  };

  step2 = () => {
    return {
      graphVis: {
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
      },
      isSVGCoverShowed: false,
    };
  };

  step2Texts = () => {
    const description = (<p>Příklad nesouvislého grafu <MN>G</MN>, který není strom.</p>);
    const repeatBox = (
      <div>
        <p>
          DEFINICE STROMU (4.2)
          <br />Strom je <u>souvislý</u> graf, který neobsahuje kružnici.
        </p>
      </div>
    );

    return { description: description, repeatBoxHidden: false, repeatBoxContent: repeatBox };
  };

  step3 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 1, palette.yellow, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.yellow, ' y ');

    let newEdges = this.addObjectArray(state.graphVis.edges, [
      { id: 7, from: 2, to: 4, label: 'e' },
      { id: 8, from: 4, to: 7 },
    ]);

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step3Texts = () => {
    const description = (
      <p>
        Příklad grafu <MN>G</MN>, kde existuje hrana <MN>{'e=\\{x,y\\}'}</MN>, která není most.
      </p>
    );
    return { description: description, repeatBoxHidden: true, repeatBoxContent: '' };
  };

  step4 = () => {
    this.setState(this.step4a);
    let timeout4a = setTimeout(() => { this.setState(this.step4b); }, 1000);
    let timeout4b = setTimeout(() => { this.setState(this.step4a); }, 2000);

    this.setState({ timeouts: [timeout4a, timeout4b] });
  };

  step4a = (state) => {
    let newEdges = this.updateEdge(state.graphVis.edges, 6, palette.red, 2, [8, 8], 'e');
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step4b = (state) => {
    let newEdges = this.updateEdge(state.graphVis.edges, 6, palette.white, 2, false, '');
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step4Texts = () => {
    const description = (
      <p>
        Po odebrání hrany <MN>e</MN> zůstanou její vrcholy <MN>x</MN> a <MN>y</MN> stále v jedné souvislé komponentě.
      </p>
    );
    const repeatBox = (
      <div>
        <p>DEFINICE MOSTU (1.11)
          <br />Nechť je dán graf <MN>G=(V,E)</MN>, vrchol <MN>v \in V</MN> a hrana <MN>e \in E</MN>.
        </p>
        <p>
          Hrana <MN>e</MN> je most grafu <MN>G</MN>, jestliže graf <MN>G-e</MN> má více komponent než graf <MN>G</MN>.
        </p>
      </div>
    );

    return { description: description, repeatBoxHidden: false, repeatBoxContent: repeatBox };
  };

  step5 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, palette.green, '   ');
    newNodes = this.updateNode(newNodes, 1, palette.green, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.green, ' y ');
    newNodes = this.updateNode(newNodes, 6, palette.green, '   ');
    
    let newEdges = this.updateEdge(state.graphVis.edges, 0, palette.green, 3, false, '');
    newEdges = this.updateEdge(newEdges, 4, palette.green, 3, false, '');
    newEdges = this.updateEdge(newEdges, 6, palette.white, 2, false, '');
    newEdges = this.updateEdge(newEdges, 7, palette.green, 3, false, '');
    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step5Texts = () => {
    const description = (
      <p>
        Po odebrání hrany <MN>e</MN> v grafu stále existuje také cesta mezi jejími vrcholy <MN>x</MN> a <MN>y</MN>.
      </p>
    );
    const repeatBox = (
      <div>
        <p>DEFINICE SOUVISLÉHO GRAFU A KOMPONENTY GRAFU (1.9)
        </p>
        <p>
          <u>Souvislý graf</u> je graf, ve kterém mezi každými jeho dvěma vrcholy existuje cesta.
        </p>
        <p>
          <u>Komponenta grafu</u> je každý jeho maximální souvislý podgraf, tj. souvislý podgraf, který není podgrafem žádného jiného souvislého grafu.
        </p>
      </div>
    );

    return { description: description, repeatBoxHidden: false, repeatBoxContent: repeatBox };
  };

  step6 = (state) => {
    let newEdges = this.updateEdge(state.graphVis.edges, 6, palette.black, 1, false, 'e');
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step6Texts = () => {
    const description = (
      <p>
        Cesta <MN>{'P_{xy}'}</MN> existovala také v grafu <MN>G</MN>.
      </p>
    );
    return { description: description, repeatBoxHidden: true, repeatBoxContent: '' };
  };

  step7 = (state) => {
    let newEdges = this.updateEdge(state.graphVis.edges, 6, palette.green, 3, false, 'e');
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step7Texts = () => {
    const description = (
      <p>
        Cesta <MN>{'P_{xy}'}</MN> spolu s hranou <MN>e</MN> tvoří kružnici v grafu <MN>G</MN>.
      </p>
    );
    const repeatBox = (
      <div>
        <p>
          KRUŽNICE (Definice 1.8)
          <br />Kružnice délky <MN>k, k \geq 3</MN>, v grafu <MN>G</MN> je posloupnost <MN>{'(v_{0}, e_{1}, v_{1},...,e_{k}, v_{0})'}</MN>, kde <MN>{'e_{i}=\\{v_{i-1}, v_{i}\\}'}</MN>, <MN>i=1,...,k-1</MN>, <MN>{'e_{k}=\\{v_{k-1}, v_{0}\\}'}</MN> a pro <MN>i \neq j</MN> platí <MN>{'v_{i} \\neq v_{j}'}</MN>.
        </p>
      </div>
    );

    return { description: description, repeatBoxHidden: false, repeatBoxContent: repeatBox };
  };

  step8Texts = () => {
    const description = (<p></p>);
    const repeatBox = (
      <div>
        <p>
          DEFINICE STROMU (4.2)
          <br />Strom je souvislý graf, který <u>neobsahuje kružnici</u>.
        </p>
      </div>
    );

    return { description: description, repeatBoxHidden: false, repeatBoxContent: repeatBox };
  };

  render() {
    return (
      <ExerciseWrapper
        {...this.state}
        events={events}
        headingTitle={headingTitle}
        breadcrumbsCurrent={breadcrumbsCurrent}
        claimPanel={claimPanel}
        proofPanels={proofPanels}
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

export default Exercise24;
