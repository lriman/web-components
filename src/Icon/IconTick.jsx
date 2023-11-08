import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconTick(props) {
  const type = TYPES.TICK;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M9.65958283,17.487712 L2.7501831,9.6491082 C2.38498809,9.23480029 1.75307612,9.19498641 1.3387682,9.56018142 C0.924460286,9.92537643 0.88464641,10.5572884 1.24984142,10.9715963 L8.90941142,19.6612563 C9.30754338,20.1129307 10.0116203,20.1129309 10.4097526,19.6612569 L22.7501826,5.66125688 C23.1153779,5.24694924 23.0755645,4.61503723 22.6612569,4.24984191 C22.2469492,3.88464659 21.6150372,3.92446 21.2498419,4.33876764 L9.65958283,17.487712 Z" />
    </IconPrimitive>
  );
}

IconTick.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconTick.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconTick.REFS = REFS;
