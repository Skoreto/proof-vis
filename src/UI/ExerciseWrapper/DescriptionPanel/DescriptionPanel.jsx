import React from 'react';
import MathJax from 'react-mathjax2';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import './DescriptionPanel.css';

const DescriptionPanel = (props) => (
  <MathJax.Context input="tex">
    <div className="description-panel">
        {props.descriptionPanels
        .filter(descriptionPanel => descriptionPanel.showForSteps.includes(props.currentStep))
        .map((descriptionPanel, index) =>
          <ReactCSSTransitionReplace
            transitionName="cross-fade" 
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <div key={index + "-" + descriptionPanel.id}>
              {descriptionPanel.content}
            </div>
          </ReactCSSTransitionReplace>
        )}
    </div>
  </MathJax.Context>
);

export default DescriptionPanel;
