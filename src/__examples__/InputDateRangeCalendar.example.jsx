import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputDateRangeCalendar from '../Input/InputDateRangeCalendar';

export default class InputDateRangeCalendarExample extends PureComponent {
  static propTypes = {
    value: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    value: [null, null],
  };

  constructor(props) {
    super(props);

    const { value } = this.props;

    this.state = { value };
  }

  onChange = ({ value }) => {
    this.setState({ value });
  };

  onBlur = ({ value }) => {
    this.setState({ value });
  };

  render() {
    const { ...rest } = this.props;
    const { value } = this.state;

    return <InputDateRangeCalendar {...rest} value={value} onChange={this.onChange} onBlur={this.onBlur} />;
  }
}
