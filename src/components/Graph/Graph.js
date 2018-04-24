import React from 'react';
import Node from './Node/Node';
import Edge from './Edge/Edge';
import Text from './Text/Text';

const Graph = (props) => {
    return (
        <svg width={props.width} height={props.height} stroke={'black'} strokeWidth={2} >
            {props.edges.map((d, i) => {
                return <Edge key={i} x1={d.x1} y1={d.y1} x2={d.x2} y2={d.y2} strokeColor={d.strokeColor} />
            })}

            {props.nodes.map((d, i) => {
                return <Node key={i} cx={d.x} cy={d.y} fillColor={d.fillColor} label={d.label} />
            })}

            {props.texts.map((d, i) => {
                return <Text key={i} x={d.x} y={d.y} text={d.text} />
            })}
        </svg>
    );
};

export default Graph;