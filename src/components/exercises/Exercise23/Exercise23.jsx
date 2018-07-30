import React from 'react';
import {
  initialExerciseState,
  events,
  palette,
} from '../../../functionality/GlobalExerciseConstants';
import { scrollSpy, scroller } from 'react-scroll';
import {
  headingTitle,
  breadcrumbsCurrent,
  stepSum,
  claimPanel,
  proofPanels,
  cameraPosition1,
  cameraPosition2,
  cameraPosition3,
} from './constants';
import {
  updateNode,
  updateNodeShape,
  updateEdge,
  updateEdgeWithArrow,
  clearAllTimers,
  handlerSketchAllowance,
  handlerSelectedTool,
  handlerDrawingDialog,
  getScrollOptions,
} from '../../../functionality/GraphFunctions';
import ExerciseWrapper from '../../../components/UI/ExerciseWrapper/ExerciseWrapper';
import MN from '../../../components/MathJax/MathJaxNode';

class Exercise23 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialExerciseState;
    const network = null;
    this.initNetworkInstance = this.initNetworkInstance.bind(this);
    this.updateNode = updateNode.bind(this);
    this.updateNodeShape = updateNodeShape.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
    this.clearAllTimers = clearAllTimers.bind(this);
    this.handlerSketchAllowance = handlerSketchAllowance.bind(this);
    this.handlerSelectedTool = handlerSelectedTool.bind(this);
    this.handlerDrawingDialog = handlerDrawingDialog.bind(this);
  }

  componentDidMount() {
    scrollSpy.update();
  }

  /**
   * Initialize graphVis network instance.
   * @param {Object} networkInstance - Object of network instance returned by getNetwork() callback function.
   */
  initNetworkInstance(networkInstance) {
    this.network = networkInstance;
  }

  nextStep = () => {
    if (this.state.currentStep < 10) {
      if (this.state.currentStep === 0) {
        this.setState({ btnPrevD: false });
        this.setState(this.step1);
        this.setState(this.step1Texts);
        this.network.moveTo(cameraPosition1);
      }

      if (this.state.currentStep === 1) {    
        this.step2Animation();
        let interval1 = setInterval(this.step2Animation, 6000);
        this.setState({ intervals: [interval1] });
        this.setState(this.step2Texts);
        this.network.moveTo(cameraPosition2);
        scroller.scrollTo('proofPanel2', getScrollOptions(window.scrollY));
      }

      if (this.state.currentStep === 2) {
        this.clearAllTimers(this.state);
        this.setState(this.step1);
        this.setState(this.step3);
        this.setState(this.step3Texts);
        scroller.scrollTo('proofPanel3', getScrollOptions(window.scrollY));
      }

      if (this.state.currentStep === 3) {
        this.setState(this.step4);
        this.setState(this.step4Texts);
        this.network.moveTo(cameraPosition3);
        scroller.scrollTo('proofPanel4', getScrollOptions(window.scrollY));
      }

      if (this.state.currentStep === 4) {
        this.setState(this.step5);
        this.setState(this.step5Texts);
        scroller.scrollTo('proofPanel5', getScrollOptions(window.scrollY));
      }

      if (this.state.currentStep === 5) {
        this.setState(this.step6);
        this.setState(this.step6Texts);
        
      }

      if (this.state.currentStep === 6) {
        this.setState(this.step1);
        this.setState(this.step7);
        this.setState(this.step7Texts);
      }

      if (this.state.currentStep === 7) {
        this.setState(this.step8);
        this.setState(this.step8Texts);
      }

      if (this.state.currentStep === 8) {
        this.setState(this.step1);
        this.setState(this.step9);
        this.setState(this.step9Texts);
        scroller.scrollTo('proofPanel6', getScrollOptions(window.scrollY));
      }

      if (this.state.currentStep === 9) {
        this.setState({ btnNextD: true });
        this.setState(this.step10);
        this.setState(this.step10Texts);
        scroller.scrollTo('proofPanel7', getScrollOptions(window.scrollY));
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
        this.clearAllTimers(this.state);
        this.setState(this.step1);
        this.setState(this.step1Texts);
        this.network.moveTo(cameraPosition1);
        scroller.scrollTo('proofPanel1', getScrollOptions(window.scrollY));
      }

      if (this.state.currentStep === 3) {
        this.setState(this.step1);
        this.step2Animation();
        let interval1 = setInterval(this.step2Animation, 6000);
        this.setState({ intervals: [interval1] });
        this.setState(this.step2Texts);
        scroller.scrollTo('proofPanel2', getScrollOptions(window.scrollY));
      }

      if (this.state.currentStep === 4) {
        this.clearAllTimers(this.state);
        this.setState(this.step1);
        this.setState(this.step3);
        this.setState(this.step3Texts);
        this.network.moveTo(cameraPosition2);
        scroller.scrollTo('proofPanel3', getScrollOptions(window.scrollY));
      }

      if (this.state.currentStep === 5) {
        this.setState(this.step1);
        this.setState(this.step4);
        this.setState(this.step4Texts);
        scroller.scrollTo('proofPanel4', getScrollOptions(window.scrollY));
      }

      if (this.state.currentStep === 6) {
        this.setState(this.step5);
        this.setState(this.step5Texts);
      }

      if (this.state.currentStep === 7) {
        this.setState(this.step1);
        this.setState(this.step6);
        this.setState(this.step6Texts);
      }

      if (this.state.currentStep === 8) {
        this.setState(this.step1);
        this.setState(this.step7);
        this.setState(this.step7Texts);
      }

      if (this.state.currentStep === 9) {
        this.setState(this.step1);
        this.setState(this.step8);
        this.setState(this.step8Texts);
        scroller.scrollTo('proofPanel5', getScrollOptions(window.scrollY));
      }

      if (this.state.currentStep === 10) {
        this.setState({ btnNextD: false });
        this.setState(this.step1);
        this.setState(this.step9);
        this.setState(this.step9Texts);
        scroller.scrollTo('proofPanel6', getScrollOptions(window.scrollY));
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
          { id: 1, x: -240, y: -140, color: { background: palette.yellow }, label: '   ' },
          { id: 2, x: -140, y: -260, color: { background: palette.yellow }, label: '   ' },
          { id: 3, x: -140, y: -20, color: { background: palette.yellow }, label: '   ' },
          { id: 4, x: 0, y: -200, color: { background: palette.yellow }, label: ' u ' },
          { id: 5, x: 0, y: -80, color: { background: palette.yellow }, label: ' v ' },
          { id: 6, x: 140, y: -260, color: { background: palette.yellow }, label: '   ' },
          { id: 7, x: 140, y: -20, color: { background: palette.yellow }, label: '   ' },
          { id: 8, x: 240, y: -140, color: { background: palette.yellow }, label: '   ',
          font: { vadjust: 0 }, shape: 'circle' },
          { id: 9, x: -240, y: 195, color: { background: palette.yellow }, label: ' u ',
          font: { vadjust: 0 }, shape: 'circle' },
          { id: 10, x: -130, y: 100, color: { background: palette.yellow }, label: '   ',
          font: { vadjust: 0 }, shape: 'circle' },
          { id: 11, x: -130, y: 290, color: { background: palette.yellow }, label: '   ',
          font: { vadjust: 0 }, shape: 'circle' },
          { id: 12, x: 0, y: 195, color: { background: palette.yellow }, label: ' v ',
          font: { vadjust: 0 }, shape: 'circle' },
          { id: 13, x: 130, y: 100, color: { background: palette.yellow }, label: '   ',
          font: { vadjust: 0 }, shape: 'circle' },
          { id: 14, x: 130, y: 290, color: { background: palette.yellow }, label: '   ',
          font: { vadjust: 0 }, shape: 'circle' },
          { id: 15, x: 240, y: 195, color: { background: palette.yellow }, label: '   ',
          font: { vadjust: 0 }, shape: 'circle' },
        ],
        edges: [
          { id: 1, from: 1, to: 2 },
          { id: 2, from: 1, to: 3 },
          { id: 3, from: 2, to: 4 },
          { id: 4, from: 3, to: 5 },
          { id: 5, from: 4, to: 5, label: 'e' },
          { id: 6, from: 4, to: 6 },
          { id: 7, from: 5, to: 7 },
          { id: 8, from: 6, to: 8 },
          { id: 9, from: 7, to: 8 },
          { id: 10, from: 9, to: 10 },
          { id: 11, from: 9, to: 11 },
          { id: 12, from: 9, to: 12, label: 'e' },
          { id: 13, from: 10, to: 13 },
          { id: 14, from: 11, to: 14 },
          { id: 15, from: 12, to: 15 },
          { id: 16, from: 13, to: 15 },
          { id: 17, from: 14, to: 15 },
        ],
      },
    };
  };

  step1Texts = () => {
    const description = (<p>Příklad dvou grafů obsahujících kružnice.</p>);
    return { description: description };
  };

  step2Animation = () => {
    let timeout1 = setTimeout(() => { this.setState(this.step2a); }, 1000);
    let timeout2 = setTimeout(() => { this.setState(this.step1); }, 2500);
    let timeout3 = setTimeout(() => { this.setState(this.step2c); }, 3000);
    let timeout4 = setTimeout(() => { this.setState(this.step1); }, 4500);

    this.setState({ timeouts: [timeout1, timeout2, timeout3, timeout4] });
  };

  step2a = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, palette.ruby, '   ');
    newNodes = this.updateNode(newNodes, 1, palette.ruby, '   ');
    newNodes = this.updateNode(newNodes, 2, palette.ruby, '   ');
    newNodes = this.updateNode(newNodes, 3, palette.ruby, ' u ');
    newNodes = this.updateNode(newNodes, 4, palette.ruby, ' v ');

    let newEdges = this.updateEdge(state.graphVis.edges, 0, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 1, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 2, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 3, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 4, palette.ruby, 3, false, 'e');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step2c = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 3, palette.jade, ' u ');
    newNodes = this.updateNode(newNodes, 4, palette.jade, ' v ');
    newNodes = this.updateNode(newNodes, 5, palette.jade, '   ');
    newNodes = this.updateNode(newNodes, 6, palette.jade, '   ');
    newNodes = this.updateNode(newNodes, 7, palette.jade, '   ');

    let newEdges = this.updateEdge(state.graphVis.edges, 4, palette.jade, 3, false, 'e');
    newEdges = this.updateEdge(newEdges, 5, palette.jade, 3, false, '');
    newEdges = this.updateEdge(newEdges, 6, palette.jade, 3, false, '');
    newEdges = this.updateEdge(newEdges, 7, palette.jade, 3, false, '');
    newEdges = this.updateEdge(newEdges, 8, palette.jade, 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step2Texts = () => {
    const description = (
      <p>
        Příklad grafu <MN>G</MN>, kde kružnice <MN>C_1</MN> a <MN>C_2</MN> sdílejí hranu <MN>e</MN>.
      </p>
    );

    return { description: description, repeatBoxHidden: true };
  };

  step3 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 0, palette.orange, '   ');
    newNodes = this.updateNode(newNodes, 1, palette.orange, '   ');
    newNodes = this.updateNode(newNodes, 2, palette.orange, '   ');
    newNodes = this.updateNode(newNodes, 3, palette.orange, ' u ');
    newNodes = this.updateNode(newNodes, 4, palette.orange, ' v ');
    newNodes = this.updateNode(newNodes, 5, palette.orange, '   ');
    newNodes = this.updateNode(newNodes, 6, palette.orange, '   ');
    newNodes = this.updateNode(newNodes, 7, palette.orange, '   ');

    let newEdges = this.updateEdge(state.graphVis.edges, 0, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 1, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 2, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 3, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 5, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 6, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 7, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 8, palette.orange, 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step3Texts = () => {
    const description = (
      <p>
        Poté v grafu <MN>G</MN> existuje také kružnice <MN>C_3</MN> neobsahující hranu <MN>e</MN>.
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

  step4 = (state) => {
    let newEdges = this.updateEdge(state.graphVis.edges, 14, palette.black, 1, false, 'e1');
    return { graphVis: { nodes: state.graphVis.nodes, edges: newEdges } };
  };

  step4Texts = () => {
    const description = (
      <p>
        Příklad grafu <MN>G</MN>, kde kružnice <MN>C_1</MN> a <MN>C_2</MN> sdílejí hranu <MN>e</MN> a navíc další hranu <MN>e_1</MN>.
      </p>
    );
    return { description: description, repeatBoxHidden: true, repeatBoxContent: '' };
  };

  step5 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 8, palette.ruby, ' u ');
    newNodes = this.updateNode(newNodes, 9, palette.ruby, '   ');
    newNodes = this.updateNode(newNodes, 11, palette.ruby, ' v ');
    newNodes = this.updateNode(newNodes, 12, palette.ruby, '   ');
    newNodes = this.updateNode(newNodes, 14, palette.ruby, '   ');

    let newEdges = this.updateEdge(state.graphVis.edges, 9, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 11, palette.ruby, 3, false, 'e');
    newEdges = this.updateEdge(newEdges, 12, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 14, palette.ruby, 3, false, '');
    newEdges = this.updateEdge(newEdges, 15, palette.ruby, 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step5Texts = () => {
    const description = (<p>Vyznačení kružnice <MN>C_1</MN>.</p>);
    return { description: description };
  };

  step6 = (state) => {
    let newNodes = this.updateNodeShape(state.graphVis.nodes, 8, palette.purple, 'u = x1', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 9, palette.purple, 'x2', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 11, palette.purple, 'v = x5', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 12, palette.purple, 'x3', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 14, palette.purple, 'x4', -75, 'dot', 21);

    let newEdges = this.updateEdge(state.graphVis.edges, 9, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 11, palette.black, 1, false, 'e');
    newEdges = this.updateEdge(newEdges, 12, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 14, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 15, palette.purple, 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step6Texts = () => {
    const description = (
      <p>
        Vyznačení cesty <MN>P_1=C_1 - e</MN>, tedy přes kružnici <MN>C_1</MN> bez hrany <MN>e</MN>.
      </p>
    );
    return { description: description };
  };

  step7 = (state) => {
    let newNodes = this.updateNode(state.graphVis.nodes, 8, palette.jade, ' u ');
    newNodes = this.updateNode(newNodes, 10, palette.jade, '   ');
    newNodes = this.updateNode(newNodes, 11, palette.jade, ' v ');
    newNodes = this.updateNode(newNodes, 13, palette.jade, '   ');
    newNodes = this.updateNode(newNodes, 14, palette.jade, '   ');

    let newEdges = this.updateEdge(state.graphVis.edges, 10, palette.jade, 3, false, '');
    newEdges = this.updateEdge(newEdges, 11, palette.jade, 3, false, 'e');
    newEdges = this.updateEdge(newEdges, 13, palette.jade, 3, false, '');
    newEdges = this.updateEdge(newEdges, 14, palette.jade, 3, false, '');
    newEdges = this.updateEdge(newEdges, 16, palette.jade, 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step7Texts = () => {
    const description = (<p>Vyznačení kružnice <MN>C_2</MN>.</p>);
    return { description: description };
  };

  step8 = (state) => {
    let newNodes = this.updateNodeShape(
      state.graphVis.nodes,
      8,
      palette.purple,
      'u = y1',
      -75,
      'dot',
      21,
    );
    newNodes = this.updateNodeShape(newNodes, 10, palette.purple, 'y2', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 11, palette.purple, 'v = y5', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 13, palette.purple, 'y3', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 14, palette.purple, 'y4', -75, 'dot', 21);

    let newEdges = this.updateEdge(state.graphVis.edges, 10, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 11, palette.black, 1, false, 'e');
    newEdges = this.updateEdge(newEdges, 13, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 14, palette.purple, 3, false, '');
    newEdges = this.updateEdge(newEdges, 16, palette.purple, 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step8Texts = () => {
    const description = (
      <p>
        Vyznačení cesty <MN>P_2=C_2 - e</MN>, tedy přes kružnici <MN>C_2</MN> bez hrany <MN>e</MN>.
      </p>
    );
    return { description: description };
  };

  step9 = (state) => {
    let newNodes = this.updateNodeShape(
      state.graphVis.nodes,
      8,
      palette.orange,
      'x1 = y1',
      -75,
      'dot',
      21,
    );
    newNodes = this.updateNodeShape(newNodes, 14, palette.orange, 'x4 = y4', -75, 'dot', 21);

    return { graphVis: { nodes: newNodes, edges: state.graphVis.edges } };
  };

  step9Texts = () => {
    const description = (
      <p>
        Vyznačení vrcholu <MN>x_1=y_1</MN>, ve kterém se cesty rozcházejí, a vrcholu <MN>x_4=y_4</MN>, ve kterém se cesty scházejí.
      </p>
    );
    return { description: description, repeatBoxHidden: true, repeatBoxContent: '' };
  };

  step10 = (state) => {
    let newNodes = this.updateNodeShape(
      state.graphVis.nodes,
      8,
      palette.orange,
      'x1 = y1',
      -75,
      'dot',
      21,
    );
    newNodes = this.updateNodeShape(newNodes, 9, palette.orange, 'x2', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 10, palette.orange, 'y2', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 12, palette.orange, 'x3', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 13, palette.orange, 'y3', -75, 'dot', 21);
    newNodes = this.updateNodeShape(newNodes, 14, palette.orange, 'x4 = y4', -75, 'dot', 21);

    let newEdges = this.updateEdge(state.graphVis.edges, 9, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 10, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 12, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 13, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 15, palette.orange, 3, false, '');
    newEdges = this.updateEdge(newEdges, 16, palette.orange, 3, false, '');

    return { graphVis: { nodes: newNodes, edges: newEdges } };
  };

  step10Texts = () => {
    const description = (
      <p>
        Vyznačení vrcholu križnice <MN>C_3</MN>, která neobsahuje hranu <MN>e</MN>.
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

  render() {
    return (
      <ExerciseWrapper
        {...this.state}
        events={events}
        initNetworkInstance={this.initNetworkInstance}
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

export default Exercise23;
