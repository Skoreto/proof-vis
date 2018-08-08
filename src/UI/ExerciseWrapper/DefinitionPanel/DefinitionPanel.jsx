import React from 'react';
import MathJax from 'react-mathjax2';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import './DefinitionPanel.css';

const DefinitionPanel = (props) => (
  <MathJax.Context input="tex">
    <div>
      {props.definitionPanels
      .filter(definitionPanel => definitionPanel.showForSteps.includes(props.currentStep))
      .map((definitionPanel, index) =>
        <ReactCSSTransitionReplace
          transitionName="cross-fade" 
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <div key={index + "-" + definitionPanel.id} className="definition-panel">
            {definitionPanel.content}
          </div>
        </ReactCSSTransitionReplace>
      )}
    </div>
  </MathJax.Context>
);

export default DefinitionPanel;