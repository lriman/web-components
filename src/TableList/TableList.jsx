import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';

import { COMPONENTS, REFS } from './_constants';
import { StyledTableList, StyledTableListCardView, StyledTableListTableView } from './_style';

import { TableListTableViewCaptions, TableListTableViewData } from './_internal/TableView';
import { TableListCardsViewData } from './_internal/CardsView';
import TableListPagination from './_internal/Pagination';

import {
  getInitSortableColumns,
  getColumnsPagination,
  getCalcCaptions,
  getSortableColumns,
  getSortedData,
  getUpdateSortItem,
  getPaginatedTableData,
  getInitPagination,
  getPaginateTotal,
} from './_utils';

export default function TableList(props) {
  const {
    viewSwitchingWidth,
    captions,
    data,
    type,
    labels,
    isWithoutRowHover,
    isWithoutCaptions,
    renderCaption,
    renderSectionTitle,
    renderRow,
    renderCell,
    renderCardItem,
    isDraggable,
    isFitContent,
    isScrollable,
    paginateLimit,
    handleOnDragEnd,
    ...rest
  } = props;

  const node = useRef(null);

  const [nodeWidth, setNodeWidth] = useState(0);
  const [tableData, setTableData] = useState(data);
  const [sortableColumns, setSortableColumns] = useState(getInitSortableColumns(captions));
  const [columnsPagination, setColumnsPagination] = useState(null);
  const [pagination, setPagination] = useState(getInitPagination(paginateLimit, data));

  const handleResize = () => {
    const { width } = node.current.getBoundingClientRect();
    if (nodeWidth !== width) setNodeWidth(node.current.getBoundingClientRect().width);
  };

  const handleSort = item => {
    if (!item.sort) return;
    const sortableColumnsData = getSortableColumns(sortableColumns, item);
    setSortableColumns(sortableColumnsData);
    setTableData(getSortedData(data, item, sortableColumnsData));
  };

  const handleGo = value => {
    if (value === 'left') setColumnsPagination({ ...columnsPagination, offset: columnsPagination.offset - 1 });
    if (value === 'right') setColumnsPagination({ ...columnsPagination, offset: columnsPagination.offset + 1 });
  };

  useEffect(() => {
    const item = getUpdateSortItem(sortableColumns, captions);
    if (item) setTableData(getSortedData(data, item, sortableColumns));
    else setTableData(data);
    if (pagination) setPagination({ ...pagination, total: getPaginateTotal(data) });
  }, [data, captions, sortableColumns]); //eslint-disable-line

  useEffect(() => {
    setColumnsPagination(getColumnsPagination(nodeWidth, captions));
  }, [nodeWidth, captions]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const { colorType = 'normal' } = useContext(ColorContext);

  const calcCaptions = useMemo(() => getCalcCaptions(captions, columnsPagination), [captions, columnsPagination]);
  const paginatedTableData = useMemo(() => getPaginatedTableData(tableData, pagination), [tableData, pagination]);

  return (
    <StyledTableList {...addDataAttributes({ component: COMPONENTS.GENERAL })} ref={node}>
      {!!nodeWidth && nodeWidth < viewSwitchingWidth && (
        <StyledTableListCardView>
          <TableListCardsViewData
            data={data}
            captions={captions}
            renderSectionTitle={renderSectionTitle}
            renderRow={renderRow}
            renderCell={renderCell}
            colorType={colorType}
            renderCardItem={renderCardItem}
            {...rest}
          />
        </StyledTableListCardView>
      )}
      {!!nodeWidth && nodeWidth >= viewSwitchingWidth && (
        <StyledTableListTableView isFitContent={isFitContent} isScrollable={isScrollable}>
          {!isWithoutCaptions && (
            <TableListTableViewCaptions
              items={calcCaptions}
              colorType={colorType}
              type={type}
              renderCaption={renderCaption}
              sortableColumns={sortableColumns}
              isScrollable={isScrollable}
              handleSort={handleSort}
              handleGo={handleGo}
            />
          )}
          <TableListTableViewData
            data={paginatedTableData}
            type={type}
            captions={calcCaptions}
            renderSectionTitle={renderSectionTitle}
            renderRow={renderRow}
            renderCell={renderCell}
            colorType={colorType}
            isWithoutRowHover={isWithoutRowHover}
            isDraggable={isDraggable}
            isScrollable={isScrollable}
            handleOnDragEnd={handleOnDragEnd}
            {...rest}
          />
          <TableListPagination labels={labels} pagination={pagination} setPagination={setPagination} />
        </StyledTableListTableView>
      )}
    </StyledTableList>
  );
}

TableList.propTypes = {
  viewSwitchingWidth: PropTypes.number.isRequired,
  captions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
      title: PropTypes.string.isRequired,
      tableViewWidth: PropTypes.number.isRequired,
      tableViewMinWidth: PropTypes.number,
      cardsViewWidth: PropTypes.number,
      isPaginate: PropTypes.bool,
      sortOrder: PropTypes.oneOf(Object.values(REFS.SORT_ORDERS)),
      sort: PropTypes.func,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
  type: PropTypes.oneOf(Object.values(REFS.TYPES)),
  labels: PropTypes.shape(),
  isWithoutRowHover: PropTypes.bool,
  isWithoutCaptions: PropTypes.bool,
  renderCaption: PropTypes.func,
  renderSectionTitle: PropTypes.func,
  renderRow: PropTypes.func,
  renderCell: PropTypes.func,
  renderCardItem: PropTypes.func,
  isDraggable: PropTypes.bool,
  isFitContent: PropTypes.bool,
  isScrollable: PropTypes.bool,
  paginateLimit: PropTypes.number,
  handleOnDragEnd: PropTypes.func,
};

TableList.defaultProps = {
  type: REFS.TYPES.PRIMARY,
  labels: undefined,
  isWithoutRowHover: false,
  isWithoutCaptions: false,
  renderCaption: undefined,
  renderSectionTitle: undefined,
  renderRow: undefined,
  renderCell: undefined,
  renderCardItem: undefined,
  isDraggable: false,
  isFitContent: false,
  isScrollable: false,
  paginateLimit: undefined,
  handleOnDragEnd: () => {},
};
