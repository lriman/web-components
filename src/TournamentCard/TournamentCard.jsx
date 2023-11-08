import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { H4, Span } from '../Typography';
import TournamentCardCap from './_internal/TournamentCardCap';
import TournamentCardIconBox from './_internal/TournamentCardIconBox';
import TournamentCardParticipants from './_internal/TournamentCardParticipants';

import background from './_illustration';
import customBackground from './_illustrationCustom';
import { COMPONENTS, REFS } from './_constants';
import {
  StyledTournamentCard,
  StyledTournamentCardContent,
  StyledTournamentCardContentTitle,
  StyledTournamentCardContentDescribe,
  StyledTournamentCardImageDefault,
  StyledTournamentCardImageCustom,
} from './_style';
import Image from '../Image';

export default function TournamentCard(props) {
  const { data, size, compact, type } = props;

  const isAccented = !!data.image;
  return (
    <StyledTournamentCard
      {...addDataAttributes({ component: COMPONENTS.GENERAL })}
      sColor={data.ratingType}
      sSize={size}
      sCompact={compact}
      isAccented={isAccented}
      sType={type}
    >
      {type === REFS.TYPES.DEFAULT && (
        <StyledTournamentCardImageDefault isAccented={isAccented}>
          <Image src={data.image || background} backgroundColor="transparent" />
        </StyledTournamentCardImageDefault>
      )}
      {type === REFS.TYPES.CUSTOM && (
        <StyledTournamentCardImageCustom isAccented={isAccented}>
          <Image src={data.image || customBackground} imageStyle={{ width: '100%' }} backgroundColor="transparent" />
        </StyledTournamentCardImageCustom>
      )}
      <TournamentCardCap data={data.cap} compact={compact} />
      <TournamentCardIconBox
        type={data.type}
        size={size}
        ratingType={data.ratingType}
        timeControl={data.timeControl}
        isCustom={type === REFS.TYPES.CUSTOM}
      />
      {!compact && (
        <StyledTournamentCardContent>
          <StyledTournamentCardContentTitle>
            <H4 color="primary">{data.title}</H4>
          </StyledTournamentCardContentTitle>
          <StyledTournamentCardContentDescribe>
            <Span color="primary">{data.describe}</Span>
          </StyledTournamentCardContentDescribe>
          <TournamentCardParticipants data={data.participants} ratingType={data.ratingType} isAccented={isAccented} />
        </StyledTournamentCardContent>
      )}
    </StyledTournamentCard>
  );
}

TournamentCard.propTypes = {
  data: PropTypes.shape({
    cap: PropTypes.shape({
      badge: PropTypes.shape({
        status: PropTypes.string,
        label: PropTypes.string,
      }),
      date: PropTypes.string,
      time: PropTypes.string,
    }),
    image: PropTypes.string,
    type: PropTypes.string.isRequired,
    ratingType: PropTypes.string.isRequired,
    timeControl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    describe: PropTypes.string.isRequired,
    participants: PropTypes.shape({
      list: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          picture: PropTypes.string,
        }),
      ),
      extra: PropTypes.number,
    }),
  }).isRequired,
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  compact: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(REFS.TYPES)),
};

TournamentCard.defaultProps = {
  size: REFS.SIZES.M,
  compact: false,
  type: REFS.TYPES.DEFAULT,
};

TournamentCard.REFS = REFS;
