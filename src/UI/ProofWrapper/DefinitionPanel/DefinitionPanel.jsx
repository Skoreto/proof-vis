import React from 'react';
import MathJax from 'react-mathjax2';
import './DefinitionPanel.css';

const DefinitionPanel = (props) => (
  <MathJax.Context input="tex">
    <div>
      {props.definitionPanels
      .filter(definitionPanel => definitionPanel.showForSteps.includes(props.currentStep))
      .map((definitionPanel, index) =>
        <div key={index + "-" + definitionPanel.id} className="definition-panel">
          {definitionPanel.content}
        </div>
      )}
    </div>
  </MathJax.Context>
);

export default DefinitionPanel;
