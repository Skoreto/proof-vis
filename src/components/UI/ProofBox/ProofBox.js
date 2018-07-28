import React from 'react';
import MathJax from 'react-mathjax2';
import { Element } from 'react-scroll';

const ProofBox = (props) => (
  <MathJax.Context input='tex'>
    <Element className="bg-warning" id="proofBox">
      {props.proofPanels.map((proofPanel, index) =>
        <Element
          key={index + "-" + proofPanel.name}
          name={proofPanel.name} 
          className={
            proofPanel.activeForSteps.includes(props.currentStep) ? "proof-active" : ""
          }
        >
          {proofPanel.content}
        </Element>
      )}
    </Element>
  </MathJax.Context>
);

export default ProofBox;
