import React from 'react';
import PropTypes from 'prop-types';

import Account from '../../Account';

import {
  StyledTournamentCardParticipants,
  StyledTournamentCardParticipantsExtra,
  StyledTournamentCardParticipantsItem,
} from '../_style';

const TournamentCardParticipants = props => {
  const { data, ratingType, isAccented } = props;

  return (
    <StyledTournamentCardParticipants>
      {data?.list?.map(item => (
        <StyledTournamentCardParticipantsItem key={item.id} sColor={ratingType} isAccented={isAccented}>
          <Account name={item.name} avatar={item.picture} size="s" compact />
        </StyledTournamentCardParticipantsItem>
      ))}
      {data?.extra && (
        <StyledTournamentCardParticipantsItem sColor={ratingType} isAccented={isAccented}>
          <StyledTournamentCardParticipantsExtra>+{data.extra}</StyledTournamentCardParticipantsExtra>
        </StyledTournamentCardParticipantsItem>
      )}
    </StyledTournamentCardParticipants>
  );
};

TournamentCardParticipants.propTypes = {
  data: PropTypes.shape(),
  isAccented: PropTypes.bool,
  ratingType: PropTypes.string.isRequired,
};

TournamentCardParticipants.defaultProps = {
  data: undefined,
  isAccented: false,
};

export default TournamentCardParticipants;
