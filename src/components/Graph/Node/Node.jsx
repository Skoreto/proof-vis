import React from 'react';

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      fillColor: props.fillColor,
    };
  }

  /**
   * Update fillColor when props are changed in App component.
   * @param newProps Props changed in a parent component.
   */
  componentWillReceiveProps(newProps) {
    this.setState({ fillColor: newProps.fillColor });
  }

  /**
   * Handle behavior of node when hovered by mouse.
   */
  handleMouseHover = () => {
    this.setState(this.changeFillHoverState);
  };

  /**
   * Change fillColor of node when hovered by mouse.
   * Change fillColor back to default when the node is not hovered.
   */
  changeFillHoverState = (state, props) => {
    return {
      isHovering: !state.isHovering,
      fillColor: state.isHovering ? props.fillColor : 'lightblue'
    };
  };

  render() {
    const { cx, cy, } = this.props;
    const label = this.props.label ? this.props.label : '';

    return (
      <svg>
        <circle cx={cx} cy={cy} r={25} fill={this.state.fillColor} stroke={'black'} strokeWidth={2}
          onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} />
        <text textAnchor={'middle'} x={cx} y={cy + 5} stroke={'black'} strokeWidth={1}>{label}</text>
      </svg>
    );
  }
}

export default Node;
