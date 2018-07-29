import React from 'react';
import MathJax from 'react-mathjax2';

const DescriptionPanel = (props) => (
  <MathJax.Context input="tex">
    <div className="description-panel">
      {props.children}
    </div>
  </MathJax.Context>
);

export default DescriptionPanel;
