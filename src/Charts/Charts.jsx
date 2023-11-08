import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';

import CustomTooltip from './_internal/CustomTooltip';
import { COMPONENTS } from './_constants';
import { StyledCharts } from './_style';
import { prepareData } from './_utils';

export default function Charts(props) {
  const { data, xAxis } = props;

  const theme = useContext(ThemeContext);
  const { colorType = 'normal' } = useContext(ColorContext);

  const preparedData = prepareData(data, xAxis);

  return (
    <StyledCharts {...addDataAttributes({ component: COMPONENTS.GENERAL })} sColorType={colorType}>
      <ResponsiveContainer>
        <LineChart type="linear" data={preparedData} margin={{ top: 4, right: 0, left: 30, bottom: 4 }}>
          <CartesianGrid horizontal={false} stroke={theme.charts[colorType].strokesColor} />
          <XAxis dataKey="name" interval={0} tickLine={false} />
          <YAxis
            orientation="right"
            width={40}
            padding={{ bottom: 5 }}
            tickLine={false}
            domain={['dataMin - 10', 'dataMax + 10']}
          />
          <Tooltip content={CustomTooltip} />
          {data.map(item => (
            <Line
              key={item.id}
              dataKey={item.title}
              stroke={item.color}
              strokeWidth={2}
              dot={{ r: 4, fill: item.color, strokeWidth: 0 }}
              activeDot={{
                r: 6,
                fill: item.color,
                stroke: theme.charts[colorType].activeDotStrokesColor,
                strokeWidth: 4,
              }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </StyledCharts>
  );
}

Charts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      values: PropTypes.shape().isRequired,
    }),
  ).isRequired,
  xAxis: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
