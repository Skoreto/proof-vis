import React, {Component} from 'react';

class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false,
            fillColor: props.fillColor,
        };
    }

    /*
     * Update fillColor when props are changed in App component.
     */
    componentWillReceiveProps(newProps) {
        this.setState({fillColor: newProps.fillColor});
    }

    handleMouseHover = () => {
        this.setState(this.changeFillHoverState);
    };

    changeFillHoverState = (state, props) => {
        return {
            isHovering: !state.isHovering,
            fillColor: state.isHovering ? props.fillColor : 'lightblue'
        };
    };

    render() {
        const {id, name, cx, cy,} = this.props;
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