import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from '../_constants';
import IconPrimitive from '../_internal/IconPrimitive';

export default function IconQeenWhiteBase(props) {
  const type = TYPES.QEEN_WHITE_BASE;

  return (
    <IconPrimitive {...props} type={type} viewBox={16}>
      <path
        d="M3.22135 13.8205C3.73107 12.5385 3.8585 10.9744 3.60364 9.66669C3.3481 8.26258 2.88032 6.32463 2.57445 5.07629C2.08015 5.05792 1.66669 4.65483 1.66669 4.15387C1.66669 3.66669 2.09995 3.25643 2.60968 3.25643C3.14489 3.23079 3.55267 3.66669 3.55267 4.15387C3.55267 4.38106 3.46763 4.58813 3.32858 4.7483L4.66669 8.33335L4.91817 4.00549C4.49486 3.91449 4.16434 3.5281 4.16434 3.10258C4.16434 2.58976 4.5976 2.17951 5.10733 2.17951C5.61705 2.17951 6.05032 2.58976 6.05032 3.10258C6.05032 3.37871 5.91114 3.63836 5.69773 3.81151L7.00002 8.00002L7.71615 3.43097C7.35857 3.3026 7.09526 2.96956 7.09526 2.58976C7.09526 2.07694 7.50304 1.66669 8.03825 1.66669C8.54798 1.66669 8.98124 2.07694 8.98124 2.58976C8.98124 2.96956 8.71793 3.3026 8.36035 3.43097L9.00002 8.00002L10.3886 3.83886C10.1554 3.66643 10.0007 3.39366 10.0007 3.10258C10.0007 2.58976 10.434 2.17951 10.9437 2.17951C11.4789 2.17951 11.8867 2.58976 11.8867 3.10258C11.8867 3.52054 11.5865 3.90076 11.1633 4.00036L11.6667 8.33335L12.6916 4.8776C12.5258 4.71507 12.4219 4.49497 12.4219 4.25643C12.4219 3.74361 12.8552 3.33335 13.3649 3.33335C13.9001 3.33335 14.3334 3.74361 14.3334 4.25643C14.3334 4.70666 13.9633 5.0912 13.4847 5.14693C13.1788 6.39682 12.7236 8.2888 12.4729 9.66669C12.218 10.9744 12.3454 12.5385 12.8806 13.8205C12.6084 13.9803 12.013 14.0588 11.7597 14.0922C11.7284 14.0963 11.7024 14.0998 11.6828 14.1026C10.6124 14.2308 9.72034 14.3077 8.44603 14.3334H7.63047C6.35616 14.3077 5.43865 14.2308 4.39371 14.1026C4.37443 14.0998 4.34889 14.0964 4.31833 14.0924H4.31832C4.06608 14.0591 3.47139 13.9806 3.22135 13.8205Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.03825 1.91669C7.63804 1.91669 7.34526 2.21807 7.34526 2.58976C7.34526 2.85117 7.52965 3.09839 7.80062 3.19567L7.99513 3.2655L7.24701 8.03873L6.76129 8.07425L5.40874 3.72405L5.54022 3.61737C5.70254 3.48567 5.80032 3.2943 5.80032 3.10258C5.80032 2.73524 5.48651 2.42951 5.10733 2.42951C4.72815 2.42951 4.41434 2.73524 4.41434 3.10258C4.41434 3.40192 4.65422 3.69304 4.97071 3.76107L5.18018 3.8061L4.91627 8.34786L4.43247 8.42078L3.04242 4.69657L3.13979 4.58441C3.24189 4.46681 3.30267 4.31711 3.30267 4.15387C3.30267 3.80096 3.0059 3.48773 2.62164 3.50614L2.61566 3.50643H2.60968C2.22583 3.50643 1.91669 3.81664 1.91669 4.15387C1.91669 4.51259 2.21589 4.81279 2.58374 4.82646L2.77235 4.83347L2.81727 5.0168C3.1227 6.26338 3.59215 8.20774 3.84932 9.6204C4.09795 10.8977 3.99485 12.406 3.53849 13.6876C3.6177 13.7129 3.7133 13.7372 3.81971 13.7592C4.01278 13.7992 4.20763 13.8256 4.33491 13.8424C4.34041 13.8432 4.34579 13.8439 4.35103 13.8446L4.35228 13.8447C4.38053 13.8485 4.40628 13.8518 4.42664 13.8548C5.46238 13.9818 6.3704 14.0579 7.63298 14.0834H8.44352C9.70561 14.0579 10.5883 13.9818 11.6502 13.8547C11.6712 13.8517 11.6978 13.8482 11.727 13.8444C11.854 13.8276 12.0582 13.8006 12.2631 13.7588C12.3725 13.7365 12.4732 13.7116 12.5585 13.685C12.0811 12.4026 11.979 10.8957 12.2272 9.6204C12.4796 8.23405 12.9364 6.33576 13.2419 5.08749L13.2832 4.91871L13.4558 4.89861C13.8243 4.85569 14.0834 4.56431 14.0834 4.25643C14.0834 3.89332 13.774 3.58335 13.3649 3.58335C12.9857 3.58335 12.6719 3.88909 12.6719 4.25643C12.6719 4.42067 12.7434 4.57831 12.8666 4.69904L12.9741 4.80438L11.9064 8.40444L11.4184 8.3622L10.8893 3.80802L11.106 3.75701C11.4186 3.68345 11.6367 3.40223 11.6367 3.10258C11.6367 2.73089 11.3439 2.42951 10.9437 2.42951C10.5645 2.42951 10.2507 2.73524 10.2507 3.10258C10.2507 3.30482 10.3597 3.50656 10.5372 3.63783L10.6832 3.74577L9.23717 8.07915L8.75244 8.03468L8.08459 3.26435L8.27588 3.19567C8.54685 3.0984 8.73124 2.85118 8.73124 2.58976C8.73124 2.22242 8.41743 1.91669 8.03825 1.91669ZM6.84526 2.58976C6.84526 1.93582 7.36804 1.41669 8.03825 1.41669C8.67852 1.41669 9.23124 1.93146 9.23124 2.58976C9.23124 3.0146 8.98235 3.38177 8.63359 3.57956L9.09996 6.91074L10.0986 3.91792C9.88778 3.70635 9.7507 3.41682 9.7507 3.10258C9.7507 2.44429 10.3034 1.92951 10.9437 1.92951C11.6139 1.92951 12.1367 2.44864 12.1367 3.10258C12.1367 3.56394 11.8538 3.98306 11.4348 4.17116L11.7741 7.09186L12.4124 4.93975C12.2639 4.75017 12.1719 4.51352 12.1719 4.25643C12.1719 3.59813 12.7246 3.08335 13.3649 3.08335C14.0262 3.08335 14.5834 3.5939 14.5834 4.25643C14.5834 4.78874 14.1952 5.22834 13.6895 5.36195C13.3848 6.60975 12.9579 8.3978 12.7188 9.71145L12.7183 9.71452C12.4723 10.9766 12.5962 12.4903 13.1113 13.7242L13.1954 13.9257L13.0072 14.0361C12.8319 14.139 12.5784 14.2048 12.363 14.2487C12.1399 14.2943 11.9206 14.3232 11.794 14.3399L11.7924 14.3401C11.7605 14.3443 11.7362 14.3475 11.7183 14.35L11.7125 14.3509C10.6355 14.4799 9.73513 14.5575 8.45106 14.5833L8.44603 14.5834L7.62544 14.5834C6.34171 14.5575 5.41568 14.4798 4.36327 14.3507L4.35814 14.3501C4.3438 14.348 4.32524 14.3455 4.30189 14.3424C4.2967 14.3417 4.29127 14.341 4.2856 14.3403L4.28375 14.34C4.15777 14.3234 3.93873 14.2945 3.71831 14.2488C3.50772 14.2052 3.25462 14.1387 3.08655 14.0311L2.91282 13.9199L2.98903 13.7282C3.48055 12.4919 3.60423 10.9766 3.35826 9.71451L3.35766 9.71145C3.11478 8.37692 2.67807 6.5529 2.3726 5.30315C1.83909 5.19492 1.41669 4.72931 1.41669 4.15387C1.41669 3.51873 1.97058 3.00964 2.60369 3.00644C3.28688 2.97709 3.80267 3.53422 3.80267 4.15387C3.80267 4.38933 3.73118 4.60731 3.61074 4.78933L4.48595 7.13418L4.65736 4.18426C4.22932 4.00443 3.91434 3.57969 3.91434 3.10258C3.91434 2.44429 4.46706 1.92951 5.10733 1.92951C5.7476 1.92951 6.30032 2.44429 6.30032 3.10258C6.30032 3.40162 6.17609 3.67822 5.9828 3.88633L6.91952 6.89908L7.44006 3.57793C7.0928 3.37976 6.84526 3.01344 6.84526 2.58976Z"
        fill="#2D2E37"
      />
    </IconPrimitive>
  );
}

IconQeenWhiteBase.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconQeenWhiteBase.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconQeenWhiteBase.REFS = REFS;
