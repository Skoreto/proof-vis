import React from 'react';
import Node from './Node/Node';
import Edge from './Edge/Edge';

const Graph = (props) => {
    return (
        <svg width={props.width} height={props.height} stroke={'black'} strokeWidth={2} >
            <Edge x1={90} y1={80} x2={290} y2={100} strokeColor={'black'} />
            <Node cx={90} cy={80} fillColor={'yellow'} label={'x'} />
            <Node cx={290} cy={100} fillColor={'red'} label={'Y'} />

            {props.nodes.map((d, i) => {
                return <Node key={i} cx={d.x} cy={d.y} fillColor={d.fillColor} />
            })}
        </svg>
    );
};

export default Graph;