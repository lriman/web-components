import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from '../_constants';
import IconPrimitive from '../_internal/IconPrimitive';

export default function IconQeenWhiteSet5(props) {
  const type = TYPES.QEEN_WHITE_SET_5;

  return (
    <IconPrimitive {...props} type={type} viewBox={45}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.8523 38.1719C30.6341 33.1828 33.2276 23.7378 37 12.9597C32.9133 13.988 29.9268 15.5495 27.8442 17.5299C26.1152 14.5212 24.3469 11.9695 22.5 10.2176C20.6531 11.9695 18.8848 14.5212 17.1558 17.5299C15.0732 15.5495 12.0867 13.988 8 12.9597C11.7724 23.7378 14.3659 33.1828 13.1477 38.1719C19.8672 40.6094 25.0149 40.6094 31.8523 38.1719Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.4609 10.1795C23.9542 10.1795 25.133 8.99891 25.133 7.58977C25.133 6.14255 23.9149 5 22.4609 5C20.9677 5 19.7888 6.18063 19.7888 7.58977C19.7495 9.037 20.9677 10.1795 22.4609 10.1795Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.4609 9.78125L22.8305 9.8692C24.619 11.5658 26.3172 13.9726 27.9608 16.7743C30.0891 14.9177 33.0187 13.4663 36.8828 12.494L37.748 12.2763L37.4532 13.1184C35.569 18.5017 33.9849 23.5367 33.0233 27.8414C32.0576 32.1652 31.738 35.6792 32.3188 38.058L32.4215 38.4788L32.0135 38.6243C28.5581 39.8561 25.5062 40.4802 22.4557 40.4802C19.4049 40.4802 16.3818 39.856 12.9839 38.6234L12.5789 38.4765L12.6811 38.058C13.2619 35.6792 12.9423 32.1652 11.9766 27.8414C11.015 23.5367 9.43087 18.5017 7.54668 13.1184L7.25195 12.2763L8.11714 12.494C11.9812 13.4663 14.9109 14.9177 17.0391 16.7743C18.6827 13.9727 20.3809 11.5658 22.1695 9.8692L22.4609 9.78125ZM22.5 10.8891C20.8203 12.5795 19.1877 14.958 17.5722 17.7692L17.2677 18.299L16.8249 17.8779C14.9652 16.1096 12.3348 14.6661 8.75119 13.6568C10.5092 18.7323 11.9918 23.5036 12.9139 27.632C13.8321 31.7425 14.2108 35.2813 13.7071 37.8618C16.8652 38.9718 19.6597 39.5198 22.4557 39.5198C25.2534 39.5198 28.0769 38.9712 31.2924 37.8595C30.7893 35.2793 31.1681 31.7413 32.086 27.632C33.0081 23.5036 34.4907 18.7323 36.2487 13.6568C32.6651 14.6661 30.0347 16.1096 28.1751 17.8779L27.7322 18.299L27.4277 17.7692C25.8122 14.958 24.1796 12.5795 22.5 10.8891Z"
        fill="#2D2E37"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.6564 38.6103C25.6511 35.924 19.2707 35.924 13.2654 38.6103L12.8732 37.7336C19.1281 34.9356 25.7937 34.9356 32.0486 37.7336L31.6564 38.6103Z"
        fill="#2D2E37"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4582 33.1253C25.6901 30.5164 19.2322 30.5159 13.4234 33.1258L13.0297 32.2496C19.0881 29.5276 25.8335 29.5271 31.854 32.2501L31.4582 33.1253Z"
        fill="#2D2E37"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3086 7.58325C19.3122 5.90231 20.7143 4.51976 22.4609 4.51976C24.1611 4.51976 25.6132 5.85875 25.6132 7.58977C25.6132 9.27366 24.2097 10.6598 22.4609 10.6598C20.7315 10.6598 19.2649 9.32844 19.3086 7.58325ZM22.4609 5.48023C21.2233 5.48023 20.269 6.45538 20.269 7.58977V7.60281C20.2379 8.74887 21.206 9.6993 22.4609 9.6993C23.6985 9.6993 24.6527 8.72416 24.6527 7.58977C24.6527 6.42633 23.6685 5.48023 22.4609 5.48023Z"
        fill="#2D2E37"
      />
    </IconPrimitive>
  );
}

IconQeenWhiteSet5.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconQeenWhiteSet5.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconQeenWhiteSet5.REFS = REFS;
