import React, { PureComponent } from 'react';

import InputSelect from '../Input/InputSelect';
import Option from '../Option';

const initValue = null;
const initOptions = [
  {
    value: '1',
    title: 'Title 1',
    extra: 'Extra 1',
    describe: 'Describe 1',
  },
  {
    value: '2',
    title: 'Title 2',
    extra: 'Extra 2',
    describe: 'Describe 2',
  },
  {
    value: '3',
    title: 'Title 3',
    extra: 'Extra 3',
    describe: 'Describe 3',
  },
  {
    value: '4',
    title: 'Title 4',
    extra: 'Extra 4',
    describe: 'Describe 4',
  },
  {
    value: '5',
    title: 'Title 5',
    extra: 'Extra 5',
    describe: 'Describe 5',
  },
  {
    value: '6',
    title: 'Title 6',
    extra: 'Extra 6',
    describe: 'Describe 6',
  },
];

export default class InputSelectExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: initValue,
      options: initOptions,
    };
  }

  onChange = params => {
    this.setState({ value: params.value });
  };

  optionRenderer = ({ option }) => (
    <Option
      value={option.value}
      title={option.title}
      extra={option.extra}
      describe={option.describe}
      highlight={option.searchValue}
    />
  );

  render() {
    const { value, options } = this.state;
    return (
      <InputSelect
        {...this.props}
        value={value}
        options={options}
        onChange={this.onChange}
        optionRenderer={this.optionRenderer}
      />
    );
  }
}
