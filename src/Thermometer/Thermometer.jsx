import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import { COMPONENTS } from './_constants';
import {
  StyledThermometer,
  StyledThermometerBadge,
  StyledThermometerLineGraph,
  StyledThermometerLineTick,
  StyledThermometerLineTrack,
} from './_style';
import { getThermometerValue, getTicks } from './_utils';

export default function Thermometer(props) {
  const { final, value, hideBadge, compact } = props;
  const [ticks] = useState(getTicks(7));

  return (
    <StyledThermometer {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <StyledThermometerLineGraph compact={compact}>
        <StyledThermometerLineTrack sFinal={final} sValue={value} />
        {ticks.map(item => (
          <StyledThermometerLineTick key={item.id} sHeight={item.height} sFinal={final} sValue={value} />
        ))}
        {!hideBadge && (
          <StyledThermometerBadge sFinal={final} sValue={value} compact={compact}>
            {getThermometerValue(value)}
          </StyledThermometerBadge>
        )}
      </StyledThermometerLineGraph>
    </StyledThermometer>
  );
}

Thermometer.propTypes = {
  final: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  hideBadge: PropTypes.bool,
  compact: PropTypes.bool,
};

Thermometer.defaultProps = {
  hideBadge: false,
  compact: false,
};
