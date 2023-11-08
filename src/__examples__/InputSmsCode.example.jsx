import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputSmsCode from '../Input/InputSmsCode';

export default class InputSmsCodeExample extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: undefined,
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

    return <InputSmsCode {...rest} value={value} onChange={this.onChange} />;
  }
}
