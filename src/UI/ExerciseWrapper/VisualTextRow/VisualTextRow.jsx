import React from 'react';
// import './VisualTextRow.css';

/**
 * Stateless component for adding text rows over visualization.
 */
const VisualTextRow = (props) => (
  <div 
    className={props.classes}
    style={{
      fontSize: '28px',
      position: 'absolute',
      left: props.left + 'px',
      top: props.top + 'px',
    }}
  >
    {props.children}
  </div> 
);

export default VisualTextRow;
