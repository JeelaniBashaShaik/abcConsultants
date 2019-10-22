import React from 'react';
import { shallow } from 'enzyme';
import './testSetup';
import App from './App';
import FilterQueryComponent from './filterQuery';
import InputQuery from './inputQuery';

describe('App Component test suite', () => {
  
  const container = shallow(<App />);
  
  it('should render child components', () => {
    expect(container.containsMatchingElement(<FilterQueryComponent />));
    expect(container.containsMatchingElement(<InputQuery />))
  })

})
