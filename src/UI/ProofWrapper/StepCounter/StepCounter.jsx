import React from "react";
import "./StepCounter.scss";

const StepCounter = props => (
  <span className="step-counter">
    {props.currentStep}/{props.stepSum}
  </span>
);

export default StepCounter;
