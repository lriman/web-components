import React, { useState } from 'react';

import GameTypes from '../GameTypes';

const initialValues = {
  BLITZ: [],
};

const options = {
  fields: [
    {
      id: 'BLITZ',
      size: 12,
      title: 'Блиц',
      value: 'blitz',
      text: 'Быстрые игры с лимитом от 3 до 5 минут на всю партию для каждого участника',
    },
  ],
  times: {
    blitz: [
      {
        id: 'BLITZ-3',
        value: '3',
        title: '3',
      },
      {
        id: 'BLITZ-3|2',
        value: '3|2',
        title: '3|2',
      },
      {
        id: 'BLITZ-5',
        value: '5',
        title: '5',
      },
      {
        id: 'BLITZ-5|2',
        value: '5|2',
        title: '5|2',
      },
    ],
  },
};

const GameTypesExample = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = ({ id, value }) => {
    if (values[id].find(item => item === value)) {
      setValues(prevValues => ({
        ...prevValues,
        [id]: prevValues[id].filter(item => item !== value),
      }));
    } else {
      setValues(prevValues => ({
        ...prevValues,
        [id]: [...prevValues[id], value],
      }));
    }
  };

  return <GameTypes values={values} options={options} handleChange={handleChange} />;
};

export default GameTypesExample;
