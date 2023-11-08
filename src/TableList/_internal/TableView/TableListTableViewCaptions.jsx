import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../../_utils';
import { IconArrowDownTailed, IconArrowLeft, IconArrowRight, IconArrowUpTailed } from '../../../Icon';

import { COMPONENTS, REFS } from '../../_constants';
import {
  StyledTableListTableViewCaptions,
  StyledTableListTableViewRow,
  StyledTableListTableViewCell,
  StyledTableListTableViewCellIcon,
} from '../../_style';

export default function TableListTableViewCaptions(props) {
  const { items, colorType, renderCaption, sortableColumns, isScrollable, handleSort, handleGo } = props;

  return (
    <StyledTableListTableViewCaptions {...addDataAttributes({ component: COMPONENTS.CAPTIONS })} sColorType={colorType}>
      <StyledTableListTableViewRow isScrollable={isScrollable}>
        {items.map(item => (
          <StyledTableListTableViewCell
            key={item.id}
            sWidth={item.tableViewWidth}
            sMinWidth={item.tableViewMinWidth}
            sJustify={item.justify}
            isClickable={!!item.sort}
            cellPadding={item.cellPadding}
            onClick={() => handleSort(item)}
          >
            {item.canGoLeft && (
              <StyledTableListTableViewCellIcon sMargin="0 8px 0 0" onClick={() => handleGo('left')}>
                <IconArrowLeft size="xs" />
              </StyledTableListTableViewCellIcon>
            )}
            {renderCaption ? renderCaption({ data: item }) : item.title}
            {sortableColumns[item.id] === REFS.SORT_ORDERS.ASC && (
              <StyledTableListTableViewCellIcon sMargin="0 0 0 8px">
                <IconArrowUpTailed size="xs" color="accent1" />
              </StyledTableListTableViewCellIcon>
            )}
            {sortableColumns[item.id] === REFS.SORT_ORDERS.DESC && (
              <StyledTableListTableViewCellIcon sMargin="0 0 0 8px">
                <IconArrowDownTailed size="xs" color="accent1" />
              </StyledTableListTableViewCellIcon>
            )}
            {item.canGoRight && (
              <StyledTableListTableViewCellIcon sMargin="0 0 0 8px" onClick={() => handleGo('right')}>
                <IconArrowRight size="xs" />
              </StyledTableListTableViewCellIcon>
            )}
          </StyledTableListTableViewCell>
        ))}
      </StyledTableListTableViewRow>
    </StyledTableListTableViewCaptions>
  );
}

TableListTableViewCaptions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
      tableViewWidth: PropTypes.number.isRequired,
      tableViewMinWidth: PropTypes.number,
      cardsViewWidth: PropTypes.number,
    }),
  ).isRequired,
  colorType: PropTypes.string.isRequired,
  renderCaption: PropTypes.func,
  type: PropTypes.string.isRequired,
  sortableColumns: PropTypes.shape().isRequired,
  isScrollable: PropTypes.bool,
  handleSort: PropTypes.func.isRequired,
  handleGo: PropTypes.func.isRequired,
};

TableListTableViewCaptions.defaultProps = {
  renderCaption: undefined,
  isScrollable: false,
};
