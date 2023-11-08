import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconChartThick(props) {
  const type = TYPES.CHART;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9211 2C14.0256 2 14.9211 2.89543 14.9211 4V20C14.9211 21.1046 14.0256 22 12.9211 22H11.0789C9.97438 22 9.07895 21.1046 9.07895 20V4C9.07895 2.89543 9.97438 2 11.0789 2H12.9211ZM20.5 9.5C21.6046 9.5 22.5 10.3954 22.5 11.5V20C22.5 21.1046 21.6046 22 20.5 22H18.6579C17.5533 22 16.6579 21.1046 16.6579 20V11.5C16.6579 10.3954 17.5533 9.5 18.6579 9.5H20.5ZM5.3421 14.5C6.44667 14.5 7.3421 15.3954 7.3421 16.5V20C7.3421 21.1046 6.44667 22 5.3421 22H3.5C2.39543 22 1.5 21.1046 1.5 20V16.5C1.5 15.3954 2.39543 14.5 3.5 14.5H5.3421Z"
      />
    </IconPrimitive>
  );
}

IconChartThick.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconChartThick.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconChartThick.REFS = REFS;
