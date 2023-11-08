import React from 'react';
import PropTypes from 'prop-types';
import RcCalendar from 'rc-calendar';
import RU from 'rc-calendar/lib/locale/ru_RU';

import { addDataAttributes } from '../_utils';

import { COMPONENTS } from './_constants';
import { StyledCalendar } from './_style';
import { convertMomentValue } from './_utils';

export default function Calendar(props) {
  const { value, onSelect, disabledDate } = props;

  return (
    <StyledCalendar {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <RcCalendar
        locale={RU}
        showDateInput={false}
        prefixCls="omay-ds-components-rc-calendar"
        defaultValue={convertMomentValue(value)}
        onSelect={params => onSelect(convertMomentValue(params))}
        disabledDate={disabledDate}
        showToday={false}
        renderFooter={null}
      />
    </StyledCalendar>
  );
}

Calendar.propTypes = {};

Calendar.defaultProps = {};

Calendar.propTypes = {
  value: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  disabledDate: PropTypes.func,
};

Calendar.defaultProps = {
  value: null,
  disabledDate: () => false,
};
