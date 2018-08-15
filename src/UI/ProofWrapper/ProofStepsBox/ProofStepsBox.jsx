import React from 'react';
import MathJax from 'react-mathjax2';
import { Element } from 'react-scroll';
import './ProofStepsBox.css';

const ProofStepsBox = (props) => (
  <MathJax.Context input="tex">
    <Element id="proof-steps-box">
      {props.proofStepPanels.map((proofStepPanel, index) =>
        <Element
          key={index + "-" + proofStepPanel.name}
          name={proofStepPanel.name}
          className={
            proofStepPanel.activeForSteps.includes(props.currentStep) ? "proof-step-active" : ""
          }
        >
          {proofStepPanel.content}
        </Element>
      )}
    </Element>
  </MathJax.Context>
);

export default ProofStepsBox;
