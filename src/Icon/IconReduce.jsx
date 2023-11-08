import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconReduce(props) {
  const type = TYPES.REDUCE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.8536 3.045L15.9341 8.96451L20.2088 8.97698L20.2059 9.97698L14.229 9.95954L14.2464 4.01453L15.2464 4.01744L15.234 8.25036L21.1465 2.33789L21.8536 3.045ZM3.04451 2.4169L8.96402 8.33641L8.97649 4.06167L9.97649 4.06459L9.95905 10.0415L4.01404 10.0241L4.01695 9.02413L8.24988 9.03648L2.3374 3.124L3.04451 2.4169ZM4.0641 14.215L10.041 14.2324L10.0236 20.1774L9.02364 20.1745L9.03599 15.9416L3.12351 21.8541L2.41641 21.147L8.33592 15.2275L4.06119 15.215L4.0641 14.215ZM14.2319 14.2295L20.177 14.2468L20.174 15.2468L15.9411 15.2345L21.8536 21.147L21.1465 21.8541L15.227 15.9346L15.2145 20.2093L14.2145 20.2064L14.2319 14.2295Z"
      />
    </IconPrimitive>
  );
}

IconReduce.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconReduce.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconReduce.REFS = REFS;
