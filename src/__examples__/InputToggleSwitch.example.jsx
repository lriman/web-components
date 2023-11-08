import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputToggleSwitch from '../Input/InputToggleSwitch';

export default class InputToggleSwitchExample extends PureComponent {
  static propTypes = {
    value: PropTypes.bool,
  };

  static defaultProps = {
    value: false,
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

    return <InputToggleSwitch {...rest} checked={value} onChange={this.onChange} />;
  }
}
