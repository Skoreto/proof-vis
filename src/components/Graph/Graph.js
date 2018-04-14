import React, {Component} from 'react';
import Node from './Node/Node';
import Edge from './Edge/Edge';

class Graph extends Component {

    render() {
        const {width, height} = this.props;

        const nodes = [
            {x: 90, y: 280, fillColor: 'lightgreen' },
            {x: 290, y: 240, fillColor: 'brown' }
        ];

        return (
            <svg width={width} height={height} stroke={'black'} strokeWidth={2} >
                <Edge x1={90} y1={80} x2={290} y2={100} strokeColor={'black'} />
                <Node cx={90} cy={80} fillColor={'yellow'} label={'x'} />
                <Node cx={290} cy={100} fillColor={'red'} label={'Y'} />

                {nodes.map((d, i) => {
                    return <Node key={i} cx={d.x} cy={d.y} fillColor={d.fillColor} />
                })}
            </svg>
        );
    }
}

export default Graph;