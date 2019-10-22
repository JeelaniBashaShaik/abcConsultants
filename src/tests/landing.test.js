import React from 'react';
import { shallow } from 'enzyme';
import '../testSetup';
import App from '../components/landing';
import FilterQueryComponent from '../components/filterQuery';
import InputQuery from '../components/inputQuery';

describe('App Component test suite', () => {
  const container = shallow(<App />);

  it('should render child components', () => {
    expect(container.containsMatchingElement(<FilterQueryComponent />));
    expect(container.containsMatchingElement(<InputQuery />));
  });
});
