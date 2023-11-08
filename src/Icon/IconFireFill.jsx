import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconFireFill(props) {
  const type = TYPES.FIRE_FILL;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m9.05596,0.16954l0.58809,0.24584c3.40696,1.42424 4.97631,4.05874 5.69096,6.30761c0.35718,1.12392 0.50358,2.15809 0.56097,2.91115c0.01641,0.21533 0.02558,0.40809 0.03029,0.57387c0.08941,-0.05719 0.18683,-0.12369 0.29005,-0.20039c0.50086,-0.3722 1.13929,-0.98499 1.66426,-1.94021l0.25362,-0.46151l0.38508,0.37097c0.59596,0.57401 1.42113,1.71296 2.06663,3.0628c0.64535,1.34926 1.13587,2.96041 1.00514,4.47529c-0.12496,1.56177 -0.50117,3.3143 -1.55837,4.59139c-3.22742,4.22095 -9.38651,4.80937 -13.96882,1.99136c-2.36454,-1.39377 -3.38198,-3.90464 -3.63458,-6.33801l-0.00109,-0.0105c-0.12468,-1.68149 -0.01031,-3.68792 1.05065,-5.22095l0.0043,-0.00623c0.51315,-0.71057 1.15039,-1.36136 1.79191,-2.00523c0.04735,-0.04753 0.09475,-0.09504 0.14214,-0.14254c0.60103,-0.60245 1.20286,-1.20571 1.74586,-1.87632c1.15819,-1.43036 2.03926,-3.1561 1.92097,-5.72003l-0.02807,-0.60835z"
      />
    </IconPrimitive>
  );
}

IconFireFill.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconFireFill.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconFireFill.REFS = REFS;
