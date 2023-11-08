import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from '../_constants';
import IconPrimitive from '../_internal/IconPrimitive';

export default function IconPawnWhiteSet1(props) {
  const type = TYPES.PAWN_WHITE_SET_1;

  return (
    <IconPrimitive {...props} type={type} viewBox={45}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.4998 8.27536C24.3796 8.27536 25.9808 9.82602 25.9808 11.7996C25.9808 12.8569 25.4239 13.8436 24.658 14.478C27.0251 15.3943 28.696 17.6498 28.696 20.3282C28.696 22.3723 27.7213 24.1344 26.2593 25.2621C30.0188 26.9538 32.6644 30.9714 32.6644 35.6939C32.6644 36.7511 32.5947 37.7379 32.3163 38.7247H12.6833C12.4049 37.7379 12.2656 36.7511 12.2656 35.6939C12.2656 30.9714 14.9808 26.9538 18.7403 25.2621C17.2783 24.1344 16.3036 22.3723 16.3036 20.3282C16.3036 17.6498 17.9745 15.3943 20.3416 14.478C19.5061 13.8436 19.0188 12.8569 19.0188 11.7996C19.0188 9.82602 20.5504 8.27536 22.4998 8.27536Z"
        fill="white"
      />
      <path
        d="M22.5 7.5C23.6835 7.5 24.7278 7.99339 25.4937 8.76872C26.2595 9.54405 26.7468 10.6013 26.7468 11.7996C26.7468 12.4339 26.6076 13.0683 26.3291 13.6322C26.1899 13.8436 26.1203 14.0551 25.981 14.2665C26.8861 14.7599 27.6519 15.4648 28.2089 16.3811C28.9747 17.5088 29.462 18.848 29.462 20.3282C29.462 21.4559 29.1835 22.5132 28.6962 23.4295C28.4177 24.0639 28.0696 24.6278 27.5823 25.1211C29.2532 26.0374 30.5759 27.3767 31.6203 28.9978C32.8038 30.9009 33.5 33.2269 33.5 35.6938C33.5 36.2577 33.4304 36.8216 33.3608 37.315C33.2911 37.8789 33.2215 38.3722 33.0823 38.8656C33.0127 39.2181 32.6646 39.5 32.3165 39.5H12.6835C12.2658 39.5 11.9873 39.2181 11.9177 38.8656C11.7785 38.3722 11.7089 37.8084 11.6392 37.315C11.5696 36.8216 11.5 36.2577 11.5 35.6938C11.5 33.2269 12.1962 30.9009 13.3797 28.9978C14.4241 27.3767 15.7468 26.0374 17.3481 25.1211C16.9304 24.6278 16.5823 24.0639 16.2342 23.4295C15.8165 22.4427 15.538 21.4559 15.538 20.3282C15.538 18.848 16.0253 17.5088 16.7911 16.3811C17.3481 15.4648 18.1139 14.7599 19.019 14.2665C18.8797 14.0551 18.7405 13.8436 18.6709 13.6322V13.5617C18.3924 12.9978 18.2532 12.4339 18.2532 11.7996C18.2532 10.6013 18.7405 9.54405 19.5063 8.76872C20.2722 7.99339 21.3165 7.5 22.5 7.5ZM24.3797 9.89648C23.8924 9.40308 23.2658 9.05066 22.5 9.05066C21.7342 9.05066 21.1076 9.40308 20.6203 9.82599V9.89648C20.1329 10.3194 19.7848 11.0242 19.7848 11.7996C19.7848 12.152 19.9241 12.5749 20.0633 12.9273C20.2722 13.2797 20.481 13.6322 20.7595 13.8436C20.8987 13.9846 20.9684 14.0551 21.038 14.196C21.1772 14.6189 20.9684 15.1123 20.6203 15.2533C19.5759 15.6057 18.6709 16.3106 18.0443 17.2269C17.4873 18.1432 17.1392 19.2004 17.1392 20.3282C17.1392 21.174 17.2785 22.0198 17.6266 22.7247C18.0443 23.5 18.5316 24.1344 19.1582 24.6278C19.2975 24.6982 19.3671 24.8392 19.4367 24.9802C19.6456 25.4031 19.4367 25.826 19.019 26.0374C17.2785 26.8128 15.7468 28.152 14.7025 29.8436C13.6582 31.5352 13.1013 33.5088 13.1013 35.6938C13.1013 36.1872 13.1013 36.6806 13.1709 37.1035C13.1709 37.3855 13.2405 37.6674 13.3101 37.8789H31.6899C31.7595 37.6674 31.8291 37.3855 31.8291 37.1035C31.8987 36.6806 31.8987 36.1872 31.8987 35.6938C31.8987 33.5088 31.3418 31.5352 30.2975 29.8436C29.2532 28.152 27.7215 26.8128 25.981 26.0374C25.8418 25.967 25.7025 25.8965 25.6329 25.7555C25.3544 25.4031 25.4241 24.9097 25.7722 24.6982C26.4684 24.1344 26.9557 23.5 27.3038 22.7247C27.6519 22.0198 27.8608 21.174 27.8608 20.3282C27.8608 19.2004 27.5127 18.1432 26.9557 17.2269C26.3291 16.3106 25.4241 15.6057 24.3797 15.2533C24.3101 15.1828 24.1709 15.1123 24.1013 14.9714C23.8228 14.6894 23.8228 14.1256 24.1709 13.9141C24.519 13.6322 24.7278 13.2797 24.9367 12.9273C25.0759 12.5749 25.1456 12.2225 25.1456 11.7996C25.1456 11.0242 24.8671 10.3194 24.3797 9.89648Z"
        fill="#131312"
      />
    </IconPrimitive>
  );
}

IconPawnWhiteSet1.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconPawnWhiteSet1.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconPawnWhiteSet1.REFS = REFS;
