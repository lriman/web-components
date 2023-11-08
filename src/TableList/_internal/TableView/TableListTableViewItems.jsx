import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../../_utils';

import TableListTableViewItem from './TableListTableViewItem';
import { COMPONENTS } from '../../_constants';
import {
  StyledTableListTableViewItems,
  StyledTableListTableViewItem,
  StyledTableListTableViewItemsInner,
} from '../../_style';

function TableListTableViewItems(props) {
  const {
    captions,
    items,
    type,
    renderRow,
    renderCell,
    colorType,
    isWithoutRowHover,
    isDraggable,
    isScrollable,
    ...rest
  } = props;

  return (
    <StyledTableListTableViewItems {...addDataAttributes({ component: COMPONENTS.ITEMS })}>
      <StyledTableListTableViewItemsInner>
        {items.map((item, index) => (
          <StyledTableListTableViewItem key={item.id}>
            {renderRow ? (
              renderRow({
                ...rest,
                id: item.id,
                children: (
                  <TableListTableViewItem
                    key={item.id}
                    item={item}
                    type={type}
                    captions={captions}
                    renderCell={renderCell}
                    colorType={colorType}
                    isWithoutRowHover={isWithoutRowHover}
                    isDraggable={isDraggable}
                    isScrollable={isScrollable}
                    index={index}
                    lastIndex={items.length - 1}
                    {...rest}
                  />
                ),
              })
            ) : (
              <TableListTableViewItem
                key={item.id}
                item={item}
                type={type}
                captions={captions}
                renderCell={renderCell}
                colorType={colorType}
                isWithoutRowHover={isWithoutRowHover}
                isDraggable={isDraggable}
                isScrollable={isScrollable}
                index={index}
                lastIndex={items.length - 1}
                {...rest}
              />
            )}
          </StyledTableListTableViewItem>
        ))}
      </StyledTableListTableViewItemsInner>
    </StyledTableListTableViewItems>
  );
}

TableListTableViewItems.propTypes = {
  captions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
      tableViewWidth: PropTypes.number.isRequired,
      cardsViewWidth: PropTypes.number,
    }),
  ).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  type: PropTypes.string.isRequired,
  isWithoutRowHover: PropTypes.bool.isRequired,
  colorType: PropTypes.string.isRequired,
  renderRow: PropTypes.func,
  renderCell: PropTypes.func,
  isDraggable: PropTypes.bool.isRequired,
  isScrollable: PropTypes.bool,
};

TableListTableViewItems.defaultProps = {
  renderRow: undefined,
  renderCell: undefined,
  isScrollable: false,
};

export default TableListTableViewItems;
