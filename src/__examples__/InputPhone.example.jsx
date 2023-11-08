import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputPhone from '../Input/InputPhone';

export default class InputPhoneExample extends PureComponent {
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

    return <InputPhone {...rest} value={value} onChange={this.onChange} />;
  }
}
