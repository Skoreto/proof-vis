import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProofStepsBox from './ProofStepsBox';

// Connect enzyme to React
configure({ adapter: new Adapter() });

describe('ProofStepsBox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProofStepsBox proofStepPanels={[]} currentStep={0} />);
  })

  it('should render 0 panels with class .proof-step-active', () => {
    expect(wrapper.find('.proof-step-active')).toHaveLength(0);
  });

  it('should add the class to only 1 panel, the one which should be active for step 2', () => {
    wrapper.setProps({ 
      proofStepPanels: [
        {
          name: 'proofStepPanel1',
          activeForSteps: [1],
          content: <p>Obsah aktivni pro krok 1</p>
        },
        {
          name: 'proofStepPanel2',
          activeForSteps: [2, 4],
          content: <p>Obsah aktivni pro krok 2</p>
        },
      ],
      currentStep: 2,
    });

    expect(wrapper.find('.proof-step-active')).toHaveLength(1);
  })
})