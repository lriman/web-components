import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RcSlider, { Range as RcSliderRange, createSliderWithTooltip } from 'rc-slider';

import { addDataAttributes } from '../_utils';

import { COMPONENTS, REFS } from './_constants';
import { StyledSlider, StyledSliderContent, StyledSliderField, StyledSliderLite } from './_style';

const RcSliderWithTooltip = createSliderWithTooltip(RcSlider);
const RcSliderRangeWithTooltip = createSliderWithTooltip(RcSliderRange);

export default class Slider extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    marks: PropTypes.shape({}),
    step: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]).isRequired,
    disabled: PropTypes.bool,
    range: PropTypes.bool,
    tooltip: PropTypes.bool,
    compact: PropTypes.bool,
    wideTrack: PropTypes.bool,
    topMark: PropTypes.bool,
    zIndex: PropTypes.number,
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    onBeforeChange: PropTypes.func,
    onChange: PropTypes.func,
    onAfterChange: PropTypes.func,
    children: PropTypes.node,
    tipFormatter: PropTypes.func,
  };

  static defaultProps = {
    marks: undefined,
    step: undefined,
    disabled: false,
    range: false,
    tooltip: false,
    compact: false,
    wideTrack: false,
    topMark: false,
    zIndex: 6,
    type: REFS.TYPES.NORMAL,
    onBeforeChange: () => null,
    onChange: () => null,
    onAfterChange: () => null,
    children: null,
    tipFormatter: undefined,
  };

  handleBeforeChange = value => {
    const { id, onBeforeChange } = this.props;
    onBeforeChange({ id, value });
  };

  handleChange = value => {
    const { id, onChange } = this.props;
    onChange({ id, value });
  };

  handleAfterChange = value => {
    const { id, onAfterChange } = this.props;
    onAfterChange({ id, value });
  };

  render() {
    const {
      id,
      min,
      max,
      marks,
      step,
      value,
      disabled,
      range,
      tooltip,
      compact,
      type,
      children,
      tipFormatter,
      wideTrack,
      topMark,
      zIndex,
    } = this.props;

    const componentProps = {
      className: compact ? 'm-compact' : null,
      min,
      max,
      marks,
      step,
      value,
      disabled,
      onBeforeChange: this.handleBeforeChange,
      onChange: this.handleChange,
      onAfterChange: this.handleAfterChange,
    };

    return (
      <StyledSlider {...addDataAttributes({ component: COMPONENTS.GENERAL, id, disabled: disabled || null })}>
        <StyledSliderLite wideTrack={wideTrack} topMark={topMark} sType={type} zIndex={zIndex}>
          {children && <StyledSliderContent>{children}</StyledSliderContent>}
          <StyledSliderField isWithMarks={!!marks}>
            {tooltip && range && (
              <RcSliderRangeWithTooltip
                {...componentProps}
                allowCross={false}
                tipProps={{ placement: 'bottom', visible: true }}
                tipFormatter={tipFormatter}
              />
            )}
            {tooltip && !range && (
              <RcSliderWithTooltip
                {...componentProps}
                tipProps={{ placement: 'bottom', visible: true }}
                tipFormatter={tipFormatter}
              />
            )}
            {!tooltip && range && <RcSliderRange {...componentProps} allowCross={false} />}
            {!tooltip && !range && <RcSlider {...componentProps} />}
          </StyledSliderField>
        </StyledSliderLite>
      </StyledSlider>
    );
  }
}
