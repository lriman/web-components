import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputRadioGroup from '../Input/InputRadioGroup';

export default class InputCheckboxExample extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: '1',
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

    return (
      <InputRadioGroup {...rest} value={value} onChange={this.onChange}>
        <div>
          <InputRadioGroup.Option value="1" isError={rest.isError} isWarning={rest.isWarning} disabled={rest.disabled}>
            InputRadioGroup Option 1
          </InputRadioGroup.Option>
        </div>
        <div>
          <InputRadioGroup.Option value="2" isError={rest.isError} isWarning={rest.isWarning} disabled={rest.disabled}>
            InputRadioGroup Option 2
          </InputRadioGroup.Option>
        </div>
      </InputRadioGroup>
    );
  }
}
