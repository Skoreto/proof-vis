import React from 'react';

import cssClasses from './StepCounter.css';

const StepCounter = (props) => (
    <span className={cssClasses.StepCounter}>
        <span>{props.currentStep}</span>
        <span>/</span>
        <span>{props.stepSum}</span>
    </span>
);

export default StepCounter;