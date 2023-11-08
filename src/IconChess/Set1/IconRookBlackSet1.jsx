import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from '../_constants';
import IconPrimitive from '../_internal/IconPrimitive';

export default function IconRookBlackSet1(props) {
  const type = TYPES.ROOK_BLACK_SET_1;

  return (
    <IconPrimitive {...props} type={type} viewBox={45}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.3596 35.6572H8.71051V38.7314H36.3596V35.6572Z"
        fill="#131312"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.5351 37.0546H10.5351V32.0939L14.1842 28.4607V17.5611L11.7281 14.4869V8.61791H16.1492V10.2249H20.079V8.61791H24.9913V10.2249H28.9211V8.61791H33.3421V14.4869L30.8158 17.5611V28.4607L34.5351 32.0939V37.0546Z"
        fill="#131312"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7457 7.5H16.7106V9.87555H19.3071V7.5H25.7632V9.87555H28.3597V7.5H34.3246V14.2773L31.0264 17.2817V28.1812L34.7457 31.7445V37.8231H10.3948V31.7445L14.0439 28.1812V17.2817L10.7457 14.2773V7.5ZM12.2895 9.03712V13.5786L15.5176 16.6528V28.81L11.8685 32.3734V36.286H33.2018V32.3734L29.5527 28.81V16.6528L32.7808 13.5786V9.03712H29.8334V11.3428H24.2895V9.03712H20.7807V11.3428H15.1667V9.03712H12.2895Z"
        fill="#131312"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.3596 35.6572H8.71051V38.7314H36.3596V35.6572Z"
        fill="#131312"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 34.19H11.307V35.7271H10.0439V37.9629H35.0263V35.7271H33.7632V34.19H36.5V39.5H8.5V34.19Z"
        fill="#131312"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.43 14.2773C20.9914 14.2773 24.0791 14.2773 28.6405 14.2773C29.0616 14.2773 29.4827 14.2773 29.6932 14.2773C30.0441 14.2773 29.9739 14.4869 29.8335 14.6266C29.6932 14.7664 29.4827 15.0458 29.2019 15.3253C28.7809 15.6747 28.7809 15.8144 28.5704 15.8144C28.43 15.8144 28.2897 15.8144 28.009 15.8144C23.8686 15.8144 21.2019 15.8144 17.0616 15.8144C16.7809 15.8144 16.6405 15.8144 16.5002 15.8144C16.2897 15.8144 16.2897 15.6747 15.9388 15.3253C15.5879 15.0458 15.3774 14.7664 15.3072 14.6266C15.0967 14.4869 15.0265 14.2773 15.3774 14.2773C15.5879 14.2773 16.009 14.2773 16.43 14.2773Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3423 33.9803C19.9388 33.9803 25.1318 33.9803 31.7283 33.9803C31.7283 33.7707 31.7283 33.4913 31.7283 33.1419C31.7283 32.7926 31.5879 32.4432 31.0265 32.4432C24.8511 32.4432 20.2195 32.4432 14.044 32.4432C13.4826 32.4432 13.3423 32.7926 13.3423 33.1419C13.3423 33.4913 13.3423 33.7707 13.3423 33.9803Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7808 27.9716C16.7808 27.762 16.9914 27.6223 17.2019 27.6223H27.8686C28.0791 27.6223 28.2896 27.762 28.2896 27.9716C28.2896 28.1812 28.0791 28.3908 27.8686 28.3908H17.2019C16.9914 28.3908 16.7808 28.1812 16.7808 27.9716Z"
        fill="white"
      />
    </IconPrimitive>
  );
}

IconRookBlackSet1.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconRookBlackSet1.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconRookBlackSet1.REFS = REFS;
