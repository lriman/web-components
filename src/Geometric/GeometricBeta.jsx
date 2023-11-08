import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import GeometricPrimitive from './_internal/GeometricPrimitive';

export default function GeometricBeta(props) {
  const type = TYPES.BETA;

  return (
    <GeometricPrimitive {...props} type={type} width={620} height={1040}>
      <polygon points="620 0 620 1040 2.77101251e-06 276.9083 348.37016 0" />
    </GeometricPrimitive>
  );
}

GeometricBeta.propTypes = {
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

GeometricBeta.defaultProps = {
  color: REFS.COLORS.NORMAL,
};

GeometricBeta.REFS = REFS;
