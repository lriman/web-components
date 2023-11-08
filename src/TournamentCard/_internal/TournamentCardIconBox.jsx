import React from 'react';
import PropTypes from 'prop-types';

import { H4, Span, Block } from '../../Typography';

import { StyledTournamentCardIconBox, StyledTournamentCardIconBoxItem } from '../_style';
import { getTournamentIcon } from '../../GetIcon';
import { REFS } from '../_constants';

const getTournamentIconSizes = size => {
  switch (size) {
    case REFS.SIZES.L:
      return 'xl';
    default:
      return 'xl';
  }
};

const getHeading = (size, timeControl) => {
  switch (size) {
    case REFS.SIZES.L:
      return <H4>{timeControl}</H4>;
    default:
      return (
        <Span size="xl" weight="medium">
          {timeControl}
        </Span>
      );
  }
};

export default function TournamentCardIconBox(props) {
  const { type, ratingType, size, isCustom, timeControl } = props;

  return (
    <StyledTournamentCardIconBox>
      <StyledTournamentCardIconBoxItem sColor={ratingType} sSize={size} isCustom={isCustom}>
        {getTournamentIcon(type, ratingType, getTournamentIconSizes(size))}
        <Block margin="s">{getHeading(size, timeControl)}</Block>
      </StyledTournamentCardIconBoxItem>
    </StyledTournamentCardIconBox>
  );
}

TournamentCardIconBox.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  isCustom: PropTypes.bool.isRequired,
  ratingType: PropTypes.string.isRequired,
  timeControl: PropTypes.string.isRequired,
};
