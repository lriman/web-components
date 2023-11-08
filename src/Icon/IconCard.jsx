import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconCard(props) {
  const type = TYPES.CARD;

  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.03931C0 3.38245 1.34315 2.03931 3 2.03931H17C18.6569 2.03931 20 3.38245 20 5.03931V9.03931H14C12.9856 9.03931 12.0593 9.41694 11.3542 10.0393H2V14.0393C2 14.5916 2.44772 15.0393 3 15.0393H10V17.0393H3C1.34315 17.0393 0 15.6962 0 14.0393V5.03931ZM3 4.03931C2.44772 4.03931 2 4.48702 2 5.03931V7.03931H18V5.03931C18 4.48702 17.5523 4.03931 17 4.03931H3Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 9.03931H20C22.2091 9.03931 24 10.8302 24 13.0393V18.0393C24 20.2484 22.2091 22.0393 20 22.0393H14C11.7909 22.0393 10 20.2484 10 18.0393V13.0393C10 10.8302 11.7909 9.03931 14 9.03931ZM14 10.0393C12.3431 10.0393 11 11.3825 11 13.0393V18.0393C11 19.6962 12.3431 21.0393 14 21.0393H20C21.6569 21.0393 23 19.6962 23 18.0393V13.0393C23 11.3825 21.6569 10.0393 20 10.0393H14Z"
      />
      <path d="M14.1808 18.923L18.611 12.1557H19.8192L15.389 18.923H14.1808ZM14.6476 15.8786C14.1106 15.8786 13.7018 15.7171 13.4211 15.3939C13.1404 15.0707 13 14.5924 13 13.959C13 13.3255 13.1404 12.8472 13.4211 12.5241C13.7018 12.2009 14.1106 12.0393 14.6476 12.0393C15.1846 12.0393 15.5934 12.2009 15.8741 12.5241C16.1548 12.8472 16.2952 13.3255 16.2952 13.959C16.2952 14.5924 16.1548 15.0707 15.8741 15.3939C15.5934 15.7171 15.1846 15.8786 14.6476 15.8786ZM14.6476 15.0448C14.8063 15.0448 14.9252 14.9802 15.0046 14.8509C15.0839 14.7152 15.1236 14.5019 15.1236 14.2111V13.7069C15.1236 13.416 15.0839 13.206 15.0046 13.0767C14.9252 12.941 14.8063 12.8731 14.6476 12.8731C14.4889 12.8731 14.3699 12.941 14.2906 13.0767C14.2113 13.206 14.1716 13.416 14.1716 13.7069V14.2111C14.1716 14.5019 14.2113 14.7152 14.2906 14.8509C14.3699 14.9802 14.4889 15.0448 14.6476 15.0448ZM19.3524 19.0393C18.8154 19.0393 18.4066 18.8777 18.1259 18.5545C17.8452 18.2314 17.7048 17.7531 17.7048 17.1196C17.7048 16.4862 17.8452 16.0079 18.1259 15.6847C18.4066 15.3616 18.8154 15.2 19.3524 15.2C19.8894 15.2 20.2982 15.3616 20.5789 15.6847C20.8597 16.0079 21 16.4862 21 17.1196C21 17.7531 20.8597 18.2314 20.5789 18.5545C20.2982 18.8777 19.8894 19.0393 19.3524 19.0393ZM19.3524 18.2055C19.5111 18.2055 19.6301 18.1409 19.7094 18.0116C19.7887 17.8759 19.8284 17.6626 19.8284 17.3717V16.8676C19.8284 16.5767 19.7887 16.3666 19.7094 16.2374C19.6301 16.1016 19.5111 16.0338 19.3524 16.0338C19.1937 16.0338 19.0748 16.1016 18.9954 16.2374C18.9161 16.3666 18.8764 16.5767 18.8764 16.8676V17.3717C18.8764 17.6626 18.9161 17.8759 18.9954 18.0116C19.0748 18.1409 19.1937 18.2055 19.3524 18.2055Z" />
    </IconPrimitive>
  );
}

IconCard.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconCard.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconCard.REFS = REFS;
