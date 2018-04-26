import React from 'react';

const Text = (props) => {
    return (
        <svg>
            <text textAnchor={'middle'} x={props.x} y={props.y} stroke={'black'} strokeWidth={1} fontSize={22}>
                {props.text}
            </text>
        </svg>
    );
};

export default Text;