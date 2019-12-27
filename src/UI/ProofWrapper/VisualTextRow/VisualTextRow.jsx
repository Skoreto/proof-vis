import React from "react";

/**
 * Stateless component for adding text rows over visualization.
 */
const VisualTextRow = props => (
  <div
    className={props.classes}
    style={{
      fontSize: props.fontSize ? props.fontSize : "24px",
      position: "absolute",
      left: props.left + "px",
      top: props.top + "px",
      width: props.width + "px"
    }}
  >
    {props.children}
  </div>
);

export default VisualTextRow;
