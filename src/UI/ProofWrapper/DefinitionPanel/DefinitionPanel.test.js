import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DefinitionPanel from './DefinitionPanel';

// Connect enzyme to React
configure({ adapter: new Adapter() });

describe('DefinitionPanel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DefinitionPanel definitionPanels={[]} currentStep={0} />);
  })

  it('should render 0 panels with .definition-panel CSS class', () => {
    expect(wrapper.find('.definition-panel')).toHaveLength(0);
  });

  it('should render only the panel with showForSteps property equal to 4', () => {
    wrapper.setProps({ 
      definitionPanels: [
        {
          id: 1,
          showForSteps: [2, 3],
          content: <p>Fiktivni definice pro krok 2 a 3.</p>
        },
        {
          id: 2,
          showForSteps: [4],
          content: <p>Fiktivni definice pro krok 4.</p>
        },
      ],
      currentStep: 4,
    });

    expect(wrapper.contains(<p>Fiktivni definice pro krok 2 a 3.</p>)).toBe(false);
    expect(wrapper.contains(<p>Fiktivni definice pro krok 4.</p>)).toBe(true);
  });
});
