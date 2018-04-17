import React, {Component} from 'react';

class Edge extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            id: props.id,
            name: props.name,
            isHovering: false,
            strokeColor: props.strokeColor ? props.strokeColor : 'black',
            stroke: props.strokeColor
        };
    }

    handleMouseHover = () => {
        this.setState(this.changeFillHoverState);
    };

    changeFillHoverState = (state) => {
        return {
            isHovering: !state.isHovering,
            stroke: state.isHovering ? state.strokeColor : 'lightblue'
        };
    };

    render() {
        const {x1, y1, x2, y2} = this.props;

        return (
            <svg>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={this.state.stroke} strokeWidth={3}
                      onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} />
            </svg>
        );
    }
}

export default Edge;