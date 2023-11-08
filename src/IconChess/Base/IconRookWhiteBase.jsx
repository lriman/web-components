import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from '../_constants';
import IconPrimitive from '../_internal/IconPrimitive';

export default function IconRookWhiteBase(props) {
  const type = TYPES.ROOK_WHITE_BASE;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3333 12.6667V11.3334L11 10V5.66669L12.6666 4.33335V1.66669H10.6666V3.00002H9.33331V1.66669H6.66665V3.00002H5.33331V1.66669H3.33331V4.33335L4.99998 5.66669V10L3.66665 11.3334V12.6667H2.33331V14.3334H13.6666V12.6667H12.3333Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.08331 1.41669H5.58331V2.75002H6.41665V1.41669H9.58331V2.75002H10.4166V1.41669H12.9166V4.45351L11.25 5.78684V9.89647L12.5833 11.2298V12.4167H13.9166V14.5834H2.08331V12.4167H3.41665V11.2298L4.74998 9.89647V5.78684L3.08331 4.45351V1.41669ZM3.58331 1.91669V4.2132L5.24998 5.54653V10.1036L3.91665 11.4369V12.9167H2.58331V14.0834H13.4166V12.9167H12.0833V11.4369L10.75 10.1036V5.54653L12.4166 4.2132V1.91669H10.9166V3.25002H9.08331V1.91669H6.91665V3.25002H5.08331V1.91669H3.58331Z"
        fill="#2D2E37"
      />
    </IconPrimitive>
  );
}

IconRookWhiteBase.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconRookWhiteBase.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconRookWhiteBase.REFS = REFS;
