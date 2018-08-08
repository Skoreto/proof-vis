import React from 'react';
import MathJax from 'react-mathjax2';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './VisualTextsPanel.css';

const VisualTextsPanel = (props) => (
  <MathJax.Context input="tex">
    <div className="vis-texts-panel">
      <TransitionGroup>
        {props.visualTextRows
        .filter(textRow => textRow.showForSteps.includes(props.currentStep))
        .map(({ id, content }) => (
          <CSSTransition
            key={id}
            timeout={500}
            classNames="row"
          >
            {content}                     
          </CSSTransition>
        ))}
      </TransitionGroup>   
    </div>
  </MathJax.Context>
);

export default VisualTextsPanel;
