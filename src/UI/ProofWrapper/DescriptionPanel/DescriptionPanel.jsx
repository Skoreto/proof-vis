import React from 'react';
import MathJax from 'react-mathjax2';
import './DescriptionPanel.css';

const DescriptionPanel = (props) => (
  <MathJax.Context input="tex">
    <div className="description-panel">
        {props.descriptionPanels
        .filter(descriptionPanel => descriptionPanel.showForSteps.includes(props.currentStep))
        .map((descriptionPanel, index) =>
          <div key={index + "-" + descriptionPanel.id}>
            {descriptionPanel.content}
          </div>
        )}
    </div>
  </MathJax.Context>
);

export default DescriptionPanel;
