import React, {Component} from 'react';

class Node extends Component {

    render() {
        const {cx, cy, fill} = this.props;

        return (
            <svg>
                <circle cx={cx} cy={cy} r={25} fill={fill} stroke={'black'} strokeWidth={3} />
            </svg>
        );
    }
}

export default Node;