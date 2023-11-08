import React from 'react';
import PropTypes from 'prop-types';

import Block from '../../Typography/Block';
import Span from '../../Typography/Span';

import {
  StyledTournamentCardCap,
  StyledTournamentCardCapBadge,
  StyledTournamentCardCapBadgeDot,
  StyledTournamentCardCapDate,
} from '../_style';

const TournamentCardCap = props => {
  const { data = {}, compact } = props;
  const { badge, date, time } = data;
  return (
    <StyledTournamentCardCap sCompact={compact}>
      {badge && (
        <StyledTournamentCardCapBadge sStatus={badge.status}>
          {badge.status === 'active' && <StyledTournamentCardCapBadgeDot />}
          <Span>{badge.label}</Span>
        </StyledTournamentCardCapBadge>
      )}
      {!badge && (
        <StyledTournamentCardCapDate>
          {date && (
            <Block margin="xs">
              <Span weight="medium">{date}</Span>
            </Block>
          )}
          {time && (
            <Block margin="xs">
              <Span weight="medium">{time}</Span>
            </Block>
          )}
        </StyledTournamentCardCapDate>
      )}
    </StyledTournamentCardCap>
  );
};

TournamentCardCap.propTypes = {
  data: PropTypes.shape().isRequired,
  compact: PropTypes.bool.isRequired,
};

export default TournamentCardCap;
