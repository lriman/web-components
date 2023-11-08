import React, { PureComponent } from 'react';

import InputSearch from '../Input/InputSearch';
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

export default class InputSearchExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: initValue,
      options: initOptions,
      isSearching: false,
    };
  }

  onSearch = params => {
    this.setState({ isSearching: true });
    if (this.searchTimer) clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.search(params.value);
    }, 200);
  };

  onChange = params => {
    this.setState({ value: params.value });
  };

  search = value => {
    const searchRegExp = new RegExp(value, 'ig');
    const options = initOptions.filter(
      option =>
        option.title.search(searchRegExp) >= 0 ||
        option.extra.search(searchRegExp) >= 0 ||
        option.describe.search(searchRegExp) >= 0,
    );
    this.setState({ options, isSearching: false });
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
    const { value, options, isSearching } = this.state;
    return (
      <InputSearch
        {...this.props}
        value={value}
        options={options}
        isSearching={isSearching}
        onChange={this.onChange}
        onSearch={this.onSearch}
        optionRenderer={this.optionRenderer}
      />
    );
  }
}
