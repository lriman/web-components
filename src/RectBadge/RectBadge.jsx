import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS, REFS } from './_constants';
import { StyledRectBadge } from './_style';

export default function RectBadge(props) {
  const { value, color, size, ...rest } = props;

  return (
    <StyledRectBadge {...addDataAttributes({ component: COMPONENTS.GENERAL })} {...rest} sColor={color} sSize={size}>
      {value}
    </StyledRectBadge>
  );
}

RectBadge.propTypes = {
  value: PropTypes.node,
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
};

RectBadge.defaultProps = {
  value: null,
  color: REFS.COLORS.BLACK,
  size: REFS.SIZES.M,
};
