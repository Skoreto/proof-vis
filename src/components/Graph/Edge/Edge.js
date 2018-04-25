import React, {Component} from 'react';

class Edge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false,
            strokeColor: props.strokeColor ? props.strokeColor : 'black',
            strokeWidth: props.strokeWidth ? props.strokeWidth : 2  // TODO Possible reason.
        };
    }

    /**
     * Update fillColor when props are changed in App component.
     * @param newProps Props changed in a parent component.
     */
    componentWillReceiveProps(newProps) {
        this.setState({
            strokeColor: newProps.strokeColor,
            strokeWidth: newProps.strokeWidth
        });
    }

    /**
     * Handle behavior of edge when hovered by mouse.
     */
    handleMouseHover = () => {
        this.setState(this.changeStrokeHoverState);
    };

    /**
     * Change stroke of edge when hovered by mouse.
     * Change stroke back to default when the edge is not hovered.
     */
    changeStrokeHoverState = (state, props) => {
        // TODO Highlighting by srokeWidth is not working for edges without assigned strokeWidth.
        return {
            isHovering: !state.isHovering,
            strokeColor: state.isHovering ? props.strokeColor : 'lightblue',
            strokeWidth: state.isHovering ? props.strokeWidth : (props.strokeWidth + 4)
        };
    };

    render() {
        const {id, name, x1, y1, x2, y2} = this.props;

        return (
            <svg>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={this.state.strokeColor}
                      strokeWidth={this.state.strokeWidth}
                      onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} />
            </svg>
        );
    }
}

export default Edge;