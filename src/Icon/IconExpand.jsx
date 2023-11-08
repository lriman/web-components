import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconExpand(props) {
  const type = TYPES.EXPAND;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7847 2.22266H21.7616V8.1677H20.7616V3.9248L13.7411 10.9045L13.036 10.1953L20.0495 3.22266H15.7847V2.22266ZM2.34084 2.22293L8.31774 2.22293V3.22293L4.05294 3.22293L11.0664 10.1956L10.3614 10.9048L3.34084 3.92507V8.16797H2.34084V2.22293ZM13.741 13.0955L20.7615 20.0752V15.8323H21.7615V21.7773H15.7846V20.7773H20.0494L13.0359 13.8047L13.741 13.0955ZM10.964 13.8049L3.95057 20.7776H8.21536V21.7776H2.23846L2.23846 15.8326H3.23846L3.23846 20.0755L10.259 13.0958L10.964 13.8049Z"
      />
    </IconPrimitive>
  );
}

IconExpand.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconExpand.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconExpand.REFS = REFS;
