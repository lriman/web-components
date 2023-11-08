import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconPuzzle(props) {
  const type = TYPES.PUZZLE;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0309 0.658647C11.9096 -0.219712 13.3338 -0.219712 14.2124 0.658647L14.2131 0.659356L16.3191 2.77036C16.4954 2.947 16.5722 3.19971 16.5241 3.44455C16.4761 3.68939 16.3094 3.89429 16.0794 3.99119C14.8324 4.51673 14.0916 5.81209 14.271 7.15339C14.4504 8.49469 15.5055 9.54986 16.8468 9.72924C18.1882 9.90862 19.4835 9.16782 20.009 7.92079C20.1059 7.69086 20.3109 7.52418 20.5557 7.47611C20.8005 7.42804 21.0532 7.50488 21.2299 7.6811L23.3416 9.78781C24.2199 10.6664 24.2199 12.0907 23.3416 12.9693L21.0404 15.2705C22.7671 15.8995 24.0002 17.5558 24.0002 19.5001C24.0002 21.9853 21.9855 24.0001 19.5002 24.0001C17.5556 24.0001 15.899 22.7666 15.2703 21.0393L12.9694 23.3375C12.9693 23.3375 12.9695 23.3374 12.9694 23.3375C12.0908 24.2156 10.6665 24.2157 9.78793 23.3375L7.68172 21.2303C7.50524 21.0537 7.42818 20.8009 7.47616 20.5559C7.52414 20.3109 7.69087 20.1059 7.92091 20.0089C9.16794 19.4834 9.90875 18.188 9.72936 16.8467C9.54998 15.5054 8.49482 14.4503 7.15351 14.2709C5.81221 14.0915 4.51686 14.8323 3.99131 16.0793C3.89441 16.3093 3.68951 16.4759 3.44467 16.524C3.19983 16.5721 2.94712 16.4952 2.77048 16.319L0.658769 14.2123C-0.21959 13.3337 -0.21959 11.9094 0.658769 11.0308L2.96 8.72958C1.23323 8.10062 0.000179686 6.44434 0.000179686 4.50006C0.000179686 2.01478 2.0149 5.76153e-05 4.50018 5.76153e-05C6.44446 5.76153e-05 8.10075 1.23311 8.7297 2.95988L11.0309 0.658647ZM12.0914 1.71947C12.0914 1.71949 12.0915 1.71944 12.0914 1.71947L8.78051 5.03039C8.56601 5.24489 8.24342 5.30905 7.96317 5.19297C7.68291 5.07688 7.50018 4.8034 7.50018 4.50006C7.50018 2.8432 6.15703 1.50006 4.50018 1.50006C2.84333 1.50006 1.50018 2.8432 1.50018 4.50006C1.50018 6.15691 2.84333 7.50006 4.50018 7.50006C4.80353 7.50006 5.077 7.68279 5.19309 7.96305C5.30918 8.2433 5.24501 8.56589 5.03051 8.78039L1.71959 12.0913C1.71956 12.0913 1.71962 12.0913 1.71959 12.0913C1.42698 12.3841 1.42683 12.8586 1.71929 13.1515C1.71939 13.1516 1.71919 13.1514 1.71929 13.1515L3.13836 14.5672C4.09654 13.2721 5.70123 12.5633 7.35235 12.7841C9.36431 13.0532 10.947 14.6359 11.2161 16.6479C11.4369 18.2987 10.7285 19.9031 9.43378 20.8613L10.8484 22.2766C11.1413 22.5692 11.6161 22.5694 11.9089 22.2766L15.2202 18.9694C15.4347 18.7551 15.7573 18.6911 16.0374 18.8072C16.3175 18.9234 16.5002 19.1968 16.5002 19.5001C16.5002 21.1569 17.8433 22.5001 19.5002 22.5001C21.157 22.5001 22.5002 21.1569 22.5002 19.5001C22.5002 17.8432 21.157 16.5001 19.5002 16.5001C19.1968 16.5001 18.9234 16.3173 18.8073 16.0371C18.6912 15.7568 18.7554 15.4342 18.9698 15.2197L22.2808 11.9088C22.2808 11.9088 22.2807 11.9088 22.2808 11.9088C22.5734 11.616 22.5735 11.1414 22.281 10.8485C22.2809 10.8485 22.2811 10.8486 22.281 10.8485L20.862 9.4329C19.9038 10.7281 18.2991 11.4368 16.648 11.216C14.6361 10.9469 13.0533 9.36418 12.7842 7.35223C12.5634 5.70111 13.2722 4.09641 14.5673 3.13824L13.1519 1.71947C13.1518 1.71937 13.152 1.71957 13.1519 1.71947C12.8591 1.42701 12.3842 1.42686 12.0914 1.71947Z"
      />
    </IconPrimitive>
  );
}

IconPuzzle.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconPuzzle.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconPuzzle.REFS = REFS;
