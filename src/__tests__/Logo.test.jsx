import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Logo from '../Logo';

describe('Logo', () => {
  const sizes = Object.values(Logo.REFS.SIZES);

  sizes.forEach(size => {
    describe(`size ${size}`, () => {
      it(`normal`, () => {
        const wrapper = TestRenderer.create(<Logo size={size} />).toJSON();
        expect(wrapper).toMatchSnapshot();
      });

      it(`light`, () => {
        const wrapper = TestRenderer.create(<Logo size={size} light />).toJSON();
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
