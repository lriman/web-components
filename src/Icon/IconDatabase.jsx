import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import IconPrimitive from './_internal/IconPrimitive';

export default function IconDatabase(props) {
  const type = TYPES.BLANK;
  return (
    <IconPrimitive {...props} type={type} viewBox={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 15.696V6C22 3.51472 19.9349 1.5 17.3875 1.5H6.61255C4.06511 1.5 2 3.51472 2 6V18.648C2 20.7754 3.76773 22.5 5.94834 22.5H21.0775C21.587 22.5 22 22.0971 22 21.6C22 21.1029 21.587 20.7 21.0775 20.7H5.94834C4.78671 20.7 3.84502 19.7813 3.84502 18.648C3.84502 17.5147 4.78671 16.596 5.94834 16.596H21.0775C21.587 16.596 22 16.1931 22 15.696ZM12 5C12.3208 5 12.6226 5.13755 12.8302 5.37336C13.0377 5.58952 13.1698 5.90393 13.1698 6.23799C13.1698 6.41485 13.1321 6.5917 13.0566 6.76856C13.0521 6.77784 13.0477 6.78821 13.043 6.79916C13.0278 6.8346 13.01 6.87609 12.9811 6.90611C13.2075 7.06332 13.4151 7.25983 13.566 7.49563C13.7925 7.81004 13.9057 8.20306 13.9057 8.61572C13.9057 8.93013 13.8302 9.22489 13.717 9.5C13.6415 9.6572 13.5472 9.81441 13.434 9.93231C13.8491 10.2074 14.2264 10.5808 14.4906 11.0131C14.8113 11.5633 15 12.2118 15 12.9192C15 13.0568 15 13.214 14.9811 13.3712C14.9655 13.5018 14.9367 13.6189 14.9058 13.7449L14.8868 13.8231L14.8491 14H9.15094L9.11321 13.8231L9.09416 13.7449C9.06325 13.6189 9.03455 13.5018 9.01887 13.3712C9 13.214 9 13.0568 9 12.9192C9 12.2118 9.18868 11.5633 9.50943 11.0131C9.77358 10.5808 10.1321 10.2074 10.566 9.93231C10.4528 9.81441 10.3585 9.6572 10.283 9.5C10.1509 9.22489 10.0943 8.93013 10.0943 8.61572C10.0943 8.20306 10.2075 7.81004 10.434 7.49563C10.5849 7.25983 10.7925 7.06332 11.0189 6.90611C10.99 6.87609 10.9722 6.8346 10.957 6.79916C10.9523 6.78821 10.9479 6.77784 10.9434 6.76856C10.8679 6.5917 10.8302 6.41485 10.8302 6.23799C10.8302 5.90393 10.9623 5.58952 11.1698 5.37336C11.3774 5.13755 11.6792 5 12 5ZM5.02582 18.648C5.02582 18.1509 5.43884 17.748 5.94833 17.748H19.5646C20.0741 17.748 20.4871 18.1509 20.4871 18.648C20.4871 19.145 20.0741 19.548 19.5646 19.548H5.94833C5.43884 19.548 5.02582 19.145 5.02582 18.648Z"
      />
    </IconPrimitive>
  );
}

IconDatabase.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconDatabase.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconDatabase.REFS = REFS;
