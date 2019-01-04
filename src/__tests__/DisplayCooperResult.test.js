import React from 'react';
import { mount, shallow } from 'enzyme';

import DisplayCooperResult from '../DisplayCooperResult';

describe('<DisplatCooperResult />', () => {
  it('evaluates the correct result', () => {
    const describedComponent = mount(<DisplayCooperResult distance="1000" gender="female" age="23"/>);
    const response = <p>Result: Poor</p>
    expect(describedComponent.contains(response)).toEqual(true)
  })
})