import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconEtude(props) {
  const type = TYPES.ETUDE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M12 14.7331L4.62882 9L12 3.26686L19.3712 9L12 14.7331ZM12 2L3 9L12 16L21 9L12 2Z" />
      <path d="M12 20.436L3.30693 13.6748L2.69299 14.4642L12 21.7029L21.3069 14.4642L20.693 13.6748L12 20.436Z" />
    </IconPrimitive>
  );
}

IconEtude.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconEtude.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconEtude.REFS = REFS;
