import React, {Component} from 'react';

class Node extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            fillColor: props.fillColor,
            fill: props.fillColor,
        };
    }

    handleMouseHover = () => {
        this.setState(this.changeFillHoverState);
    };

    changeFillHoverState = (state, props) => {
        return {
            isHovering: !state.isHovering,
            fill: state.isHovering ? props.fillColor : 'lightblue'
        };
    };

    render() {
        const {id, name, cx, cy,} = this.props;
        const label = this.props.label ? this.props.label : '';

        return (
            <svg>
                <circle cx={cx} cy={cy} r={25} fill={this.state.fill} stroke={'black'} strokeWidth={2}
                        onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} />
                <text textAnchor={'middle'} x={cx} y={cy + 5} stroke={'black'} strokeWidth={1}>{label}</text>
            </svg>
        );
    }
}

export default Node;