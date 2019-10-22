import React from 'react';
import { shallow } from 'enzyme';
import '../testSetup';
import InputQuery from '../components/inputQuery';

describe('InputQuery Component test suite', () => {
  const clearUserName = jest.fn();
  const container = shallow(<InputQuery clearUserName={clearUserName} />);

  it('should have a text field', () => {
    expect(container.find('input[type="text"]').length).toEqual(1);
  });

  it('should replicate the value', () => {
    container.find('input[type="text"]').simulate('change', {
      target: {
        value: 'jeelanibashashaik',
      },
    });
    expect(container.find('input[type="text"]').prop('value')).toEqual(
      'jeelanibashashaik',
    );
  });

  it('should disable the go and clear button if input field is empty', () => {
    container.find('input[type="text"]').simulate('change', {
      target: {
        value: '',
      },
    });
    expect(container.find('#goButton').prop('disabled')).toBeTruthy();
    expect(container.find('#clearButton').prop('disabled')).toBeTruthy();
  });

  it('should enable the go and clear button if input field is filled with some text ', () => {
    container.find('input[type="text"]').simulate('change', {
      target: {
        value: 'random text',
      },
    });
    expect(container.find('#goButton').prop('disabled')).toBeFalsy();
    expect(container.find('#clearButton').prop('disabled')).toBeFalsy();
  });

  it('should clear the text in input field on click of clear button', () => {
    container.find('input[type="text"]').simulate('change', {
      target: {
        value: 'random text',
      },
    });
    container.find('#clearButton').simulate('click');
    expect(container.find('#userInputBox').prop('value')).toEqual('');
    expect(clearUserName).toHaveBeenCalled();
  });
});
