import React from 'react';
import MathJax from 'react-mathjax2';

/**
 * MathJax.Node wraper for shortening inline styling of TeX content.
 * @returns {*}
 * @constructor
 */
const MathJaxNode = (props) => (
  <span className={props.classes}><MathJax.Node inline>{props.children}</MathJax.Node></span>
);

export default MathJaxNode;
