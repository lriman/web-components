import React, { useState } from 'react';

import { TYPES, INPUT_REFS as REFS } from './_constants';
import InputSuggest from './InputSuggest';
import InputTimeField from './_internal/InputTimeField';

const hours = '00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23';
const minutes = '00,15,30,45';
const initOptions = hours
  .split(',')
  .reduce((result, h) => [...result, ...minutes.split(',').map(m => `${h}:${m}`)], [])
  .map(item => ({ value: item, title: item }));

export default function InputTime(props) {
  const [options, setOptions] = useState(initOptions);

  const handleSearch = ({ value }) => {
    const searchRegExp = new RegExp(`^${value}`, 'ig');
    setOptions(initOptions.filter(option => option.title.search(searchRegExp) >= 0));
  };

  return <InputSuggest {...props} options={options} inputElement={InputTimeField} onSearch={handleSearch} />;
}

InputTime.REFS = REFS;

InputTime.inputType = TYPES.TIME;
