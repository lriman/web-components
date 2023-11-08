import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Slider from '../Slider';
import { Block, H3, Span } from '../Typography';

export default class SliderExample extends PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    range: PropTypes.bool,
    label: PropTypes.string,
  };

  static defaultProps = {
    value: null,
    label: null,
    range: false,
  };

  constructor(props) {
    super(props);

    const { value, min, max, range } = this.props;

    let v = value || min;
    if (range) v = value || [min, max];

    this.state = {
      value: v,
    };
  }

  onBeforeChange = params => {
    console.log('onBeforeChange', params); /* eslint-disable-line */
  };

  onChange = params => {
    this.setState({ value: params.value });
    console.log('onChange', params); /* eslint-disable-line */
  };

  onAfterChange = params => {
    console.log('onAfterChange', params); /* eslint-disable-line */
  };

  render() {
    const { label, ...rest } = this.props;
    const { value } = this.state;
    const displayedValue = Array.isArray(value) ? `${value[0]} - ${value[1]}` : value;

    return (
      <Slider
        {...rest}
        value={value}
        onBeforeChange={this.onBeforeChange}
        onChange={this.onChange}
        onAfterChange={this.onAfterChange}
      >
        {label && (
          <Block>
            <Block margin={Block.REFS.MARGIN.XS} size={Span.REFS.SIZES.S} color={Span.REFS.COLORS.MINOR}>
              {label}
            </Block>
            <Block margin={Block.REFS.MARGIN.XS} weight={Span.REFS.WEIGHTS.BOLD}>
              <H3 color={Span.REFS.COLORS.PRIMARY}>{displayedValue}</H3>
            </Block>
          </Block>
        )}
      </Slider>
    );
  }
}
