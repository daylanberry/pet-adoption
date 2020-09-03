import React from 'react';
import { create } from 'react-test-renderer';
import Details from '../Details';

test('snapshot', () => {
  const c = create(<Details />)

  expect(c.toJSON()).toMatchSnapshot();
})

test('shows modal when toggleModal is called', () => {
  const c = create(<Details search={() => {}} />)
  const instance = c.getInstance();

  console.log(instance)


})