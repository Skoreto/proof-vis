import React from 'react';
import MathJax from 'react-mathjax2';

const DescriptionPanel = (props) => (
  <MathJax.Context input="tex">
    <div className="description-panel">
      {props.descriptionPanels
      .filter(descriptionPanel => descriptionPanel.showForSteps.includes(props.currentStep))
      .map((descriptionPanel, index) =>
        <div key={descriptionPanel.id}>
          {descriptionPanel.content}
        </div>
      )}
    </div>
  </MathJax.Context>
);

export default DescriptionPanel;