import React from 'react';
import './StepCounter.css';

const StepCounter = (props) => (
  <span className="step-counter">
    {props.currentStep}/{props.stepSum}
  </span>
);

export default StepCounter;
