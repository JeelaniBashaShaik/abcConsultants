import React from 'react';
import ReactDOM from 'react-dom';
import InputQuery from '../src/inputQuery';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputQuery />, div);
    ReactDOM.unmountComponentAtNode(div);
  });