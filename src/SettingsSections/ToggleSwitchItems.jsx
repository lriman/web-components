import React from 'react';
import PropTypes from 'prop-types';

import { H5, Block, Span } from '../Typography';
import Grid, { Item } from '../Grid';
import InputToggleSwitch from '../Input/InputToggleSwitch';

const ToggleSwitchItems = props => {
  const { items, values, title, handleChange } = props;

  return (
    <Block vPadding="xl">
      {title && (
        <Block vPadding="l">
          <H5>{title}</H5>
        </Block>
      )}
      <Grid spacing="xl">
        {items.map(item => (
          <Item size={item.size} tablet={item.tablet} desktop={item.desktop} key={item.id}>
            <Block>
              <InputToggleSwitch id={item.id} checked={values[item.id]} onChange={handleChange}>
                <Span size="l" color="secondary">
                  {item.label}
                </Span>
              </InputToggleSwitch>
            </Block>
          </Item>
        ))}
      </Grid>
    </Block>
  );
};

ToggleSwitchItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string,
  values: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func,
};

ToggleSwitchItems.defaultProps = {
  title: undefined,
  handleChange: undefined,
};

export default ToggleSwitchItems;
