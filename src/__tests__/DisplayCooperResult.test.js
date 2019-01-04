import React from 'react';
import { mount, shallow } from 'enzyme';

import DisplayCooperResult from '../DisplayCooperResult';

describe('<DisplatCooperResult />', () => {
  it('evaluates the correct result for female/poor', () => {
    const describedComponent = mount(<DisplayCooperResult distance="1000" gender="female" age="23"/>);
    const response = <p>Result: Poor</p>
    console.log(describedComponent.text())
    expect(describedComponent.contains(response)).toEqual(true)
  })

  it('evaluates the correct result for female/average', () => {
    const describedComponent = mount(<DisplayCooperResult distance="2000" gender="female" age="23"/>);
    const response = <p>Result: Average</p>
    expect(describedComponent.contains(response)).toEqual(true)
  })
})