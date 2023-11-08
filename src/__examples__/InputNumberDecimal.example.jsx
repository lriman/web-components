import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputNumberDecimal from '../Input/InputNumberDecimal';

export default class InputNumberDecimalExample extends PureComponent {
  static propTypes = {
    value: PropTypes.number,
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

    return <InputNumberDecimal {...rest} value={value} onChange={this.onChange} />;
  }
}
