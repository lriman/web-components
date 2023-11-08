import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconQuestionCircle(props) {
  const type = TYPES.QUESTION_CIRCLE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path d="M12,24.106 C5.372583,24.106 0,18.733417 0,12.106 C0,5.478583 5.372583,0.106 12,0.106 C18.627417,0.106 24,5.478583 24,12.106 C24,18.733417 18.627417,24.106 12,24.106 Z M12,23.106 C18.0751322,23.106 23,18.1811322 23,12.106 C23,6.03086775 18.0751322,1.106 12,1.106 C5.92486775,1.106 1,6.03086775 1,12.106 C1,18.1811322 5.92486775,23.106 12,23.106 Z M10.5512,15.142 L10.5512,12.19 C11.5352,12.142 12.3032,11.902 12.8552,11.47 C13.4192,11.038 13.7012,10.444 13.7012,9.68796 L13.7012,9.43596 C13.7012,8.82396 13.5092,8.33796 13.1252,7.97796 C12.7412,7.60596 12.2252,7.41996 11.5772,7.41996 C10.8812,7.41996 10.3232,7.61796 9.90316,8.01396 C9.49516,8.40996 9.21916,8.91396 9.07516,9.52596 L7.74316,9.02196 C7.85116,8.63796 8.00716,8.27196 8.21116,7.92396 C8.42716,7.56396 8.69116,7.25196 9.00316,6.98796 C9.32716,6.71196 9.70516,6.49596 10.1372,6.33996 C10.5692,6.18396 11.0672,6.10596 11.6312,6.10596 C12.7472,6.10596 13.6292,6.41196 14.2772,7.02396 C14.9252,7.63596 15.2492,8.46396 15.2492,9.50796 C15.2492,10.084 15.1472,10.588 14.9432,11.02 C14.7512,11.44 14.4992,11.8 14.1872,12.1 C13.8752,12.4 13.5212,12.64 13.1252,12.82 C12.7292,13 12.3332,13.126 11.9372,13.198 L11.9372,15.142 L10.5512,15.142 Z M11.2532,19.102 C10.8692,19.102 10.5872,19.006 10.4072,18.814 C10.2392,18.622 10.1552,18.37 10.1552,18.058 L10.1552,17.824 C10.1552,17.512 10.2392,17.26 10.4072,17.068 C10.5872,16.876 10.8692,16.78 11.2532,16.78 C11.6372,16.78 11.9132,16.876 12.0812,17.068 C12.2612,17.26 12.3512,17.512 12.3512,17.824 L12.3512,18.058 C12.3512,18.37 12.2612,18.622 12.0812,18.814 C11.9132,19.006 11.6372,19.102 11.2532,19.102 Z" />
    </IconPrimitive>
  );
}

IconQuestionCircle.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconQuestionCircle.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconQuestionCircle.REFS = REFS;
