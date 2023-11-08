import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputText from '../Input/InputText';

export default class InputTextExample extends PureComponent {
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

    return <InputText {...rest} value={value} onChange={this.onChange} />;
  }
}
