import React, {Component} from 'react';
import Node from './Node/Node';
import Edge from './Edge/Edge';

class Graph extends Component {

    render() {
        const {width, height} = this.props;

        return (
            <svg width={width} height={height}>
                <Edge x1={90} y1={80} x2={290} y2={100} strokeColor={'black'} />
                <Node cx={90} cy={80} fillColor={'yellow'} />
                <Node cx={290} cy={100} fillColor={'red'} />
            </svg>
        );
    }
}

export default Graph;