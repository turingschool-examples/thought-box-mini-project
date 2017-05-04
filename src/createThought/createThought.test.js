import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateThought from './createThought.js';

describe('CreateThought', () => {

  it.skip('has two input fields', () => {
  });

  it.skip('has a default state containing a body and title both starting with empty string', () => {
  });

  it.skip('fires an onChange event on user input which should update both state & the input field', () => {
  });

  it.skip('fires onChange on second input which should update both state & the input field', () => {
  });

  it.skip('has a submit button', () => {
  });

  it.skip('fires submitIdea function with the data from state as an argument, and input fields go back to empty strings', () => {
    const mockedSubmit = jest.fn();
    const wrapper = mount(
      <CreateThought createThought={mockedSubmit} />
    );
    const expectedState = {
      title: '',
      body: ''
    };
    const input = wrapper.find('input').last();
    input.simulate('change', { target: { value: 'abc' } });
    wrapper.find('button').simulate('click');


    // What input field are we trying to target? What is the action we want to simulate?

    // Find the DOM element you want to click on and click on that thing

    // Expect that the value of the input node equals a string
  });



});
