import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Grid from '../Grid';

describe('Grid', () => {
  const justify = Object.values(Grid.REFS.JUSTIFY);
  const alignItems = Object.values(Grid.REFS.ALIGN_ITEMS);
  const spacing = Object.values(Grid.REFS.SPACING);

  justify.forEach(justifyValue => {
    it(`justify ${justifyValue}`, () => {
      const wrapper = TestRenderer.create(
        <Grid justify={justifyValue}>
          <Grid.Item>Grid Item</Grid.Item>
        </Grid>,
      ).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });

  alignItems.forEach(alignItemsValue => {
    it(`alignItems ${alignItemsValue}`, () => {
      const wrapper = TestRenderer.create(
        <Grid alignItems={alignItemsValue}>
          <Grid.Item>Grid Item</Grid.Item>
        </Grid>,
      ).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });

  spacing.forEach(spacingValue => {
    it(`spacing ${spacingValue}`, () => {
      const wrapper = TestRenderer.create(
        <Grid spacing={spacingValue}>
          <Grid.Item>Grid Item</Grid.Item>
        </Grid>,
      ).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });

  it(`item size`, () => {
    const wrapper = TestRenderer.create(
      <Grid>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(size => (
          <Grid.Item key={size} size={size}>
            Grid Item, size: {size}
          </Grid.Item>
        ))}
      </Grid>,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it(`item tablet`, () => {
    const wrapper = TestRenderer.create(
      <Grid>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(size => (
          <Grid.Item key={size} tablet={size}>
            Grid Item, tablet: {size}
          </Grid.Item>
        ))}
      </Grid>,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it(`item desktop`, () => {
    const wrapper = TestRenderer.create(
      <Grid>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(size => (
          <Grid.Item key={size} desktop={size}>
            Grid Item, desktop: {size}
          </Grid.Item>
        ))}
      </Grid>,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
