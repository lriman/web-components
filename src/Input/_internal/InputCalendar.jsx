import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import Card from '../../Card';
import Calendar from '../../Calendar';

import { COMPONENTS } from '../_constants';
import { StyledInputCalendar } from '../_style';

export default class InputCalendar extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    onPopupElementMouseDown: PropTypes.func.isRequired,
    onPopupElementMouseUp: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    disabledDate: PropTypes.func,
  };

  static defaultProps = {
    value: null,
    disabledDate: () => false,
  };

  render() {
    const { value, disabledDate, onPopupElementMouseDown, onPopupElementMouseUp, onSelect } = this.props;

    return (
      <Card boxShadow={Card.REFS.BOX_SHADOWS.GENERAL()} background={Card.REFS.COLORS.WHITE}>
        <StyledInputCalendar
          {...addDataAttributes({ component: COMPONENTS.CALENDAR })}
          onMouseDown={onPopupElementMouseDown}
          onMouseUp={onPopupElementMouseUp}
        >
          <Calendar value={value} onSelect={onSelect} disabledDate={disabledDate} />
        </StyledInputCalendar>
      </Card>
    );
  }
}
