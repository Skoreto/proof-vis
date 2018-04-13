import React, {Component} from 'react';
import Node from './Node/Node'

class Graph extends Component {

    render() {
        const {width, height} = this.props;

        return (
            <svg width={width} height={height}>
                <Node cx={90} cy={80} fill={'yellow'} />
                <Node cx={290} cy={100} fill={'red'} />
            </svg>
        );
    }
}

export default Graph;