import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconAlternative(props) {
  const type = TYPES.ALTERNATIVE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M19.4246,5.78247 L5.28246438,19.9246056 L4.5753576,19.2174988 L18.7174932,5.07536322 L19.4246,5.78247 Z M12,8.96455 L11.9645,9 L9,9 L9,11.9645 L8.96455,12 L7,12 L7,9 L4,9 L4,7 L7,7 L7,4 L9,4 L9,7 L12,7 L12,8.96455 Z M12.0356,17 L14.0356,15 L21,15 L21,17 L12.0356,17 Z" />
    </IconPrimitive>
  );
}

IconAlternative.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconAlternative.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconAlternative.REFS = REFS;
