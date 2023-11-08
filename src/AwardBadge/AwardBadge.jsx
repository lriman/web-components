import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS, REFS } from './_constants';
import { StyledAwardBadge } from './_style';

export default function AwardBadge(props) {
  const { value, type, ...rest } = props;

  return (
    <StyledAwardBadge {...addDataAttributes({ component: COMPONENTS.GENERAL })} {...rest} sType={type}>
      {value}
    </StyledAwardBadge>
  );
}

AwardBadge.propTypes = {
  value: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.values(REFS.TYPES)),
};

AwardBadge.defaultProps = {
  type: REFS.TYPES.PRIMARY,
};

AwardBadge.REFS = REFS;
