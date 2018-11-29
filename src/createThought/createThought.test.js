import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateThought from './CreateThought.js';

describe('CreateThought', () => {

  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<CreateThought />);
    expect(wrapper).toMatchSnapshot()
  });

  it.skip('updates the state of the title field', () => {
    const wrapper = mount(<CreateThought/>);
    const mockEvent = { target: { value: 'abc', name: 'title' } }
    const expectedState = {
      title: 'abc',
      body: ''
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  });

  it.skip('updates the state of the body field', () => {
    const wrapper = mount(<CreateThought/>);
    const mockEvent = { target: { value: 'abc', name: 'body' } }
    const expectedState = {
      title: '',
      body: 'abc'
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  });

  it.skip('calls createThought prop function with the data from state as an argument, and input fields go back to empty strings', () => {
    const createThoughtMock = jest.fn();
    const wrapper = shallow(
      <CreateThought createThought={createThoughtMock} />
    );
    const expectedState = {
      title: '',
      body: ''
    };

    // How do we call handleSubmit?
    
    // How do we assert that our mock was called with the
    // correct params?
  });

});
