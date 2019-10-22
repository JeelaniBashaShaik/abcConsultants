import React from 'react';
import { shallow } from 'enzyme';
import './testSetup';
import FilterQuery from './filterQuery';

describe('FilterQueryComponent tests', () => {
    
    const clearFilter = jest.fn();
    const filterRepos = jest.fn();
    const hasRepos = false;
    const container = shallow(<FilterQuery clearFilter={clearFilter} filterRepos={filterRepos} hasRepos={hasRepos}/>);
  
      it('should disable the filter clear button if input field is empty', () => {
        container.find('input[type="text"]').simulate('change', {
          target : {
            value: ''
          }
        });
        expect(container.find('#filterClearButton').prop('disabled')).toBeTruthy();
      });
  
      it('should enable the filter clear button if something is typed in filter field', () => {
        container.find('input[type="text"]').simulate('change', {
          target : {
            value: 'random text'
          }
        });
        expect(container.find('#filterClearButton').prop('disabled')).toBeFalsy();
        expect(filterRepos).toHaveBeenCalled();     
      });
  
      it('should clear the text in input field on click of clear button', () => {
        container.find('input[type="text"]').simulate('change', {
          target : {
            value: 'random text'
          }
        });
        container.find('#filterClearButton').simulate('click');
        expect(container.find('#filterInputBox').prop('value')).toEqual('');
      });

      it('should disable the input field if hasRepos is false', () => {
        expect(container.find('#filterInputBox').prop('disabled')).toBeTruthy(); // value set on line #10
      });
  
})