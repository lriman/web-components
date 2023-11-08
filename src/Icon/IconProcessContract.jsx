import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconProcessContract(props) {
  const type = TYPES.PROCESS_CONTRACT;

  return (
    <IconPrimitive {...props} type={type} viewBox={32}>
      <path d="M11.33301,24.3333 C9.67611793,24.3333 8.33301,22.9901874 8.33301,21.3333 L8.33301,10.6666 C8.33301,9.00975757 9.67613293,7.66663 11.33301,7.66663 L18.2265,7.66663 C18.9727979,7.66663 19.6923502,7.94481481 20.244466,8.44680375 L22.68447,10.6649483 C23.3097965,11.2335769 23.6663,12.0395154 23.6663,12.8847 L23.6663,21.3333 C23.6663,22.9901847 22.3231847,24.3333 20.6663,24.3333 L11.33301,24.3333 Z M11.33301,22.3333 L20.6663,22.3333 C21.2186153,22.3333 21.6663,21.8856153 21.6663,21.3333 L21.6663,12.8847 C21.6663,12.602947 21.5474497,12.3342651 21.339034,12.1447462 L18.8990792,9.92664641 C18.7150804,9.75935296 18.4752434,9.66663 18.2265,9.66663 L11.33301,9.66663 C10.780704,9.66663 10.33301,10.1143255 10.33301,10.6666 L10.33301,21.3333 C10.33301,21.8856195 10.780689,22.3333 11.33301,22.3333 Z M12.667,21 C12.1147153,21 11.667,20.5522847 11.667,20 C11.667,19.4477153 12.1147153,19 12.667,19 L19.3337,19 C19.8859847,19 20.3337,19.4477153 20.3337,20 C20.3337,20.5522847 19.8859847,21 19.3337,21 L12.667,21 Z M12.667,18.3334 C12.1147153,18.3334 11.667,17.8856847 11.667,17.3334 C11.667,16.7811153 12.1147153,16.3334 12.667,16.3334 L19.3337,16.3334 C19.8859847,16.3334 20.3337,16.7811153 20.3337,17.3334 C20.3337,17.8856847 19.8859847,18.3334 19.3337,18.3334 L12.667,18.3334 Z M12.667,15.6666 C12.1147153,15.6666 11.667,15.2188847 11.667,14.6666 C11.667,14.1143153 12.1147153,13.6666 12.667,13.6666 L19.3337,13.6666 C19.8859847,13.6666 20.3337,14.1143153 20.3337,14.6666 C20.3337,15.2188847 19.8859847,15.6666 19.3337,15.6666 L12.667,15.6666 Z M12.667,13 C12.1147153,13 11.667,12.5522847 11.667,12 C11.667,11.4477153 12.1147153,11 12.667,11 L16.0003,11 C16.5525847,11 17.0003,11.4477153 17.0003,12 C17.0003,12.5522847 16.5525847,13 16.0003,13 L12.667,13 Z" />
    </IconPrimitive>
  );
}

IconProcessContract.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconProcessContract.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconProcessContract.REFS = REFS;
