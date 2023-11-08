import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconDownload(props) {
  const type = TYPES.DOWNLOAD;
  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.5C12.2762 3.5 12.5 3.72386 12.5 4V13.7929L15.2929 11C15.4882 10.8047 15.8048 10.8047 16 11C16.1953 11.1953 16.1953 11.5118 16 11.7071L12 15.7071L8.00003 11.7071C7.80477 11.5118 7.80477 11.1953 8.00003 11C8.19529 10.8047 8.51187 10.8047 8.70714 11L11.5 13.7929V4C11.5 3.72386 11.7239 3.5 12 3.5ZM4 16.5C4 16.2239 4.22386 16 4.5 16C4.77614 16 5 16.2239 5 16.5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V16.5C19 16.2239 19.2239 16 19.5 16C19.7761 16 20 16.2239 20 16.5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V16.5Z"
      />
    </IconPrimitive>
  );
}

IconDownload.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconDownload.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconDownload.REFS = REFS;
