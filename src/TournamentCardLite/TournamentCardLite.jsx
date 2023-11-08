import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS, REFS } from './_constants';
import { StyledTournamentCardLite, StyledTournamentCardLiteInner } from './_style';

export default function TournamentCardLite(props) {
  const { children, color, size, inactive, ...rest } = props;

  return (
    <StyledTournamentCardLite
      {...addDataAttributes({ component: COMPONENTS.GENERAL })}
      {...rest}
      sColor={color}
      sSize={size}
      isInactive={inactive}
    >
      <StyledTournamentCardLiteInner sColor={color} sSize={size} isInactive={inactive}>
        {children}
      </StyledTournamentCardLiteInner>
    </StyledTournamentCardLite>
  );
}

TournamentCardLite.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  inactive: PropTypes.bool,
};

TournamentCardLite.defaultProps = {
  children: null,
  color: REFS.COLORS.YELLOW,
  size: REFS.SIZES.M,
  inactive: false,
};

TournamentCardLite.REFS = REFS;
