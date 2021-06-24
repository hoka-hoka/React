import React from 'react';
import renderer from 'react-test-renderer';
import TestComponent from '../common/TestComponent';

test('Link', () => {
  const obj = {
    createAt: new Date(),
    id: Math.random(),
  };

  expect(obj).toMatchSnapshot();
});
