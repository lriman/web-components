import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconFlipBoard(props) {
  const type = TYPES.FLIP_BOARD;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M2 21V1H22V6.00003L17.0174 6V2H11.9651V6H6.98257V2H3V6H6.98257V11H3V16H6.98257V20H7.00001V21H2Z" />
      <path d="M7.04485 16H6.98257V11H8.77895C7.82519 12.4628 7.21008 14.1665 7.04485 16Z" />
      <path d="M12.0349 7.75633V6H17.0174V6.04332C15.1919 6.20491 13.4945 6.81247 12.0349 7.75633Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3536 7.14648L22.7071 10.5L19.3536 13.8536L18.6464 13.1465L20.7929 11H17.5C16.0413 11 14.6424 11.5795 13.6109 12.611C12.5795 13.6424 12 15.0413 12 16.5C12 17.9587 12.5795 19.3577 13.6109 20.3891C14.6424 21.4206 16.0413 22 17.5 22H21.9V23H17.5C15.7761 23 14.1228 22.3152 12.9038 21.0962C11.6848 19.8772 11 18.2239 11 16.5C11 14.7761 11.6848 13.1228 12.9038 11.9038C14.1228 10.6849 15.7761 10 17.5 10H20.7929L18.6464 7.85359L19.3536 7.14648Z"
      />
    </IconPrimitive>
  );
}

IconFlipBoard.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconFlipBoard.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconFlipBoard.REFS = REFS;
