import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import GeometricPrimitive from './_internal/GeometricPrimitive';

export default function GeometricGamma(props) {
  const type = TYPES.GAMMA;

  return (
    <GeometricPrimitive {...props} type={type} width={750} height={883}>
      <polygon points="749 1 439.277844 1 1.00000279 353.767 426.460794 881.887134 749 881.887134" />
    </GeometricPrimitive>
  );
}

GeometricGamma.propTypes = {
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

GeometricGamma.defaultProps = {
  color: REFS.COLORS.NORMAL,
};

GeometricGamma.REFS = REFS;
