import React from 'react';
import MathJax from 'react-mathjax2';

const DefinitionPanel = (props) => (
  <MathJax.Context input="tex">
    <div>
      {props.definitionPanels
      .filter(definitionPanel => definitionPanel.showForSteps.includes(props.currentStep))
      .map((definitionPanel, index) =>
        <div key={definitionPanel.id} className="repeat-box">
          {definitionPanel.content}
        </div>
      )}
    </div>
  </MathJax.Context>
);

export default DefinitionPanel;