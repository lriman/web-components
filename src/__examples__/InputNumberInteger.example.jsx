import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputNumberInteger from '../Input/InputNumberInteger';

export default class InputNumberIntegerExample extends PureComponent {
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

    return <InputNumberInteger {...rest} value={value} onChange={this.onChange} />;
  }
}
