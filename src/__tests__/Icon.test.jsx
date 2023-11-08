import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Icon from '../Icon';

describe('Icon', () => {
  const types = Object.values(Icon.REFS.TYPES);
  const sizes = Object.values(Icon.REFS.SIZES);
  const colors = Object.values(Icon.REFS.COLORS);

  types.forEach(type => {
    it(`type ${type}`, () => {
      const wrapper = TestRenderer.create(<Icon type={type} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });

  sizes.forEach(size => {
    it(`size ${size}`, () => {
      const wrapper = TestRenderer.create(<Icon type={Icon.REFS.TYPES.ARROW_DOWN} size={size} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });

  colors.forEach(color => {
    it(`color ${color}`, () => {
      const wrapper = TestRenderer.create(<Icon type={Icon.REFS.TYPES.ARROW_DOWN} color={color} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
