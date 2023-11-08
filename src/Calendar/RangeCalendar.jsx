import React from 'react';
import PropTypes from 'prop-types';
import RcRangeCalendar from 'rc-calendar/lib/RangeCalendar';
import RU from 'rc-calendar/lib/locale/ru_RU';

import { addDataAttributes } from '../_utils';

import { COMPONENTS } from './_constants';
import { StyledCalendar } from './_style';

export default function RangeCalendar(props) {
  const { onSelect, disabledDate } = props;
  return (
    <StyledCalendar {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <RcRangeCalendar
        locale={RU}
        showDateInput={false}
        prefixCls="omay-ds-components-rc-calendar"
        onSelect={params => onSelect(params)}
        disabledDate={disabledDate}
        showToday={false}
        showOk={false}
      />
    </StyledCalendar>
  );
}

RangeCalendar.propTypes = {};

RangeCalendar.defaultProps = {};

RangeCalendar.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func.isRequired,
  disabledDate: PropTypes.func,
};

RangeCalendar.defaultProps = {
  value: null,
  disabledDate: () => false,
};
