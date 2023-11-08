import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputCheckbox from '../Input/InputCheckbox';

export default class InputCheckboxExample extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
  };

  static defaultProps = {
    checked: false,
  };

  constructor(props) {
    super(props);

    const { checked } = this.props;

    this.state = { value: checked };
  }

  onChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    const { ...rest } = this.props;
    const { value } = this.state;

    return <InputCheckbox {...rest} checked={value} onChange={this.onChange} />;
  }
}
