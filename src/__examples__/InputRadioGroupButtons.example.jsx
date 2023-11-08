import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputRadioGroup from '../Input/InputRadioGroup';
import Grid, { Item } from '../Grid';
import IconViewTable from '../Icon/IconViewTable';
import IconViewTimeline from '../Icon/IconViewTimeline';

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
        <Grid>
          <Item>
            <InputRadioGroup.Button
              value="1"
              isError={rest.isError}
              isWarning={rest.isWarning}
              disabled={rest.disabled}
            >
              <IconViewTable display="block" />
            </InputRadioGroup.Button>
          </Item>
          <Item>
            <InputRadioGroup.Button
              value="2"
              isError={rest.isError}
              isWarning={rest.isWarning}
              disabled={rest.disabled}
            >
              <IconViewTimeline display="block" />
            </InputRadioGroup.Button>
          </Item>
        </Grid>
      </InputRadioGroup>
    );
  }
}
