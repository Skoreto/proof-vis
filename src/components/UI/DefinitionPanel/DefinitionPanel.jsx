import React from 'react';
import MathJax from 'react-mathjax2';

const DefinitionPanel = (props) => (
  <div className={'repeat-box'} hidden={props.hidden}>
    <MathJax.Context input='tex'>
      <div>
        {props.children}
      </div>
    </MathJax.Context>
  </div>
);

export default DefinitionPanel;
