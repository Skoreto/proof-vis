import React, {Component} from 'react';

class Node extends Component {

    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            fillColor: props.fillColor,
            fill: props.fillColor
        };
    }

    handleMouseHover() {
        this.setState(this.changeFillHoverState);
    }

    changeFillHoverState(state) {
        return {
            isHovering: !state.isHovering,
            fill: state.isHovering ? state.fillColor : 'lightblue'
        };
    }

    render() {
        const {cx, cy} = this.props;

        return (
            <svg>
                <circle cx={cx} cy={cy} r={25} fill={this.state.fill} stroke={'black'} strokeWidth={3}
                        onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} />
            </svg>
        );
    }
}

export default Node;