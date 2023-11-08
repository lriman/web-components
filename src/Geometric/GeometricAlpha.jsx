import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import GeometricPrimitive from './_internal/GeometricPrimitive';

export default function GeometricAlpha(props) {
  const type = TYPES.ALPHA;

  return (
    <GeometricPrimitive {...props} type={type} width={830} height={947}>
      <polygon points="0 0 0 946.252943 829 550.680399 580.726139 0" />
    </GeometricPrimitive>
  );
}

GeometricAlpha.propTypes = {
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

GeometricAlpha.defaultProps = {
  color: REFS.COLORS.NORMAL,
};

GeometricAlpha.REFS = REFS;
