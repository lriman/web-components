import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import { H4 } from '../Typography';

import { COMPONENTS, REFS } from './_constants';
import { formatValue } from './_utils';
import {
  StyledProgress,
  StyledProgressLine,
  StyledProgressLineGraph,
  StyledProgressLineRail,
  StyledProgressLineTrack,
  StyledProgressCircle,
  StyledProgressCircleSvg,
  StyledProgressCircleRail,
  StyledProgressCircleTrack,
  StyledProgressValue,
} from './_style';

export default function Progress(props) {
  const { type, final, value, lineHeight, color, isTimer, isDecreased, isWithoutLabel } = props;

  return (
    <StyledProgress {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      {type === REFS.TYPES.LINE && (
        <StyledProgressLine>
          {!isWithoutLabel && (
            <StyledProgressValue>
              <H4 color={H4.REFS.COLORS.SECONDARY}>{formatValue(value, final, isTimer, isDecreased)}</H4>
            </StyledProgressValue>
          )}
          <StyledProgressLineGraph sHeight={lineHeight}>
            <StyledProgressLineRail />
            <StyledProgressLineTrack sFinal={final} sValue={value} sColor={color} />
          </StyledProgressLineGraph>
        </StyledProgressLine>
      )}
      {type === REFS.TYPES.CIRCLE && (
        <StyledProgressCircle>
          <StyledProgressCircleSvg>
            <StyledProgressCircleRail />
            <StyledProgressCircleTrack sFinal={final} sValue={value} sColor={color} />
          </StyledProgressCircleSvg>
          {!isWithoutLabel && (
            <StyledProgressValue>
              <H4 color={H4.REFS.COLORS.SECONDARY}>{formatValue(value, final, isTimer, isDecreased)}</H4>
            </StyledProgressValue>
          )}
        </StyledProgressCircle>
      )}
    </StyledProgress>
  );
}

Progress.propTypes = {
  type: PropTypes.oneOf(Object.values(REFS.TYPES)),
  lineHeight: PropTypes.oneOf(Object.values(REFS.SIZES)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
  final: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  isTimer: PropTypes.bool,
  isDecreased: PropTypes.bool,
  isWithoutLabel: PropTypes.bool,
};

Progress.defaultProps = {
  type: REFS.TYPES.LINE,
  lineHeight: REFS.SIZES.M,
  color: REFS.COLORS.SECONDARY,
  isTimer: false,
  isDecreased: false,
  isWithoutLabel: false,
};

Progress.REFS = REFS;
