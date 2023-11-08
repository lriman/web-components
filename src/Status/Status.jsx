import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import colors from '../_themes/colors';

import Span from '../Typography/Span';

import { COMPONENTS, REFS } from './_constants';
import { StyledStatus, StyledStatusIcon, StyledStatusValue } from './_style';

function getIcon(type) {
  switch (type) {
    case REFS.TYPES.SUCCESS:
      return (
        <g>
          <path
            d="M18,6.5 C18,10.9183 18,16.5 12,19.5 C6,16.5 6,10.9183 6,6.5 C9,6.5 10,6 12,5 C14,6 15,6.5 18,6.5 Z"
            fill={colors.accents.success.medium}
          />
          <polygon
            points="11 13.2929 15.1465 9.14645 15.8536 9.85356 11 14.7071 8.64648 12.3536 9.35359 11.6465"
            fill={colors.white}
          />
        </g>
      );
    case REFS.TYPES.ERROR:
      return (
        <g>
          <path
            d="M12,5.5 C15.8659932,5.5 19,8.63400675 19,12.5 C19,16.3659932 15.8659932,19.5 12,19.5 C8.13400675,19.5 5,16.3659932 5,12.5 C5,8.63400675 8.13400675,5.5 12,5.5 Z"
            fill={colors.accents.error.medium}
          />
          <path
            d="M11.5,14 L11.5,8.5 L12.5,8.5 L12.5,14 L11.5,14 Z M11.5,16.5 L11.5,15.5 L12.5,15.5 L12.5,16.5 L11.5,16.5 Z"
            fill={colors.white}
          />
        </g>
      );
    case REFS.TYPES.UNKNOWN:
    default:
      return (
        <g>
          <path
            d="M5,12.5 C5,8.63400763 8.13400763,5.5 12,5.5 C15.8660257,5.5 19,8.63399095 19,12.5 C19,16.3660424 15.8660424,19.5 12,19.5 C8.13399095,19.5 5,16.3660257 5,12.5 Z M6,12.5 C6,15.8137398 8.68627451,18.5 12,18.5 C15.3137576,18.5 18,15.8137576 18,12.5 C18,9.18627451 15.3137398,6.5 12,6.5 C8.68629237,6.5 6,9.18629237 6,12.5 Z M11.5332,13.6667 L11.5332,9.38889 L12.4665,9.38889 L12.4665,13.6667 L11.5332,13.6667 Z M11.5332,15.6111 L11.5332,14.8333 L12.4665,14.8333 L12.4665,15.6111 L11.5332,15.6111 Z"
            fill={colors.grey50}
          />
        </g>
      );
  }
}

function getColor(type) {
  switch (type) {
    case REFS.TYPES.SUCCESS:
      return Span.REFS.COLORS.POSITIVE;
    case REFS.TYPES.ERROR:
      return Span.REFS.COLORS.NEGATIVE;
    case REFS.TYPES.UNKNOWN:
    default:
      return Span.REFS.COLORS.MINOR;
  }
}

export default function Status(props) {
  const { type, size, value } = props;

  return (
    <StyledStatus {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <StyledStatusIcon sSize={size}>{getIcon(type)}</StyledStatusIcon>
      <StyledStatusValue>
        <Span size={size} color={getColor(type)}>
          {value}
        </Span>
      </StyledStatusValue>
    </StyledStatus>
  );
}

Status.propTypes = {
  type: PropTypes.oneOf(Object.values(REFS.TYPES)),
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  value: PropTypes.node,
};

Status.defaultProps = {
  type: REFS.TYPES.UNKNOWN,
  size: REFS.TYPES.M,
  value: null,
};

Status.REFS = REFS;
