import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputDateCalendar from '../Input/InputDateCalendar';

export default class InputDateCalendarExample extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: null,
  };

  constructor(props) {
    super(props);

    const { value } = this.props;

    this.state = { value };
  }

  onChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    const { ...rest } = this.props;
    const { value } = this.state;

    return <InputDateCalendar {...rest} value={value} onChange={this.onChange} />;
  }
}
