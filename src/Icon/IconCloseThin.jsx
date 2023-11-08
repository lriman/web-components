import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconCloseThin(props) {
  const type = TYPES.CLOSE_THIN;

  return (
    <IconPrimitive {...props} type={type} viewBox={34}>
      <path d="M31.9392 33.0663C31.8067 32.9337 31.6741 32.9337 31.6741 32.8012C26.638 27.7651 21.7344 22.8614 16.6982 17.8253C16.5657 17.6928 16.4332 17.6928 16.1681 17.8253C11.2645 22.8614 6.22836 27.8976 1.32475 32.8012L1.19222 32.9337C1.05969 32.9337 0.927156 32.9337 0.927156 32.9337C0.662095 32.6687 0.397035 32.4036 0.131975 32.1386C-0.000555269 32.006 0.131975 31.8735 0.131975 31.741C1.05969 30.8133 2.11993 29.753 3.04764 28.8253C7.02354 24.7169 11.132 20.741 15.1079 16.6325C15.3729 16.3675 15.3729 16.3675 15.1079 16.1024C10.2043 11.3313 5.16812 6.29518 0.131975 1.25904C-0.000555269 0.993976 -0.000555269 0.993976 0.264505 0.728916C0.397035 0.596386 0.662095 0.331325 0.794625 0.198795C0.927156 0.0662651 0.927155 0.0662651 1.19222 0.198795C2.78258 1.78916 4.24041 3.24699 5.83077 4.83735C9.27655 8.28313 12.7223 11.7289 16.1681 15.1747C16.4332 15.4398 16.4332 15.4398 16.6982 15.1747C21.7344 10.1386 26.638 5.23494 31.6741 0.198795C31.9392 -0.0662651 31.9392 -0.0662651 32.2043 0.198795C32.3368 0.331325 32.6019 0.596386 32.7344 0.728916C32.9994 0.861446 32.9994 0.993976 32.7344 1.25904C31.4091 2.45181 30.2163 3.77711 29.0235 4.96988C25.3127 8.68072 21.4693 12.5241 17.7585 16.2349C17.6259 16.3675 17.6259 16.3675 17.4934 16.5C17.6259 16.6325 17.6259 16.6325 17.7585 16.7651C22.7946 21.8012 27.6982 26.7048 32.7344 31.741C32.9994 32.006 32.9994 32.006 32.7344 32.2711C32.4693 32.6687 32.2043 32.8012 31.9392 33.0663Z" />
    </IconPrimitive>
  );
}

IconCloseThin.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconCloseThin.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconCloseThin.REFS = REFS;
