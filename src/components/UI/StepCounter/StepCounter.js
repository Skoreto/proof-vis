import React from 'react';
import './StepCounter.css';

const StepCounter = (props) => (
    <span className={'step-counter'}>
        <span>{props.currentStep}</span>
        <span>/</span>
        <span>{props.stepSum}</span>
    </span>
);

export default StepCounter;