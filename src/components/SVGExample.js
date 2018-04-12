import React, {Component} from 'react';

class SVGExample extends Component{

    render() {
        const {width, height} = this.props;

        return (
            <svg width={width} height={height}>
                <circle cx={30} cy={80} r={25} fill={'red'} />
                <circle cx={130} cy={80} r={60} fill={'green'} />
                <circle cx={260} cy={80} r={40} fill={'blue'} />
            </svg>
        );
    }
}

export default SVGExample;