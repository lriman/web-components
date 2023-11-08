import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import GeometricPrimitive from './_internal/GeometricPrimitive';

export default function GeometricDelta(props) {
  const type = TYPES.DELTA;

  return (
    <GeometricPrimitive {...props} type={type} width={684} height={1130}>
      <polygon points="683 1 342 1 1 276.719721 683 1129.64323" />
    </GeometricPrimitive>
  );
}

GeometricDelta.propTypes = {
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

GeometricDelta.defaultProps = {
  color: REFS.COLORS.NORMAL,
};

GeometricDelta.REFS = REFS;
