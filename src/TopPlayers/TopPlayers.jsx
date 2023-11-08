import React from 'react';
import PropTypes from 'prop-types';

import Account from '../Account';
import { Span, Div } from '../Typography';
import Country from '../Country';
import Image from '../Image';

import {
  StyledTopPlayers,
  StyledTopPlayer,
  StyledTopPlayerImage,
  StyledTopPlayerFlag,
  StyledTopPlayerPlace,
  StyledPlaceFlag,
  StyledPlaceText,
  StyledTopPlayersLeaderImage,
  StyledTopPlayerName,
  StyledTopPlayerNameWrap,
} from './_style';
import { getPlaceColor, getPlayerOrder } from './_utils';

const getAccountSize = (index, isMobile) => {
  if (index === 0) {
    if (isMobile) return 'l';
    return 'xl';
  }
  if (isMobile) return 'm';
  return 'l';
};

const TopPlayers = props => {
  const { data, image, isMobile } = props;

  return (
    <StyledTopPlayers isFull={data?.length === 3}>
      {data.map((item, idx) => (
        <StyledTopPlayer key={item.id} order={getPlayerOrder(idx)}>
          {image && idx === 0 && (
            <StyledTopPlayersLeaderImage>
              <Image src={image} backgroundColor="transparent" />
            </StyledTopPlayersLeaderImage>
          )}
          <StyledTopPlayerImage idx={idx}>
            <Account avatar={item.picture} name={item.name} size={getAccountSize(idx, isMobile)} compact />
            <StyledTopPlayerPlace>
              <StyledPlaceFlag bgColor={getPlaceColor(idx)} />
              <StyledPlaceText>{idx + 1}</StyledPlaceText>
            </StyledTopPlayerPlace>
          </StyledTopPlayerImage>
          <Div margin={Div.REFS.MARGIN.S}>
            <StyledTopPlayerNameWrap>
              <StyledTopPlayerName>
                <Span>{item.name}</Span>
              </StyledTopPlayerName>
              <StyledTopPlayerFlag>
                <Country flag={item.country?.flag} size="m" />
              </StyledTopPlayerFlag>
            </StyledTopPlayerNameWrap>
          </Div>
          <Span size={Span.REFS.SIZES.XL} weight={Span.REFS.WEIGHTS.BOLD}>
            {item.rating}
          </Span>
        </StyledTopPlayer>
      ))}
    </StyledTopPlayers>
  );
};

TopPlayers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isMobile: PropTypes.bool,
  image: PropTypes.string,
};

TopPlayers.defaultProps = {
  isMobile: false,
  image: undefined,
};

export default TopPlayers;
