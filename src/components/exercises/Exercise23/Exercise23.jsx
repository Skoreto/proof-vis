import React from 'react';
import { initialExerciseState, events } from '../../../functionality/GlobalExerciseConstants';
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

class Exercise23 extends React.Component {
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
    if (this.state.currentStep < 10) {
      if (this.state.currentStep === 0) {
        this.setState({ btnPrevD: false });
        this.setState(this.step1);
        this.setState(this.step1Texts);
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
          { id: 1, x: -240, y: 0, color: { background: '#ffff08' }, label: '   ' },
          { id: 2, x: -140, y: -120, color: { background: '#ffff08' }, label: '   ' },
          { id: 3, x: -140, y: 120, color: { background: '#ffff08' }, label: '   ' },
          { id: 4, x: 0, y: -60, color: { background: '#ffff08' }, label: '   ' },
          { id: 5, x: 0, y: 60, color: { background: '#ffff08' }, label: '   ' },
          { id: 6, x: 140, y: -120, color: { background: '#ffff08' }, label: '   ' },
          { id: 7, x: 140, y: 120, color: { background: '#ffff08' }, label: '   ' },
          { id: 8, x: 240, y: 0, color: { background: '#ffff08' }, label: '   ' },
        ],
        edges: [
          { id: 1, from: 1, to: 2 },
          { id: 2, from: 1, to: 3 },
          { id: 3, from: 2, to: 4 },
          { id: 4, from: 3, to: 5 },
          { id: 5, from: 4, to: 5 },
          { id: 6, from: 4, to: 6 },
          { id: 7, from: 5, to: 7 },
          { id: 8, from: 6, to: 8 },
          { id: 9, from: 7, to: 8 },
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

export default Exercise23;
