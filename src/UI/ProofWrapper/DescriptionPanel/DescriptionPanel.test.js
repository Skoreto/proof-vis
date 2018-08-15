import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DescriptionPanel from './DescriptionPanel';

// Connect enzyme to React
configure({ adapter: new Adapter() });

describe('DescriptionPanel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DescriptionPanel descriptionPanels={[]} currentStep={0} />);
  })

  const descriptionPanels = [
    {
      id: 3,
      showForSteps: [3],
      content: <p>Popis vizualizace v kroku 3.</p>
    },
    {
      id: 4,
      showForSteps: [4],
      content: <p>Popis vizualizace v kroku 4.</p>
    },
  ];

  it('should render only the panel with showForSteps property equal to 3', () => {
    wrapper.setProps({ 
      descriptionPanels: descriptionPanels,
      currentStep: 3,
    });

    expect(wrapper.contains(<p>Popis vizualizace v kroku 3.</p>)).toBe(true);
    expect(wrapper.contains(<p>Popis vizualizace v kroku 4.</p>)).toBe(false);
  });

  it('should render only the panel with showForSteps property equal to 4', () => {
    wrapper.setProps({ 
      descriptionPanels: descriptionPanels,
      currentStep: 4,
    });

    expect(wrapper.contains(<p>Popis vizualizace v kroku 3.</p>)).toBe(false);
    expect(wrapper.contains(<p>Popis vizualizace v kroku 4.</p>)).toBe(true);
  });
});
