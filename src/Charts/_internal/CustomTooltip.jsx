import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ColorContext from '../../_context/colorContext';
import { Span, Paragraph } from '../../Typography';
import Grid, { Item } from '../../Grid';

import { StyledTooltip, StyledTooltipLabel, StyledTooltipDataItem } from './style';

const CustomTooltip = props => {
  const { label, payload } = props;
  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledTooltip sColorType={colorType}>
      {label && (
        <StyledTooltipLabel>
          <Span color="minor" size="s">
            {label}
          </Span>
        </StyledTooltipLabel>
      )}
      {payload &&
        payload.map(item => (
          <Grid>
            <Item grow>
              <StyledTooltipDataItem sColor={item.color}>
                <Paragraph>{item.name}</Paragraph>
              </StyledTooltipDataItem>
            </Item>
            <Item>
              <StyledTooltipDataItem sColor={item.color}>
                <Paragraph>{item.value}</Paragraph>
              </StyledTooltipDataItem>
            </Item>
          </Grid>
        ))}
    </StyledTooltip>
  );
};

CustomTooltip.propTypes = {
  label: PropTypes.string,
  payload: PropTypes.arrayOf(PropTypes.shape()),
};

CustomTooltip.defaultProps = {
  label: undefined,
  payload: undefined,
};

export default CustomTooltip;
