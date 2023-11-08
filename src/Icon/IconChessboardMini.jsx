import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconChessboardMini(props) {
  const type = TYPES.CHESSBOARD_MINI;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M7.29411 16.7059V19.0588H9.64705V16.7059H7.29411Z" />
      <path d="M7.29411 16.7059V14.3529H4.94117V16.7059H7.29411Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5882 11.4118V22H2V11.4118H12.5882ZM9.64705 14.3529H12V12H9.64705V14.3529ZM9.64705 16.7059V14.3529H7.29411V12H4.94117V14.3529H2.58823V16.7059H4.94117V19.0588H2.58823V21.4118H4.94117V19.0588H7.29411V21.4118H9.64705V19.0588H12V16.7059H9.64705Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2 17.6037H22V2H6.39632V9.80001H7.26319V6.33436H10.7307V9.80001H14.1982V6.33436H17.6656V9.80185H14.2V13.2693H17.6656V16.7368H14.2V17.6037ZM17.6656 13.2693V9.80185H21.1331V13.2693H17.6656ZM17.6656 6.33436H21.1331V2.86687H17.6656V6.33436ZM14.1982 6.33436H10.7307V2.86687H14.1982V6.33436Z"
      />
    </IconPrimitive>
  );
}

IconChessboardMini.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconChessboardMini.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconChessboardMini.REFS = REFS;
