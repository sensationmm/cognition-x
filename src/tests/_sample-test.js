import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory, findByTestAttr } from './test-utils.js';

import Component from '../components/Component';

const setup = (initialState={}) => {
  const store = storeFactory(initialState);

  const wrapper = shallow(<Component store={store} />).dive();
  
  return wrapper;
}

describe('render', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      //state variables to pass to instance
    };

    wrapper = setup(initialState);
  });

  test('renders the component without error', () => {
    const component = findByTestAttr(wrapper, 'component-name');
    expect(component.length).toBe(1);
  });

  // all ui variations as expected
});

describe('redux props', () => {
  // test comppnent is receiving all the props it should
});

describe('action calls', () => {
  //test events call the actions they are supposed to
});
