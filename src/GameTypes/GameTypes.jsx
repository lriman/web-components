import React from 'react';
import PropTypes from 'prop-types';

import Block from '../Typography/Block';
import Grid, { Item } from '../Grid';

import GameTypeField from './GameTypeField';
import { REFS } from './_constants';

const GameTypes = props => {
  const { values, options, type, handleChange } = props;

  return (
    <Block>
      <Grid spacing="xl">
        {options.fields.map(item => (
          <Item size={item.size} tablet={item.tablet} desktop={item.desktop} key={item.id}>
            <GameTypeField
              item={item}
              value={values[item.id]}
              times={options.times}
              type={type}
              handleChange={handleChange}
            />
          </Item>
        ))}
      </Grid>
    </Block>
  );
};

GameTypes.propTypes = {
  values: PropTypes.shape({}).isRequired,
  options: PropTypes.shape({
    fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    times: PropTypes.shape({}).isRequired,
  }).isRequired,
  type: PropTypes.oneOf(Object.values(REFS.TYPES)),
  handleChange: PropTypes.func.isRequired,
};

GameTypes.defaultProps = {
  type: REFS.TYPES.NORMAL,
};

GameTypes.REFS = REFS;

export default GameTypes;
