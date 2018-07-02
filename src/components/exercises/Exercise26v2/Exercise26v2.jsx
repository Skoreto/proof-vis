import React from 'react';
import {
  initialExerciseState,
  events,
  palette,
} from '../../../functionality/GlobalExerciseConstants';
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
  updateEdgeWithArrow,
  clearAllTimers,
  handlerSketchAllowance,
  handlerSelectedTool,
} from '../../../functionality/GraphFunctions';
import ExerciseWrapper from '../../../components/UI/ExerciseWrapper/ExerciseWrapper';
import MN from '../../../components/MathJax/MathJaxNode';

class Exercise26gen extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialExerciseState;
    this.updateNode = updateNode.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
    this.clearAllTimers = clearAllTimers.bind(this);
    this.handlerSketchAllowance = handlerSketchAllowance.bind(this);
    this.handlerSelectedTool = handlerSelectedTool.bind(this);
  }

  nextStep = () => {
    if (this.state.currentStep < 5) {
      if (this.state.currentStep === 0) {
        this.setState({ btnPrevD: false });
        this.setState(this.step1);
        this.setState(this.step1Texts);
      }

      if (this.state.currentStep === 1) {
        this.setState(this.step2);
        this.setState(this.step2Texts);
      }

      if (this.state.currentStep === 2) {
        this.step3();
        let interval1 = setInterval(this.step3, 3000);
        this.setState({ intervals: [interval1] });
        this.setState(this.step3Texts);
      }

      if (this.state.currentStep === 3) {
        this.clearAllTimers(this.state);
        this.step4();
        let interval2 = setInterval(this.step4, 3000);
        this.setState({ intervals: [interval2] });
        this.setState(this.step4Texts);
      }

      if (this.state.currentStep === 4) {
        this.setState({ btnNextD: true });
        this.clearAllTimers(this.state);
        this.setState(this.step4a);
        this.setState(this.step5Texts);
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
        this.setState(this.step1Texts);
      }

      if (this.state.currentStep === 3) {
        this.clearAllTimers(this.state);
        this.setState(this.stepReset);
        this.setState(this.step1);
        this.setState(this.step2);
        this.setState(this.step2Texts);
      }

      if (this.state.currentStep === 4) {
        this.clearAllTimers(this.state);
        this.setState(this.stepReset);
        this.setState(this.step1);
        this.setState(this.step2);
        this.step3();
        let interval1 = setInterval(this.step3, 3000);
        this.setState({ intervals: [interval1] });
        this.setState(this.step3Texts);
      }

      if (this.state.currentStep === 5) {
        this.setState({ btnNextD: false });
        this.clearAllTimers(this.state);
        this.step4();
        let interval2 = setInterval(this.step4, 3000);
        this.setState({ intervals: [interval2] });
        this.setState(this.step4Texts);
      }

      // Reduce currentStep after a step was executed
      this.setState((state) => { return { currentStep: state.currentStep -= 1 } });
    }
  };

  repeatStep = () => { };

  stepReset = () => {
    return {
      graphVis: { nodes: [], edges: [] },
      description: '',
      repeatBoxHidden: true,
      repeatBoxContent: '',
    };
  };

  step1 = () => {
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
          { id: 3, from: 2, to: 4 },
          { id: 4, from: 4, to: 5 },
          { id: 5, from: 4, to: 6 },
          { id: 6, from: 1, to: 7 },
          { id: 7, from: 7, to: 8 },
        ]
      }
    };
  };

  step1Texts = () => {
    const description = (<p>Příklad grafu <MN>G</MN>, který je strom.</p>);
    const repeatBox = (
      <div>
        <p>
          VĚTA O STROMECH (4.1)
          <br />Pro každý graf <MN>G=(V,E)</MN> jsou následující podmínky ekvivalentní:
        </p>
        <p>
          I. Graf <MN>G</MN> je strom.
          <br />II. Pro každé dva vrcholy <MN>u,v \in V</MN> existuje právě jedna cesta z vrcholu <MN>u</MN> do vrcholu <MN>v</MN>.
        </p>
      </div>
    );

    return { description: description, repeatBoxHidden: false, repeatBoxContent: repeatBox };
  };

  // step1SVGContent = () => {
  //     const svgContent = (
  //         <svg>
  //             <text textAnchor={'middle'} x={300} y={50} stroke={'black'} strokeWidth={1} fontSize={22}>
  //                 Zkouška znaků &forall; ⇒ ⇔ <tspan font-style='italic'>&isin; italic</tspan>
  //             </text>
  //             <g>
  //                 <rect x={100} y={100} width={100} height={30} fill={'green'} strokeWidth={2} opacity={0.6} />
  //                 <text x={120} y={125} stroke={'black'} strokeWidth={1} fontSize={22}>
  //                 Graf <tspan font-style='italic'>G</tspan>
  //                 </text>
  //             </g>
  //         </svg>
  //     );

  //     return {isSVGCoverShowed: true, svgContent: svgContent}
  // }

  step2 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 1, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 3, palette.purple, '   ');
    newNodes = this.updateNode(newNodes, 5, palette.purple, ' v ');
    newNodes = this.updateNode(newNodes, 6, palette.purple, ' u ');

    let newEdges = this.updateEdge(state.graphVis.edges, 0, palette.purple, 2, false, undefined);
    newEdges = this.updateEdge(newEdges, 2, palette.purple, 2, false, undefined);
    newEdges = this.updateEdge(newEdges, 4, palette.purple, 2, false, undefined);
    newEdges = this.updateEdge(newEdges, 5, palette.purple, 2, false, undefined);

    return { graphVis: { nodes: newNodes, edges: newEdges }, descriptionBox: '' };
  };

  step2Texts = () => {
    const description = (
      <p>Mezi libovolně zvolenými vrcholy <MN>u,v</MN> existuje jediná cesta.</p>
    );
    const repeatBox = (
      <div>
        <p>
          VĚTA O STROMECH (4.1)
          <br />Pro každý graf <MN>G=(V,E)</MN> jsou následující podmínky ekvivalentní:
        </p>
        <p>
          I. Graf <MN>G</MN> je strom.<br />
          II. Pro každé dva vrcholy <MN>u,v \in V</MN> existuje právě jedna cesta z vrcholu <MN>u</MN> do vrcholu <MN>v</MN>.
        </p>
      </div>
    );
    return { description: description, repeatBoxHidden: false, repeatBoxContent: repeatBox };
  };

  step3 = () => {
    this.setState(this.step3b);
    let timeout3a = setTimeout(() => { this.setState(this.step3a); }, 1000);
    let timeout3b = setTimeout(() => { this.setState(this.step3b); }, 2000);

    this.setState({
      timeouts: [timeout3a, timeout3b], repeatBoxHidden: true, repeatBoxContent: ''
    });
  };

  step3a = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 1, palette.purple, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.purple, ' y ');
    let newEdges = this.updateEdge(state.graphVis.edges, 2, palette.red, 2, [8, 8], ' e ');
    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step3b = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 1, palette.purple, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.purple, ' y ');
    let newEdges = this.updateEdge(state.graphVis.edges, 2, palette.purple, 2, false, ' e ');
    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step3Texts = () => {
    const description = (
      <p>Libovolně zvolená hrana <MN>{'e=\\{x,y\\}'}</MN> z cesty <MN>u</MN>-<MN>v</MN>.</p>
    );
    return { description: description };
  };

  step4 = () => {
    this.setState(this.step3a);
    let timeout4a = setTimeout(() => { this.setState(this.step4a); }, 1000);
    let timeout4b = setTimeout(() => { this.setState(this.step3a); }, 2000);

    this.setState({ 
      timeouts: [timeout4a, timeout4b], repeatBoxHidden: true, repeatBoxContent: '' 
    });
  };

  step4a = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 1, palette.purple, ' x ');
    newNodes = this.updateNode(newNodes, 3, palette.purple, ' y ');
    let newEdges = this.updateEdge(state.graphVis.edges, 2, palette.white, 2, false, '   ');
    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step4Texts = () => {
    const description = (
      <p>
        Odebráním hrany <MN>e</MN> se vrcholy <MN>u</MN> a <MN>v</MN> ocitnou v různých komponentách souvislosti.
      </p>
    );
    return { description: description };
  };

  step5Texts = () => {
    const description = (<p>Graf <MN>G-e</MN> není souvislý a není tedy ani stromem.</p>);
    const repeatBox = (
      <div>
        <p>
          DEFINICE STROMU (4.3)
          <br />Strom je <u>souvislý</u> graf, který neobsahuje kružnici.
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
      />
    );
  }
}

export default Exercise26gen;
