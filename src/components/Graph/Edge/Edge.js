import React, {Component} from 'react';

class Edge extends Component {

    render() {
        const {x1, y1, x2, y2} = this.props;

        return (
            <svg>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={'black'} strokeWidth={3} />
            </svg>
        );
    }
}

export default Edge;