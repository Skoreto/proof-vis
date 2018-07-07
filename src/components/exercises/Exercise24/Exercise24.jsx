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
  addObjectArray,
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
    this.addObjectArray = addObjectArray.bind(this);
    this.clearAllTimers = clearAllTimers.bind(this);
    this.handlerSketchAllowance = handlerSketchAllowance.bind(this);
    this.handlerSelectedTool = handlerSelectedTool.bind(this);
  }

  nextStep = () => {
    if (this.state.currentStep < 9) {
      switch (this.state.currentStep) {
        case 0:
          this.setState({ btnPrevD: false });
          this.setState(this.step1SVGContent);
          this.setState(this.step1Texts);
          break;

        case 1:
          this.setState(this.step2);
          this.setState(this.step2Texts);
          break;
      
        case 2:
          this.setState(this.step3);
          this.setState(this.step3Texts);
          break;

        case 3:
          this.step4();
          let interval = setInterval(this.step4, 3000);
          this.setState({ intervals: [interval] });
          this.setState(this.step4Texts);
          break;

        case 4:
          this.clearAllTimers(this.state);
          this.setState(this.step5);
          this.setState(this.step5Texts);
          break;

        case 5:
          this.setState(this.step6);
          this.setState(this.step6Texts);
          break;

        default:
          break;
      }

      // if (this.state.currentStep === 4) {
      //   this.setState({ btnNextD: true });
      //   this.clearAllTimers(this.state);
      //   this.setState(this.step4a);
      //   this.setState(this.step5Texts);
      // }

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
    const description = (<p>Příklad grafu <MN>G</MN>, kde existuje hrana <MN>{'e=\\{x,y\\}'}</MN>, která není most.</p>);
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

  step4 = () => {
    this.setState(this.step4a);
    let timeout4a = setTimeout(() => { this.setState(this.step4b); }, 1000);
    let timeout4b = setTimeout(() => { this.setState(this.step4a); }, 2000);

    this.setState({ 
      timeouts: [timeout4a, timeout4b], repeatBoxHidden: true, repeatBoxContent: '' 
    });
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
    return { description: description };
  };

  // step5Texts = () => {
  //   const description = (
  //     <p>
  //       Po odebrání hrany <MN>e</MN> v grafu stále existuje také cesta mezi jejími vrcholy <MN>x</MN> a <MN>y</MN>.
  //     </p>
  //   );
  //   return { description: description };
  // };

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
        Cesta <MN>Pxy</MN> existovala také v grafu <MN>G</MN>.
      </p>
    );
    return { description: description, repeatBoxHidden: true, repeatBoxContent: '' };
  };

  // step2 = (state) => {
  //   let newNodes = this.updateNode(state.graphVis.nodes, 0, palette.purple, '   ');
  //   newNodes = this.updateNode(newNodes, 1, palette.purple, '   ');
  //   newNodes = this.updateNode(newNodes, 3, palette.purple, '   ');
  //   newNodes = this.updateNode(newNodes, 5, palette.purple, ' v ');
  //   newNodes = this.updateNode(newNodes, 6, palette.purple, ' u ');

  //   let newEdges = this.updateEdge(state.graphVis.edges, 0, palette.purple, 2, false, undefined);
  //   newEdges = this.updateEdge(newEdges, 2, palette.purple, 2, false, undefined);
  //   newEdges = this.updateEdge(newEdges, 4, palette.purple, 2, false, undefined);
  //   newEdges = this.updateEdge(newEdges, 5, palette.purple, 2, false, undefined);

  //   return { graphVis: { nodes: newNodes, edges: newEdges }, descriptionBox: '' };
  // };

  // step2Texts = () => {
  //   const description = (
  //     <p>Mezi libovolně zvolenými vrcholy <MN>u,v</MN> existuje jediná cesta.</p>
  //   );
  //   const repeatBox = (
  //     <div>
  //       <p>
  //         VĚTA O STROMECH (4.1)
  //         <br />Pro každý graf <MN>G=(V,E)</MN> jsou následující podmínky ekvivalentní:
  //       </p>
  //       <p>
  //         I. Graf <MN>G</MN> je strom.<br />
  //         II. Pro každé dva vrcholy <MN>u,v \in V</MN> existuje právě jedna cesta z vrcholu <MN>u</MN> do vrcholu <MN>v</MN>.
  //       </p>
  //     </div>
  //   );
  //   return { description: description, repeatBoxHidden: false, repeatBoxContent: repeatBox };
  // };

  // step3 = () => {
  //   this.setState(this.step3b);
  //   let timeout3a = setTimeout(() => { this.setState(this.step3a); }, 1000);
  //   let timeout3b = setTimeout(() => { this.setState(this.step3b); }, 2000);

  //   this.setState({
  //     timeouts: [timeout3a, timeout3b], repeatBoxHidden: true, repeatBoxContent: ''
  //   });
  // };

  // step3a = (state) => {
  //   let newNodes = this.updateNode(state.graphVis.nodes, 1, palette.purple, ' x ');
  //   newNodes = this.updateNode(newNodes, 3, palette.purple, ' y ');
  //   let newEdges = this.updateEdge(state.graphVis.edges, 2, palette.red, 2, [8, 8], ' e ');
  //   return { graphVis: { nodes: newNodes, edges: newEdges } };
  // };

  // step3b = (state) => {
  //   let newNodes = this.updateNode(state.graphVis.nodes, 1, palette.purple, ' x ');
  //   newNodes = this.updateNode(newNodes, 3, palette.purple, ' y ');
  //   let newEdges = this.updateEdge(state.graphVis.edges, 2, palette.purple, 2, false, ' e ');
  //   return { graphVis: { nodes: newNodes, edges: newEdges } };
  // };

  // step3Texts = () => {
  //   const description = (
  //     <p>Libovolně zvolená hrana <MN>{'e=\\{x,y\\}'}</MN> z cesty <MN>u</MN>-<MN>v</MN>.</p>
  //   );
  //   return { description: description };
  // };



  // step4Texts = () => {
  //   const description = (
  //     <p>
  //       Odebráním hrany <MN>e</MN> se vrcholy <MN>u</MN> a <MN>v</MN> ocitnou v různých komponentách souvislosti.
  //     </p>
  //   );
  //   return { description: description };
  // };

  // step5Texts = () => {
  //   const description = (<p>Graf <MN>G-e</MN> není souvislý a není tedy ani stromem.</p>);
  //   const repeatBox = (
  //     <div>
  //       <p>
  //         DEFINICE STROMU (4.3)
  //         <br />Strom je <u>souvislý</u> graf, který neobsahuje kružnici.
  //       </p>
  //     </div>
  //   );

  //   return { description: description, repeatBoxHidden: false, repeatBoxContent: repeatBox };
  // };

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
