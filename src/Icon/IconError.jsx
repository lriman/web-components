import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconError(props) {
  const type = TYPES.ERROR;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path d="M4.29325,11.70725 C3.90225,11.31725 3.90225,10.68325 4.29325,10.29325 L6.58625,8.00025 L4.29325,5.70725 C3.90225,5.31725 3.90225,4.68325 4.29325,4.29325 C4.68325,3.90225 5.31725,3.90225 5.70725,4.29325 L8.00025,6.58625 L10.29325,4.29325 C10.68325,3.90225 11.31725,3.90225 11.70725,4.29325 C12.09825,4.68325 12.09825,5.31725 11.70725,5.70725 L9.41425,8.00025 L11.70725,10.29325 C12.09825,10.68325 12.09825,11.31725 11.70725,11.70725 C11.31725,12.09825 10.68325,12.09825 10.29325,11.70725 L8.00025,9.41425 L5.70725,11.70725 C5.31725,12.09825 4.68325,12.09825 4.29325,11.70725 Z" />
    </IconPrimitive>
  );
}

IconError.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconError.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconError.REFS = REFS;
