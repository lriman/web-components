import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { COMPONENTS } from './_constants';
import {
  StyledAchieves,
  StyledAchievesTrack,
  StyledAchievesTrackValue,
  StyledAchievesItems,
  StyledAchievesItem,
  StyledAchievesItemValue,
} from './_style';

export default function Achieves(props) {
  const { levels, current } = props;

  const itemWidth = 100 / levels.length;

  const trackWidth = itemWidth * current;

  return (
    <StyledAchieves {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <StyledAchievesTrack sWidth={trackWidth}>
        <StyledAchievesTrackValue sWidth={trackWidth} />
      </StyledAchievesTrack>
      <StyledAchievesItems>
        {levels.map((item, index) => (
          <StyledAchievesItem key={index} isAchieved={index <= current} sWidth={itemWidth}> {/* eslint-disable-line */}
            <StyledAchievesItemValue>{item}</StyledAchievesItemValue>
          </StyledAchievesItem>
        ))}
      </StyledAchievesItems>
    </StyledAchieves>
  );
}

Achieves.propTypes = {
  levels: PropTypes.arrayOf(PropTypes.node).isRequired,
  current: PropTypes.number,
};

Achieves.defaultProps = {
  current: 0,
};
