import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconQuestion(props) {
  const type = TYPES.QUESTION;

  return (
    <IconPrimitive {...props} type={type} viewBox={56}>
      <path d="M0 0L32 0L32 56L0 56L0 0Z" transform="translate(12 0)" id="Background" fill="none" stroke="none" />
      <path
        d="M10.8633 30.8672C10.2773 32.4845 9.96093 34.6874 9.91405 37.4765L16.418 37.4765C16.418 33.9141 17.2734 31.1837 18.9844 29.285L22.8164 25.4882C26.6134 21.5039 28.5118 17.4609 28.5118 13.3594C28.5118 9.21094 27.2694 5.95313 24.7851 3.58593Q21.0937 0 14.4492 0C10.1836 0 6.71485 1.17187 4.04296 3.51564Q0.0703201 6.99608 0 12.6914L6.50389 12.6914C6.50389 10.5586 7.23048 8.85937 8.6836 7.59374C10.1367 6.32812 12.0586 5.69532 14.4492 5.69532C16.9102 5.69532 18.7851 6.39844 20.0742 7.80468C21.3633 9.1875 22.0078 11.1094 22.0078 13.5703C22.0078 16.125 21.0234 18.5156 19.0547 20.7422L14.4492 25.4882C12.6445 27.457 11.4492 29.2501 10.8633 30.8672ZM10.582 45.9845C9.94924 46.6874 9.63281 47.5664 9.63281 48.621C9.63281 49.6757 9.94924 50.5546 10.582 51.2578C11.2383 51.9375 12.1992 52.2773 13.4649 52.2773C14.7305 52.2773 15.6914 51.9375 16.3477 51.2578C17.0039 50.5546 17.332 49.6757 17.332 48.621C17.332 47.5664 17.0039 46.6874 16.3477 45.9845C15.6914 45.2578 14.7305 44.8946 13.4649 44.8946C12.1992 44.8946 11.2383 45.2578 10.582 45.9845Z"
        transform="translate(14.63672 1.442711)"
        id="Shape"
        fillRule="evenodd"
        stroke="none"
      />
    </IconPrimitive>
  );
}

IconQuestion.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconQuestion.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconQuestion.REFS = REFS;
