import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import StepCounter from "./StepCounter";

// Connect enzyme to React
configure({ adapter: new Adapter() });

describe("StepCounter", () => {
  const wrapper = shallow(<StepCounter />);

  wrapper.setProps({
    currentStep: 4,
    stepSum: 10
  });

  /**
   * Mirror of an actual grapfFunction for state setting.
   */
  function updateCurrentStep(propsCurrentStep, increment) {
    return { currentStep: (propsCurrentStep += increment) };
  }

  it("should match exactly 4/10", () => {
    expect(wrapper.contains(<span className="step-counter">4/10</span>)).toBe(
      true
    );
  });

  it("should match exactly 5/10", () => {
    wrapper.setProps(updateCurrentStep(4, 1));
    expect(
      wrapper.contains(<span className="step-counter">5/10</span>)
    ).toEqual(true);
  });
});
