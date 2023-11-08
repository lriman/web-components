import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconLock(props) {
  const type = TYPES.LOCK;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        d="m11.99997,1.98811c-2.63049,0 -4.71147,2.01996 -4.71147,4.44974l0,1.43964l9.42298,0l0,-1.43964c0,-2.42978 -2.08095,-4.44974 -4.71151,-4.44974zm5.8894,5.88938l0,-1.43964c0,-3.13579 -2.66526,-5.62761 -5.8894,-5.62761c-3.22413,0 -5.88934,2.49182 -5.88934,5.62761l0,1.43964l-0.86608,0c-1.45703,0 -2.66753,1.15175 -2.66753,2.60816l0,10.09603c0,1.45641 1.2105,2.60809 2.66753,2.60809l13.51084,0c1.45705,0 2.6676,-1.15168 2.6676,-2.60809l0,-10.09603c0,-1.45641 -1.21055,-2.60816 -2.6676,-2.60816l-0.86602,0zm-12.64483,1.17782c-0.83892,0 -1.48966,0.65633 -1.48966,1.43034l0,10.09603c0,0.77393 0.65074,1.43027 1.48966,1.43027l13.51084,0c0.83895,0 1.4897,-0.65633 1.4897,-1.43027l0,-10.09603c0,-0.774 -0.65075,-1.43034 -1.4897,-1.43034l-13.51084,0zm4.69419,6.47832c0,-1.13839 0.92284,-2.0613 2.06123,-2.0613c1.13846,0 2.0613,0.92291 2.0613,2.0613c0,1.13839 -0.92284,2.0613 -2.0613,2.0613c-1.13839,0 -2.06123,-0.92291 -2.06123,-2.0613zm2.06123,-0.8834c-0.48785,0 -0.8834,0.39555 -0.8834,0.8834c0,0.48792 0.39555,0.8834 0.8834,0.8834c0.48792,0 0.8834,-0.39548 0.8834,-0.8834c0,-0.48785 -0.39548,-0.8834 -0.8834,-0.8834z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </IconPrimitive>
  );
}

IconLock.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconLock.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconLock.REFS = REFS;
